// Checks lang/<code>.json against lang/_source.json: every key present and non-empty, {placeholders},
// URLs, phone numbers and #TumBolo kept, text written in the language's script.
// Run: node tools/check_lang.mjs hi kn te or ta pa
import { readFileSync, existsSync } from "node:fs";
const src = JSON.parse(readFileSync(new URL("../lang/_source.json", import.meta.url)));
const SCRIPT = { hi: /\p{Script=Devanagari}/u, mr: /\p{Script=Devanagari}/u, kn: /\p{Script=Kannada}/u, te: /\p{Script=Telugu}/u,
  or: /\p{Script=Oriya}/u, ta: /\p{Script=Tamil}/u, pa: /\p{Script=Gurmukhi}/u };
let bad = 0;
for (const code of process.argv.slice(2)) {
  const f = new URL(`../lang/${code}.json`, import.meta.url);
  if (!existsSync(f)) { console.log(`${code}: file missing`); bad++; continue; }
  let tr; try { tr = JSON.parse(readFileSync(f, "utf8")); } catch (e) { console.log(`${code}: not valid JSON (${e.message})`); bad++; continue; }
  const errs = [];
  for (const [k, v] of Object.entries(src)) {
    const t = tr[k];
    if (typeof t !== "string" || !t.trim()) { errs.push(`missing ${k}`); continue; }
    for (const ph of v.en.match(/\{\w+\}/g) || []) if (!t.includes(ph)) errs.push(`${k}: lost ${ph}`);
    for (const keep of v.en.match(/tumbolo\.shikshagraha\.org|14416|1-800-891-4416|#TumBolo/g) || []) if (!t.includes(keep)) errs.push(`${k}: lost ${keep}`);
    if (!SCRIPT[code].test(t) && /[A-Za-z]{3}/.test(v.en) && !/^[\d\s₹,.–-]+$/.test(v.en)) errs.push(`${k}: not in ${code} script`);
  }
  for (const k of Object.keys(tr)) if (!(k in src)) errs.push(`extra key ${k}`);
  console.log(`${code}: ${Object.keys(src).length - errs.filter(e => e.startsWith("missing")).length}/${Object.keys(src).length} keys, ${errs.length} problems`);
  errs.slice(0, 15).forEach(e => console.log("   " + e));
  bad += errs.length;
}
process.exit(bad ? 1 : 0);
