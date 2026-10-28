// End-to-end check in headless Microsoft Edge with a fake Sheet receiver (never the real Sheet):
// Marathi Youth form, conditions, district list, reopening the page sends "In progress", resume, follow-up,
// submit sends "Completed" in the same row (same session_id and User ID), language switch and English fallback.
// Run: node tests/e2e_v3.mjs   (starts its own web server on 8791 and fake Sheet on 8799)
import { spawn } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const got = [];
const sheet = createServer((req, res) => {
  let b = ""; req.on("data", c => b += c); req.on("end", () => {
    if (req.method === "POST") got.push(JSON.parse(b));
    res.writeHead(200, { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain" }); res.end("ok");
  });
}).listen(8799);
const web = spawn("python", ["-m", "http.server", "8791"], { cwd: ROOT, stdio: "ignore" });
const URL_ = "http://localhost:8791/?t=youth&lang=mr&sheet=" + encodeURIComponent("http://localhost:8799/");
const prof = mkdtempSync(join(tmpdir(), "lf3-edge-"));
const sleep = ms => new Promise(r => setTimeout(r, ms));
await sleep(800);
const edge = spawn(EDGE, ["--headless=new", "--disable-gpu", "--remote-debugging-port=9335", `--user-data-dir=${prof}`, URL_], { stdio: "ignore" });
let ws;
for (let i = 0; i < 40 && !ws; i++) {
  await sleep(500);
  try {
    const list = await (await fetch("http://127.0.0.1:9335/json")).json();
    const page = list.find(x => x.type === "page" && x.url.includes("8791"));
    if (page) ws = new WebSocket(page.webSocketDebuggerUrl);
  } catch {}
}
await new Promise(r => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = m => { const d = JSON.parse(m.data); if (pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } };
const cdp = (method, params = {}) => new Promise(res => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async expr => {
  const r = await cdp("Runtime.evaluate", { expression: expr, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error(expr + "\n" + JSON.stringify(r.result.exceptionDetails).slice(0, 400));
  return r.result?.result?.value;
};
let fails = 0;
const ok = (cond, msg) => { console.log((cond ? "ok   " : "FAIL ") + msg); if (!cond) fails++; };
const helpers = `
  window.T = {
    q() { return document.querySelector('.card')?.dataset.q || ''; },
    txt(v) { const e = document.querySelector('.card textarea[id^=f_], .card input[id^=f_]'); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); },
    sel(v) { const e = document.querySelector('.card select'); e.value = v; e.dispatchEvent(new Event('change', { bubbles: true })); },
    chip(v) { document.querySelector('.opt[data-v="' + v + '"]').click(); },
    probe(v) { const e = document.querySelector('[id^=pa_]'); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); },
    fu() { return !!document.querySelector('.followup'); },
    next() { document.getElementById('next').click(); },
    text() { return document.getElementById('qtext')?.textContent || ''; },
  }; true`;
const step = async (expr, auto = false) => {
  const before = await ev(`T.q()`);
  await ev(expr + "; true");
  if (!auto) return sleep(150);
  for (let i = 0; i < 40 && (await ev(`T.q()`)) === before; i++) await sleep(100);
  await sleep(100);
};
const last = () => got[got.length - 1];
const col = (rec, name) => rec.values[rec.columns.indexOf(name)];

try {
  await sleep(1500); await ev(helpers);
  // Start screen
  ok(await ev(`document.querySelectorAll('.langs button').length`) === 8, "eight languages offered");
  ok(await ev(`document.getElementById('tag').textContent`) === "#तुम्हीसांगा", "Marathi #TumBolo in the header");
  ok(await ev(`!!document.querySelector('.brand img[alt=Shikshagraha]')`), "Shikshagraha logo shown");
  ok((await ev(`document.querySelector('.opening').textContent`)).includes("तरुणांना दररोज"), "Marathi opening text from the Excel");
  ok(await ev(`document.getElementById('startBtn').disabled`) === true, "Start locked until consent");
  await ev(`document.getElementById('consent').click(); document.getElementById('startBtn').click(); true`); await sleep(300);

  ok(await ev(`T.q()`) === "Q0_1", "first question is 0.1 age");
  ok((await ev(`T.text()`)).includes("वय"), "question shown in Marathi");
  await step(`T.chip('O2')`, true);
  await step(`T.chip('O1')`, true);
  ok(await ev(`T.q()`) === "Q0_3", "state question");
  await step(`T.sel('maharashtra')`); await step(`T.next()`);
  ok(await ev(`[...document.querySelectorAll('.card select option')].some(o => o.value === 'Pune')`), "district list is Maharashtra's");
  ok(await ev(`[...document.querySelectorAll('.card select option')].every(o => o.value !== 'Patna')`), "no Bihar districts");
  await step(`T.sel('Pune')`); await step(`T.next()`);
  await step(`T.sel('O8')`); await step(`T.next()`);
  ok(await ev(`T.q()`) === "Q0_5d", "Working -> asks where employed (0.5d), skips 0.5a-c");
  await step(`T.chip('O3')`, true);
  ok(await ev(`T.q()`) === "Q0_6", "then 0.6");

  // Close and open again: the unfinished response reaches the Sheet as "In progress"
  const before = got.length;
  await cdp("Page.reload"); await sleep(2500); await ev(helpers);
  ok(got.length > before && col(last(), "Status") === "In progress", "reopening sends the unfinished response as In progress");
  const sid = col(last(), "session_id"), uid = col(last(), "User ID");
  ok(/^LF3-\d{8}-[A-Z0-9]{6}$/.test(sid) && /^U-[A-Z0-9]{8}$/.test(uid), "session_id and User ID formats");
  ok(col(last(), "Stopped at") === "Q0.6", "Stopped at = Q0.6");
  ok(col(last(), "Q0.4 Which district do you stay in?") === "Pune", "district saved in English");
  ok(col(last(), "Q0.5d Where are you currently employed?") === "IT", "option saved as English text");
  ok(last().tool === "1MV Listening Form V3" && last().persona === "youth", "payload names V3 and the form");
  const n1 = got.length;
  await cdp("Page.reload"); await sleep(2000); await ev(helpers);
  ok(got.length === n1, "nothing re-sent when nothing changed");

  // Resume and finish
  ok(await ev(`!!document.getElementById('resumeYes')`), "resume offered");
  await ev(`document.getElementById('resumeYes').click(); true`); await sleep(300); await ev(helpers);
  ok(await ev(`T.q()`) === "Q0_6", "resumes at 0.6");
  await step(`T.chip('O1')`, true);
  await step(`T.chip('O5')`, true);
  await step(`T.chip('O2')`, true);
  ok(await ev(`T.q()`) === "Q1A", "disability = No skips 0.8a");
  ok(await ev(`!!document.querySelector('.lead')`), "thank-you lead shown above 1A");
  await step(`T.txt('Doctor')`); await step(`T.next()`);
  ok(await ev(`T.fu()`), "one-word answer gets a follow-up");
  ok((await ev(`document.querySelector('.followup .fu').textContent`)).includes("कोणत्या प्रकारचे काम"), "follow-up asks 1A again in other words (Marathi)");
  await step(`T.probe('Child doctor in a government hospital in Pune')`); await step(`T.next()`);
  ok(await ev(`T.q()`) === "Q1B", "follow-up answered, moves on");
  await step(`T.txt('A simple life with my family in my own town')`); await step(`T.next()`);
  await step(`T.txt('abc')`); await step(`T.next()`);
  ok((await ev(`document.getElementById('err').textContent`)).length > 0, "income must be a number");
  await step(`T.txt('50000')`); await step(`T.next()`);
  await step(`T.chip('O2')`, true);
  for (const [qq, a] of [["Q3", "Communication, computer skills and English speaking"]]) { ok(await ev(`T.q()`) === qq, qq); await step(`T.txt(${JSON.stringify(a)})`); await step(`T.next()`); }
  await step(`T.chip('O2')`, true);
  for (const a of ["From YouTube videos and my teacher at school", "Money for coaching and no hospital nearby", "More practical labs and fewer exams in school", "Teach younger children in my village on Sundays"]) { await step(`T.txt(${JSON.stringify(a)})`); await step(`T.next()`); }
  await sleep(2600);
  ok(await ev(`!!document.querySelector('.thanks')`), "thank-you screen");
  ok((await ev(`document.querySelector('.thanks').textContent`)).includes("tumbolo.shikshagraha.org"), "closing text links to tumbolo.shikshagraha.org");
  const done = last();
  ok(col(done, "Status") === "Completed" && col(done, "session_id") === sid && col(done, "User ID") === uid, "Completed in the same row (same session_id, User ID)");
  ok(col(done, "Fups: Q1A What do you want to be when you're older?") === "Child doctor in a government hospital in Pune", "follow-up answer in its Fups column");
  ok(col(done, "Q0.5a What course or stream are you in?") === "" && col(done, "Q0.8a If you are comfortable sharing, could you share what kind of disability it is?") === "", "skipped questions are blank");
  ok(col(done, "Language") === "mr" && col(done, "Stopped at") === "", "language mr, no Stopped at when completed");
  ok(await ev(`JSON.parse(localStorage.getItem('lf3.responses'))[0].sent`) === true, "device marks it sent after the Sheet says ok");
  ok(await ev(`localStorage.getItem('lf.responses.v1') === null && localStorage.getItem('lf.draft.v2') === null`), "Form 1 storage untouched");

  // Language switch: Tamil shows Tamil #TumBolo and English questions with a note
  await ev(`document.getElementById('home').click(); true`); await sleep(200);
  await ev(`const s = document.getElementById('langSel'); s.value = 'ta'; s.dispatchEvent(new Event('change')); true`); await sleep(200);
  ok(await ev(`document.getElementById('tag').textContent`) === "#நீங்கசொல்லுங்க", "Tamil #TumBolo after switching");
  await ev(`document.querySelector('[data-form=parent]').click(); true`); await sleep(200);
  ok(/\p{Script=Tamil}/u.test(await ev(`document.querySelector('.opening').textContent`)), "Tamil opening text");
  ok(!(await ev(`[...document.querySelectorAll('.notice')].some(n => n.textContent.includes('shown in English'))`)), "no 'shown in English' note when translated");
  ok(/\p{Script=Tamil}/u.test(await ev(`document.getElementById('startBtn').textContent`)), "Tamil Start button");
  await ev(`document.getElementById('consent').click(); document.getElementById('startBtn').click(); true`); await sleep(300); await ev(helpers);
  ok(/\p{Script=Tamil}/u.test(await ev(`T.text()`)), "Tamil parent question");
  ok(/\p{Script=Tamil}/u.test(await ev(`document.querySelector('.opt').textContent`)), "Tamil options");
  const m = await ev(`({ w: document.documentElement.scrollWidth, v: innerWidth })`);
  ok(m.w <= m.v, "no sideways scroll");
} catch (e) { console.log("FAIL " + e.message); fails++; }
finally {
  edge.kill(); web.kill(); sheet.close();
  console.log(fails ? `${fails} failed` : "all passed");
  process.exit(fails ? 1 : 0);
}
