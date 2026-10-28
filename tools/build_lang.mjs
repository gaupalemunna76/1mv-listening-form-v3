// Packs lang/<code>.json (translations of lang/_source.json) into translations.js for the form.
// They only fill text that is missing: the team's Excel (forms.js) and hand-written text always win.
// Run after adding or changing a lang/*.json file:  node tools/build_lang.mjs
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
const dir = new URL("../lang/", import.meta.url);
const TR = {};
for (const f of readdirSync(dir).filter(f => /^[a-z]{2,3}\.json$/.test(f)).sort()) TR[f.slice(0, -5)] = JSON.parse(readFileSync(new URL(f, dir), "utf8"));
writeFileSync(new URL("../translations.js", import.meta.url),
  "// Made by tools/build_lang.mjs from lang/*.json - do not edit by hand. Drafts for native-speaker review.\n" +
  "export const TR = " + JSON.stringify(TR) + ";\n" +
  "// Adds the translation of `key` to an { en, mr, ... } entry for every language that does not have it yet.\n" +
  "export function fill(entry, key) {\n  if (!entry) return entry;\n  for (const [code, t] of Object.entries(TR)) if (!entry[code] && t[key]) entry[code] = t[key];\n  return entry;\n}\n");
console.log("languages:", Object.keys(TR).join(", ") || "(none)");
