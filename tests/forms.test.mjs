// Checks the V3 forms made from the Excel files: counts, unique Sheet columns, conditions, districts, follow-ups.
// Run: node tests/forms.test.mjs
import assert from "node:assert/strict";
import { TOOLS } from "../questions.js";
import { FORMS } from "../forms.js";
import { DISTRICTS } from "../districts.js";
import { STATES } from "../states.js";
import { LANGS } from "../i18n.js";
import { assess } from "../probe.js";

let n = 0;
const eq = (a, b, m) => { assert.deepEqual(a, b, m); n++; };
const yes = (c, m) => { assert.ok(c, m); n++; };
const items = k => TOOLS[k].sections.flatMap(s => s.items);
const q = (k, no) => items(k).find(x => x.no === no);

eq(items("youth").length, 23, "youth questions");
eq(items("parent").length, 15, "parent questions");
eq(items("public").length, 10, "public questions");
for (const k of Object.keys(TOOLS)) {
  const cols = items(k).map(x => x.column);
  eq(new Set(cols).size, cols.length, `${k}: Sheet columns are unique`);
  yes(TOOLS[k].opening.en && TOOLS[k].closing.en, `${k}: opening and closing text`);
  yes(items(k).every(x => x.label.mr), `${k}: every question has Marathi`);
  yes(items(k).every(x => !x.options || x.options.every(o => o.en)), `${k}: every option has English`);
}
eq(q("youth", "0.5a").column, "Q0.5a What course or stream are you in?", "column = Q number + English question");

// Conditions from the Excel ("Ask if ... response is O2")
const Y = (no, A) => !q("youth", no).showIf || q("youth", no).showIf(A);
eq([Y("0.5a", { Q0_5: "O2" }), Y("0.5a", { Q0_5: "O1" })], [true, false], "0.5a only for grade 11-12");
eq(["O3", "O4", "O5", "O6"].map(v => Y("0.5b", { Q0_5: v })), [true, true, true, false], "0.5b for ITI / Polytechnic / Vocational");
eq(["O6", "O7", "O8"].map(v => Y("0.5c", { Q0_5: v })), [true, true, false], "0.5c for UG / PG");
eq(["O8", "O9"].map(v => Y("0.5d", { Q0_5: v })), [true, false], "0.5d for Working");
eq(["O1", "O2", "O3"].map(v => Y("0.8a", { Q0_8: v })), [true, false, false], "0.8a only if disability = Yes");
eq(q("youth", "0.8a").type, "multi", "0.8a is multi-select");
const P = (no, A) => q("parent", no).showIf(A);
eq([P("8B", { Q8A: "O1" }), P("8B", { Q8A: "O2" })], [true, false], "8B only if parent went to school");
eq(["O1", "O4", "O5"].map(v => P("9B", { Q9A: v })), [true, true, false], "9B unless 'Not sure'");
eq(q("public", "5").required, false, "public Q5 is optional (Excel: No)");
eq(q("public", "1").required, true, "public Q1 is required (Excel: Yes)");

// State and district dropdowns
for (const k of Object.keys(TOOLS)) {
  const d = items(k).find(x => x.source === "district");
  eq(d.dependsOn, items(k).find(x => x.source === "state").id, `${k}: district follows state`);
  yes(d.optionsFor({ [d.dependsOn]: "maharashtra" }).some(o => o.v === "Pune"), `${k}: Pune in Maharashtra`);
}
yes(STATES.every(s => DISTRICTS[s.v]?.length), "every state/UT has districts");
eq(Object.values(DISTRICTS).flat().length, 789, "789 districts");

// Follow-ups on text questions
yes(items("youth").filter(x => x.type === "short").every(x => x.probe), "every text question can get a follow-up");
eq(assess("ok", { minWords: 3 }), "nonanswer", "'ok' gets a follow-up");
eq(assess("Doctor", { minWords: 3 }), "short", "one word gets a follow-up");
eq(assess("I want to become a doctor", { minWords: 3 }), null, "a full answer does not");
eq(assess("मला डॉक्टर व्हायचे आहे", { minWords: 3 }), null, "a Marathi answer does not");

// Languages
eq(LANGS.map(l => l.code), ["en", "hi", "kn", "te", "or", "ta", "pa", "mr"], "eight languages in the team's order");
yes(LANGS.every(l => l.tag.startsWith("#")), "#TumBolo for every language");
yes(Object.keys(FORMS).length === 3, "three forms");

console.log(`${n} / ${n} passed`);
