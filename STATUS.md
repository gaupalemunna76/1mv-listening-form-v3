# 1MV Listening Form V3 — status and handover (28 Oct 2026)

## What it is
Version 3 of the 1MV Listening Form (#TumBolo), built from Form 1 (V1) with the team's new survey tools
("1MV Survey Tools _ English.xlsx", Marathi translation by Munna). **Form 1 is not changed.**

- **Live:** https://gaupalemunna76.github.io/1mv-listening-form-v3/
  - one form: `?t=youth` · `?t=parent` · `?t=public` — language: `&lang=en|hi|kn|te|or|ta|pa|mr` — partner/channel: `&src=<code>`
  - device view: `?admin` (finished / sent / waiting / in progress, CSV)
- **Code:** https://github.com/gaupalemunna76/1mv-listening-form-v3 · local `Desktop\Claude\1mv-listening-form-v3`

## What is new compared with Form 1
| | |
|---|---|
| Questions | From the Excel files: Youth 23, Parents 15, General Public 10 (incl. 7 conditional: 0.5a–d, 0.8a, 8B, 9B). Opening and closing text from the Excel. |
| Languages | English, हिंदी, ಕನ್ನಡ, తెలుగు, ଓଡ଼ିଆ, தமிழ், ਪੰਜਾਬੀ, मराठी (team's language screen). Questions: English + Marathi now; any language without a translation shows English, with a note. |
| #TumBolo | Next to the Shikshagraha logo, changes with the language. Marathi #तुम्हीसांगा is from the team's file; the others are drafts for native review. |
| Look | Shikshagraha colours (#382280, #562e91, #7f3289, #ec2288, #fa830b — from shikshagraha.org) and font (Source Sans 3). Large, bordered buttons (48–52 px). |
| State → district | District list shows only the chosen state's districts, from the team's SG Dashboard helper list (723 districts, `tools/districts_sg_dashboard_helper.csv`); "Not in the list" lets people type. |
| Rephrased follow-up | Long-answer text questions (Youth 1A, 1B, 5–8; Parents 9B, 10–13; Public 1, 3–5): if the answer is empty or 3 words or fewer, the question is asked again in other words with the same meaning (`rephrase.js`, English + Marathi drafts). The "3 skills" questions accept short lists (follow-up only if empty or "ok"/"don't know"). |
| In-progress answers | Saved to the Sheet as **Status = In progress** when the person leaves the page and when they open it again. Continuing (same phone/computer, any day) updates the **same row**; Submit makes it **Completed**. |
| User ID | One ID per browser (`U-XXXXXXXX`), on every response from that device. "Fill another response" = new row, same User ID. |
| Confirmed saves | The form reads the Sheet's reply; if not "ok" it retries (5 s, 10 s, 20 s … up to 10 min, with random spread). |

## Where the data goes
A **new Google Sheet** only for V3 (Form 1's Sheet is not used), via the Apps Script in `google_sheet/Code.gs`.
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

## Adding a language (when the translated Excel arrives)
1. Put the file in `translations/` (stays on this computer, not uploaded). The file name must contain the language
   (e.g. "1MV Survey Tools - Tamil.xlsx"); same sheets and rows as the English file.
2. `python tools/import_excel.py` — it lists anything that does not line up (that part falls back to English).
3. Screen text (buttons, notes) for that language: add it in `i18n.js` (now English, Hindi, Marathi).
4. Test, `python set_version.py`, commit, push.

Changing the **English** question wording changes the column names → the Sheet rejects new responses for that form.
Rename the old tab first (e.g. `V3 Youth (old)`), then publish; a fresh tab is made on the next response.

## Run and test
```
node tests/forms.test.mjs          # questions, conditions, columns, districts, follow-ups (54)
node tests/e2e_v3.mjs              # whole Youth form in headless Edge with a fake Sheet (40)
node tests/transcript.test.mjs && node tests/phone_speech.test.mjs   # speech clean-up (16)
python set_version.py && git add -A && git commit && git push
```
Local copies never send to the real Sheet unless `?sync` is added (`?sheet=<url>` sends to a test receiver).

## Open items
1. Munna: deploy the V3 script and send the /exec URL (setup above).
2. Translations for Hindi, Kannada, Telugu, Odia, Tamil, Punjabi questions (team); screen text for the five new languages.
3. Native review of the #TumBolo drafts and Marathi.
4. Youth/Parent Excel has no "Response required" column: choices are required, text answers optional (Public follows its column).
5. Assamese is in the team's Info sheet but not on the language screen — not added.
6. District list (team's SG Dashboard helper) is older in places (e.g. Andhra Pradesh 13 districts, Delhi as one) — update the CSV and run `python tools/make_districts.py` if needed.
7. Rephrased follow-ups: native review of the Marathi; Hindi and other languages to be added in `rephrase.js`.
