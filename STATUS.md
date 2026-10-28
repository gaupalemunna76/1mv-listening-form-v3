# 1MV Listening Form V3 — status and handover (28 Oct 2026)

## What it is
Version 3 of the 1MV Listening Form (#TumBolo), built from Form 1 (V1) with the team's new survey tools
("1MV Survey Tools _ English.xlsx", Marathi translation by Munna). **Form 1 and its Sheet are not changed.**

- **Live:** https://gaupalemunna76.github.io/1mv-listening-form-v3/
  - one form: `?t=youth` · `?t=parent` · `?t=public` — language: `&lang=en|hi|kn|te|or|ta|pa|mr` — partner/channel: `&src=<code>`
  - device view: `?admin` (finished / sent / waiting / in progress, CSV)
- **Code:** https://github.com/gaupalemunna76/1mv-listening-form-v3 · local `Desktop\Claude\1mv-listening-form-v3`

## What is new compared with Form 1
| | |
|---|---|
| Questions | From the Excel files: Youth 23, Parents 15, General Public 10 (incl. 7 conditional: 0.5a–d, 0.8a, 8B, 9B). Opening and closing text from the Excel. Choices required, text optional (Public follows its "Response required" column) — confirmed by Munna. |
| Languages | English, हिंदी, ಕನ್ನಡ, తెలుగు, ଓଡ଼ିଆ, தமிழ், ਪੰਜਾਬੀ, मराठी (team's language screen). Everything (questions, options, opening/closing, follow-ups, states, screen text) in all 8. Marathi questions from the team; Hindi, Kannada, Telugu, Odia, Tamil, Punjabi are drafts (`lang/<code>.json`) for native review. A team Excel for a language replaces the draft automatically. |
| #TumBolo | Next to the Shikshagraha logo, changes with the language. Marathi #तुम्हीसांगा is from the team's file; the others are drafts for native review. |
| Look | Shikshagraha colours (#382280, #562e91, #7f3289, #ec2288, #fa830b — from shikshagraha.org) and font (Source Sans 3). Large, bordered buttons (48–52 px); on phones Next is full width. |
| State → district | District list shows only the chosen state's districts, from the team's SG Dashboard helper list (723 districts, `tools/districts_sg_dashboard_helper.csv`); "Not in the list" lets people type. |
| Rephrased follow-up | Long-answer text questions (Youth 1A, 1B, 5–8; Parents 9B, 10–13; Public 1, 3–5): if the answer is empty or 4 words or fewer, the question is asked again in other words with the same meaning (`rephrase.js`, English + Marathi drafts). The "3 skills" questions accept short lists (follow-up only if empty or "ok" / "don't know"). |
| In-progress answers | Saved to the Sheet as **Status = In progress** when the person leaves the page and when they open it again. Continuing (same phone/computer, any day) updates the **same row**; Submit makes it **Completed**. |
| User ID | One ID per browser (`U-XXXXXXXX`), on every response from that device. "Fill another response" = new row, same User ID. |
| Confirmed saves | The form reads the Sheet's reply; if not "ok" it retries (5 s, 10 s, 20 s … up to 10 min, with random spread). |

## Where the data goes
A **new Google Sheet** only for V3, via the Apps Script in `google_sheet/Code.gs`.
Tabs: `Youth`, `Parents`, `General Public` (made on the first response).

**One-time setup (Munna):**
1. Create a new Google Sheet, e.g. "1MV Listening Form V3 – Responses".
2. **Extensions → Apps Script.** Delete what is there, paste all of `google_sheet/Code.gs`, **Save**.
3. **Deploy → New deployment →** ⚙ **Web app** · Execute as: **Me** · Who has access: **Anyone** → **Deploy** → allow access.
4. Send the **Web app URL** (ends in `/exec`). It goes into `config.js`; until then V3 keeps responses on the device.

Columns: `received_at`, then `session_id` (must stay first of the form's columns), User ID, Status, Form, Language, Source,
Started at, Last updated, Time taken (sec), Stopped at (last question seen, for In progress rows), Safety flag,
Fups: asked & why, Spoken answers, then one column per question named **`Q<no> <English question>`**
(text questions add `Fups: Q<no> …` for the follow-up answer). Values are saved in English.

Script rules: columns of a tab never change (different columns → rejected); a Completed row is never turned back to
In progress; an older update never overwrites a newer one.

## Own server option (instead of the Google Sheet)
The form does not change: only `config.js` `SHEET_URL` points to our own API. Full costing and capacity: technical note
https://claude.ai/artifact/1cEzjrG5DkXbE8CHawYDxQ (section "If we host on our own server with a database").
- **API** (replaces `google_sheet/Code.gs`, ~100–150 lines Node.js or Python): POST JSON `{tool, persona, columns, values}`
  as today; same rules — upsert by `session_id`, never turn Completed back, ignore older "Last updated";
  reply plain text `ok` / `busy` / `rejected…` (the form already understands these). Allow CORS from the form's site only;
  accept `text/plain` bodies (no preflight; `sendBeacon` uses it); rate-limit per device.
- **Database** (PostgreSQL): one table `responses` — `session_id` primary key, `user_id`, `form`, `status`, `language`,
  `source`, `started_at`, `updated_at`, `safety_flag`, `stopped_at`, `answers` (JSONB, column name → value).
  Question changes then need no new tab; a nightly export can still fill a Google Sheet for the team.
- **Capacity (estimate, load-test first):** hundreds of saves a second, 1 lakh+ finished responses an hour,
  ≈5 KB per response (10 lakh ≈ 5 GB).
- **Max cost a month** (₹100/US$, +18% GST): Supabase Pro ₹2,950 · own server small ₹2,832 · 10 lakh+ scale with
  backups ₹6,797 · with a separate standby database ₹20,036 · Cloudflare Workers + D1 ₹0–590. Plus person-time to run it.
- **Testing:** `tests/e2e_v3.mjs` already sends to a stand-in receiver (`?sheet=<url>` on localhost) — point it at the API.
- **Running it:** daily backups + monthly restore test, HTTPS renewal, security updates, uptime alert.

## Adding a language (when the translated Excel arrives)
1. Put the file in `translations/` (stays on this computer, not uploaded). The file name must contain the language
   (e.g. "1MV Survey Tools - Tamil.xlsx"); same sheets and rows as the English file.
2. `python tools/import_excel.py` — it lists anything that does not line up (that part falls back to English).
3. Screen text (buttons, notes) for that language in `i18n.js`, rephrased follow-ups in `rephrase.js`.
4. Test, `python set_version.py`, commit, push.

Changing the **English** question wording changes the column names → the Sheet rejects new responses for that form.
Rename the old tab first (e.g. `Youth (old)`), then publish; a fresh tab is made on the next response.

## Keeping it from breaking (rules for anyone who edits this)
| Do | Why |
|---|---|
| Change questions only in the Excel → `python tools/import_excel.py` | The importer stops with a clear message if a type, condition or row does not line up. |
| Fix a translation in `lang/<code>.json` → `node tools/check_lang.mjs <code>` → `node tools/build_lang.mjs` | The checker catches missing text, lost {placeholders}, URL, helpline numbers and wrong script. |
| Run `node tests/run_all.mjs` before pushing; `python set_version.py` before the commit | All checks in one go. Version stamp makes phones load the new code, not an old copy. |
| Never edit row 1 (headers) of a Sheet tab; never rename a tab in use | The script finds columns by header name. Extra columns you add yourself are fine; sorting, filtering and deleting rows are fine. |
| Changing an English question = new column → rename the old tab first (e.g. `Youth (old)`) | Old-format responses still waiting on phones are rejected (kept on the phone, CSV in `?admin`). |

Built-in safety in the form:
- A mistake on any screen shows "Something went wrong — your answers are saved" with Reload / Start fresh, never a blank page.
- Unfinished answers saved by an older version are cleaned on load (removed questions/options dropped, position corrected).
- Broken saved data on a phone is ignored, the start screen still opens.
- Each phone keeps all unsent responses but only the newest 300 sent ones, so browser storage never fills up.
- Start can always be tapped: it says what is missing (form or consent) and highlights it.
- Very old browsers or no internet on first open: a clear message (English + Hindi) instead of a blank page.
- Sending: confirmed by the Sheet's reply, retried with growing waits; the script waits its turn (lock) and replies "busy" instead of failing.
- Git pre-push check (`tools/install_hooks.sh`, once per computer) blocks a push when a check fails.

## Run and test
```
node tests/forms.test.mjs          # questions, conditions, columns, districts, follow-ups, safety words in all languages (118)
node tests/e2e_v3.mjs              # whole Youth form in headless Edge with a fake Sheet (49)
node tests/transcript.test.mjs && node tests/phone_speech.test.mjs   # speech clean-up (16)
node tests/run_all.mjs                                              # every check (49 browser + 104 form checks …)
python set_version.py && git add -A && git commit && git push
```
Local copies never send to the real Sheet unless `?sync` is added (`?sheet=<url>` sends to a test receiver).

## Open items
1. Munna: new Sheet + script, send the /exec URL (setup above).
2. Native review of the draft translations in `lang/hi|kn|te|or|ta|pa.json` (fix there, then `node tools/check_lang.mjs <code>` and `node tools/build_lang.mjs`), or send the team's Excel.
3. Native review of the #TumBolo drafts, Marathi rephrasings, Marathi screen text, and the safety and "don't know" words for Kannada, Telugu, Odia, Tamil, Punjabi (`probe.js`).
4. Assamese is in the team's Info sheet but not on the language screen — not added.
5. District list (team's SG Dashboard helper) is older in places (e.g. Andhra Pradesh 13 districts, Delhi as one) — update the CSV and run `python tools/make_districts.py` if needed.
