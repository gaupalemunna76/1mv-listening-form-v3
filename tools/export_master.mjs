// Prints every form in every language as JSON (what the live form shows, incl. translations).
// Used by tools/make_master_xlsx.py to build the master translation workbook.
import { TOOLS } from "../questions.js";
import { FORMS } from "../forms.js";
import { LANGS } from "../i18n.js";
import { TR } from "../translations.js";

const TYPE = { choice: "Single select", multi: "Multiselect", dropdown: "Dropdown", short: "Text", number: "Numerical" };
const out = { langs: LANGS.map(l => ({ code: l.code, name: l.name })), drafts: Object.keys(TR), forms: {} };
for (const [key, tool] of Object.entries(TOOLS)) {
  const items = tool.sections.flatMap(s => s.items.map(q => ({ q, sec: s.title })));
  const raw = Object.fromEntries(FORMS[key].items.map(q => [q.id, q]));
  out.forms[key] = { title: tool.title, opening: tool.opening, closing: tool.closing, rows: items.map(({ q, sec }) => ({
    no: q.no, section: sec, label: q.label, lead: q.lead || null, type: TYPE[q.type],
    source: q.source || null, parent: raw[q.id].showIf ? FORMS[key].items.find(x => x.id === raw[q.id].showIf.q).no : "",
    when: raw[q.id].showIf ? raw[q.id].showIf.in.join(", ") : "", options: q.source ? [] : (q.options || []),
  })) };
}
console.log(JSON.stringify(out));
