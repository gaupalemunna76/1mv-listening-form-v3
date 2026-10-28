"""Build districts.js (districts of each state / UT) from the team's SG Dashboard helper list
(tools/districts_sg_dashboard_helper.csv: one column per state, district names below; shared by Munna 28 Oct 2026).
Run:  python tools/make_districts.py
"""
import csv, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
rows = list(csv.reader((ROOT / "tools" / "districts_sg_dashboard_helper.csv").open(encoding="utf-8-sig")))
# CSV state name -> state code used in states.js
CODE = {"Andaman and Nicobar Islands": "andaman_nicobar", "Dadra and Nagar Haveli and Daman and Diu": "dnh_dd", "Delhi": "delhi", "Jammu and Kashmir": "jammu_kashmir"}

out = {}
for i, state in enumerate(rows[0]):
    state = state.strip()
    code = CODE.get(state, state.lower().replace(" ", "_"))
    names = [r[i].strip() for r in rows[1:] if i < len(r) and r[i].strip()]
    out[code] = sorted(set(names), key=str.casefold)

states_js = (ROOT / "states.js").read_text(encoding="utf-8")
missing = [c for c in out if f'"{c}"' not in states_js]
if missing:
    raise SystemExit(f"state codes not in states.js: {missing}")
body = json.dumps(out, ensure_ascii=False, indent=0).replace("\n", "")
(ROOT / "districts.js").write_text(
    "// Districts by state, from the team's SG Dashboard helper list (28 Oct 2026). Made by tools/make_districts.py.\n"
    f"export const DISTRICTS = {body};\n", encoding="utf-8")
print(len(out), "states/UTs,", sum(map(len, out.values())), "districts")
