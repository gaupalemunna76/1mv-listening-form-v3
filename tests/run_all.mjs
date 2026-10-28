// Runs every check. Use before each push:  node tests/run_all.mjs        (all, ~1 min, needs Microsoft Edge)
//                                          node tests/run_all.mjs --quick  (no browser; the git pre-push hook runs this)
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const quick = process.argv.includes("--quick");
const langs = readdirSync(join(ROOT, "lang")).filter(f => /^[a-z]{2,3}\.json$/.test(f)).map(f => f.slice(0, -5));
const before = readFileSync(join(ROOT, "translations.js"), "utf8");
const steps = [
  ["translation files complete", ["tools/check_lang.mjs", ...langs]],
  ["translations.js up to date", ["tools/build_lang.mjs"]],
  ["questions, conditions, columns, languages", ["tests/forms.test.mjs"]],
  ["speech clean-up", ["tests/transcript.test.mjs"]],
  ["phone speech", ["tests/phone_speech.test.mjs"]],
  ...(quick ? [] : [["whole form in a browser", ["tests/e2e_v3.mjs"]]]),
];
let failed = 0;
for (const [name, args] of steps) {
  try {
    execFileSync(process.execPath, args, { cwd: ROOT, stdio: "pipe", timeout: 240000 });
    if (name === "translations.js up to date" && readFileSync(join(ROOT, "translations.js"), "utf8") !== before) {
      console.log(`FAIL ${name}: it was out of date and has been rebuilt — commit translations.js`); failed++; continue;
    }
    console.log(`ok   ${name}`);
  } catch (e) {
    failed++;
    console.log(`FAIL ${name}\n${String(e.stdout || "").split("\n").filter(l => /FAIL|problem|missing|Error|lost|not in/.test(l)).slice(0, 12).join("\n") || String(e.stderr || e.message).slice(0, 800)}`);
  }
}
console.log(failed ? `\n${failed} check(s) failed — fix before pushing.` : "\nall checks passed");
process.exit(failed ? 1 : 0);
