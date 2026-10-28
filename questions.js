// 1MV Listening Form V3 — turns forms.js (made from the team's Excel files by tools/import_excel.py)
// into the three forms the app shows. Edit the Excel files and re-run the import; do not edit forms.js by hand.
//
// Question fields used by app.js
//   id, no     Q number from the Excel (column name in the Sheet is "Q<no> <English question>")
//   type       short | number | choice | multi | dropdown
//   lead       text shown above the question (e.g. "Thank you for telling me about your background.")
//   label      the question            options  [{ v: "O1", en, mr, ... }]
//   required   must be answered before Next
//   showIf     (answers) => true/false — from the Excel "Ask if ... response is O1, O2"
//   probe      one follow-up for weak short answers (rules in probe.js)
//   source     "state" | "district" — dropdown filled from states.js / districts.js

import { FORMS } from "./forms.js?v=20261028-1558";
import { STATES } from "./states.js?v=20261028-1558";
import { DISTRICTS } from "./districts.js?v=20261028-1558";
import { UI } from "./i18n.js?v=20261028-1558";

const stateOptions = STATES.map(s => ({ v: s.v, en: s.en, hi: s.hi, mr: s.mr }));
const TITLES = { youth: [UI.titleYouth, UI.pickYouth], parent: [UI.titleParent, UI.pickParent], public: [UI.titlePublic, UI.pickPublic] };

function build(f) {
  const byId = Object.fromEntries(f.items.map(q => [q.id, q]));
  const titles = Object.fromEntries(f.sections.map(s => [s.id, s.title]));
  const stateQ = f.items.find(q => q.source === "state");
  const items = f.items.map(src => {
    const q = { ...src, column: `Q${src.no} ${src.label.en}` };
    if (src.probe) q.probe = { minWords: 3 };
    if (src.source === "state") q.options = stateOptions;
    if (src.source === "district") {
      q.other = true;
      q.dependsOn = stateQ?.id;
      q.optionsFor = A => (DISTRICTS[A[stateQ?.id]] || []).map(d => ({ v: d, en: d }));
    }
    if (src.showIf) {
      const { q: pid, in: codes } = src.showIf;
      // Asked only when the earlier question is shown and answered with one of the codes.
      q.showIf = A => {
        const p = byId[pid];
        if (p.showIf && !items.find(x => x.id === pid).showIf(A)) return false;
        const v = A[pid];
        return Array.isArray(v) ? v.some(x => codes.includes(x)) : codes.includes(v);
      };
    }
    return q;
  });
  // Sections in the order they appear (a section can come back later, e.g. Parents' expectations).
  const sections = [];
  for (const q of items) {
    const last = sections[sections.length - 1];
    if (last && last.id === q.section) last.items.push(q);
    else sections.push({ id: q.section, title: titles[q.section] || { en: "" }, items: [q] });
  }
  return { key: f.key, title: TITLES[f.key][0], pick: TITLES[f.key][1], opening: f.opening, closing: f.closing, sections };
}

export const TOOLS = Object.fromEntries(Object.keys(FORMS).map(k => [k, build(FORMS[k])]));
