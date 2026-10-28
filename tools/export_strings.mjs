// Writes lang/_source.json: every piece of text in the form, keyed, with English (and Marathi where it exists).
// Translators (or tools/) fill lang/<code>.json with the same keys. Run: node tools/export_strings.mjs
import { writeFileSync } from "node:fs";
import { FORMS } from "../forms.js";
import { UI } from "../i18n.js";
import { REPHRASE } from "../rephrase.js";
import { STATES } from "../states.js";

const out = {};
const put = (key, e) => { if (e?.en) out[key] = { en: e.en, ...(e.mr ? { mr: e.mr } : {}), ...(e.hi ? { hi: e.hi } : {}) }; };
for (const [k, f] of Object.entries(FORMS)) {
  put(`form.${k}.opening`, f.opening); put(`form.${k}.closing`, f.closing);
  for (const s of f.sections) put(`form.${k}.section.${s.id}`, s.title);
  for (const q of f.items) {
    put(`form.${k}.${q.id}.label`, q.label);
    if (q.lead) put(`form.${k}.${q.id}.lead`, q.lead);
    for (const o of q.options || []) put(`form.${k}.${q.id}.opt.${o.v}`, o);
  }
}
for (const [k, m] of Object.entries(REPHRASE)) for (const [no, e] of Object.entries(m)) put(`rephrase.${k}.${no}`, e);
for (const [k, e] of Object.entries(UI)) put(`ui.${k}`, e);
for (const s of STATES) put(`state.${s.v}`, s);
writeFileSync(new URL("../lang/_source.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(Object.keys(out).length, "strings");
