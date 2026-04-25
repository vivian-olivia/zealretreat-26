/**
 * GOOGLE APPS SCRIPT — deploy this as a Web App to connect the form to Google Sheets.
 *
 * Setup steps:
 *  1. Go to https://script.google.com and open the existing project (or create a new one).
 *  2. Replace ALL code with this file.
 *  3. Click Deploy → Manage deployments → edit the existing deployment (pencil icon).
 *  4. Change "Version" to "New version", then click Deploy.
 *     (Do NOT create a new deployment — the URL stays the same when you edit.)
 *  5. "Execute as" → Me, "Who has access" → Anyone.
 *
 * The script writes to sheet "Form Responses" in the spreadsheet below.
 */

const SPREADSHEET_ID = '1FM0Wy5AR-knJyRW4GVB15oeDzIiBe5RlqQzwBeskZ3o';
const SHEET_NAME = 'Form Responses';

const HEADERS = [
    'Timestamp', 'Full Name', 'Phone/WhatsApp', 'University', 'Status',
    'Transport', 'Emergency Contact', 'Relation', 'Emergency Phone',
    'Notes', 'Payment Type', 'Registration ID'
];

function doGet(e) {
    try {
        var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

        // Write headers if the sheet is brand new
        if (sheet.getLastRow() === 0) {
            sheet.appendRow(HEADERS);
            sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
        }

        var data = JSON.parse(e.parameter.payload);

        sheet.appendRow([
            new Date().toLocaleString('id-ID'),
            data.fullName          || '',
            data.phone             || '',
            data.university        || '',
            data.status            || '',
            data.transport         || '',
            data.emergencyName     || '',
            data.emergencyRelation || '',
            data.emergencyPhone    || '',
            data.notes             || '',
            data.paymentType       || '',
            data.registrationId    || ''
        ]);

        return ContentService
            .createTextOutput(JSON.stringify({ status: 'success' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
