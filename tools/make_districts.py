"""Build districts.js (districts of each state / UT) from tools/districts_wikipedia_2026-10-28.json.

Source: Wikipedia "List of districts in India" (802 districts as of Dec 2025), downloaded 28 Oct 2026 with
the MediaWiki API and parsed (district column of each state table). Check against the government's
Local Government Directory (lgdirectory.gov.in) before large-scale use.
Run:  python tools/make_districts.py
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
src = json.loads((ROOT / "tools" / "districts_wikipedia_2026-10-28.json").read_text(encoding="utf-8"))

# Wikipedia table heading -> state code used in states.js
CODE = {"Andaman and Nicobar": "andaman_nicobar", "Dadra and Nagar Haveli and Daman and Diu": "dnh_dd",
        "National Capital Territory of Delhi": "delhi", "Jammu and Kashmir": "jammu_kashmir"}
# Official new names that the Wikipedia link text still shows by the old name.
RENAME = {"Ahmednagar": "Ahilyanagar (Ahmednagar)", "Aurangabad|maharashtra": "Chhatrapati Sambhajinagar (Aurangabad)",
          "Osmanabad": "Dharashiv (Osmanabad)"}

out = {}
for state, names in src.items():
    code = CODE.get(state, state.lower().replace(" ", "_"))
    fixed = [RENAME.get(f"{n}|{code}", RENAME.get(n, n)) if not (n == "Aurangabad" and code != "maharashtra") else n for n in names]
    out[code] = sorted(set(fixed), key=str.casefold)

states_js = (ROOT / "states.js").read_text(encoding="utf-8")
missing = [c for c in out if f'"{c}"' not in states_js]
if missing:
    raise SystemExit(f"state codes not in states.js: {missing}")
body = json.dumps(out, ensure_ascii=False, indent=0).replace("\n", "")
(ROOT / "districts.js").write_text(
    "// Districts by state (Wikipedia 'List of districts in India', fetched 28 Oct 2026). Made by tools/make_districts.py.\n"
    f"export const DISTRICTS = {body};\n", encoding="utf-8")
print(len(out), "states/UTs,", sum(map(len, out.values())), "districts")
