/**
 * 1MV Listening Form V3 -> its own NEW Google Sheet (Form 1's Sheet is not used).
 *
 * Set up once: create a new Google Sheet (e.g. "1MV Listening Form V3 – Responses") ->
 *   Extensions -> Apps Script -> delete what is there, paste this file -> Save ->
 *   Deploy -> New deployment -> Web app (Execute as: Me, Who has access: Anyone) -> copy the /exec URL into config.js.
 *
 * - One tab per form: "Youth", "Parents", "General Public" (created on the first response).
 * - One row per response (session_id). An unfinished response arrives as Status "In progress" and is updated
 *   in the same row as the person continues; it becomes "Completed" on Submit.
 *   A "Completed" row is never turned back to "In progress", and an older update never overwrites a newer one.
 * - A tab's columns never change after it is created: a response with different columns is rejected.
 *   To change questions, rename the old tab (e.g. "Youth (old)") and a fresh tab is made on the next response.
 */
const TOOL = "1MV Listening Form V3";
const TABS = { youth: "Youth", parent: "Parents", public: "General Public" };
const MAX_COLS = 300;

function doPost(e) {
  let data;
  try { data = JSON.parse(e.postData.contents); } catch (err) { return text_("rejected: not JSON"); }
  if (data.tool !== TOOL || !TABS[data.persona] || !Array.isArray(data.columns) || !Array.isArray(data.values)
      || data.columns.length !== data.values.length || data.columns.length > MAX_COLS
      || data.columns[0] !== "session_id" || !/^LF3-\d{8}-[A-Z0-9]{6}$/.test(String(data.values[0]))) {
    return text_("rejected");
  }
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(25000)) return text_("busy");   // the form tries again later
  try {
    const sh = tab_(TABS[data.persona], data.columns);
    const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
    const missing = data.columns.filter(c => headers.indexOf(c) === -1);
    if (missing.length) return text_("rejected: columns differ");
    const get = name => data.values[data.columns.indexOf(name)];
    const row = headers.map(h => {
      if (h === "received_at") return new Date();
      const i = data.columns.indexOf(h);
      return i === -1 ? "" : clean_(data.values[i]);
    });

    // Find this response's row by session_id (first data column).
    const idCol = headers.indexOf("session_id") + 1;
    let target = -1;
    if (sh.getLastRow() > 1) {
      const hit = sh.getRange(2, idCol, sh.getLastRow() - 1, 1).createTextFinder(String(data.values[0])).matchEntireCell(true).findNext();
      if (hit) target = hit.getRow();
    }
    if (target > 0) {
      const old = sh.getRange(target, 1, 1, headers.length).getValues()[0];
      const oldStatus = old[headers.indexOf("Status")];
      const ms = v => new Date(v).getTime() || 0;   // the Sheet may have turned the text into a date
      if (oldStatus === "Completed" && get("Status") !== "Completed") return text_("ok: kept completed");
      if (oldStatus === get("Status") && ms(old[headers.indexOf("Last updated")]) > ms(get("Last updated"))) return text_("ok: newer already saved");
      sh.getRange(target, 1, 1, row.length).setValues([row]);
    } else {
      sh.appendRow(row);
    }
    return text_("ok");
  } catch (err) {
    return text_("error");
  } finally {
    lock.releaseLock();
  }
}

function tab_(name, columns) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) {
    sh.appendRow(["received_at"].concat(columns));
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, columns.length + 1).setFontWeight("bold").setBackground("#efeaf8");
  }
  return sh;
}

function doGet() {
  return text_("1MV Listening Form V3 endpoint is running.");
}

// Store everything as plain text so an answer can never run as a spreadsheet formula.
function clean_(v) {
  if (v === null || v === undefined) return "";
  if (typeof v === "number" || typeof v === "boolean") return v;
  let s = String(v).slice(0, 5000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function text_(s) {
  return ContentService.createTextOutput(s).setMimeType(ContentService.MimeType.TEXT);
}
