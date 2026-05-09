/**
 * GOOGLE APPS SCRIPT — deploy this as a Web App to connect the form to Google Sheets + Drive.
 *
 * ⚠️  FIRST TIME SETUP (required after adding Drive access):
 *  1. Paste this code into https://script.google.com.
 *  2. From the top menu, click Run → authorizeAll.
 *     Google will show a permissions dialog — click "Allow" for BOTH Sheets and Drive.
 *  3. After authorization succeeds, go to:
 *     Deploy → Manage deployments → edit (pencil icon) → New version → Deploy.
 *  4. "Execute as" → Me, "Who has access" → Anyone.
 *
 * How it works:
 *  - doGet  → form text data is written to the "Form Responses" sheet.
 *  - doPost → payment proof image is saved to Drive; the matching sheet row is updated with the link.
 */

const SPREADSHEET_ID  = '1FM0Wy5AR-knJyRW4GVB15oeDzIiBe5RlqQzwBeskZ3o';
const SHEET_NAME      = 'Form Responses';
const DRIVE_FOLDER_ID = '1079JLCjmYDjWJS3rYmis-aqv3wOfIsZa';

const HEADERS = [
    'Timestamp', 'Full Name', 'Phone/WhatsApp', 'University', 'Status',
    'Transport', 'Emergency Contact', 'Relation', 'Emergency Phone',
    'Notes', 'Payment Type', 'Payment Proof'
];

function paymentTypeLabel(val) {
    if (val === 'full') return 'Lunas (Rp 500.000)';
    if (val === 'dp')   return 'DP 50% (Rp 250.000)';
    return val || '';
}

/**
 * Run this ONCE from the Apps Script editor (Run → authorizeAll) to grant Drive + Sheets permissions.
 * You will see a Google permissions dialog — accept it. Then redeploy as a new version.
 */
function authorizeAll() {
    DriveApp.getFolderById(DRIVE_FOLDER_ID).getName();
    SpreadsheetApp.openById(SPREADSHEET_ID).getName();
    Logger.log('Authorization successful. You can now redeploy the script.');
}

function getSheet() {
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
        sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }
    return sheet;
}

// doGet — writes text form data to Sheets (works with existing deployment, no redeployment needed)
function doGet(e) {
    try {
        var data  = JSON.parse(e.parameter.payload);
        var sheet = getSheet();

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
            paymentTypeLabel(data.paymentType),
            ''  // Payment Proof — filled in by doPost once image arrives
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

// doPost — receives all form data + image via hidden iframe form POST, writes sheet row + Drive link
function doPost(e) {
    try {
        // hidden iframe form POST sends data in e.parameter.payload
        var raw  = (e.parameter && e.parameter.payload)
                 ? e.parameter.payload
                 : e.postData.contents;
        var data = JSON.parse(raw);
        var sheet = getSheet();

        // Save image to Drive (non-fatal if it fails)
        var fileUrl = '';
        try {
            if (data.imageBase64) {
                var bytes    = Utilities.base64Decode(data.imageBase64);
                var mime     = data.imageMime || 'image/jpeg';
                var ext      = data.imageExt  || 'jpg';
                var fileName = (data.fullName || 'unknown') + '_retreat zeal tgr.' + ext;
                var blob     = Utilities.newBlob(bytes, mime, fileName);
                var folder   = DriveApp.getFolderById(DRIVE_FOLDER_ID);
                var file     = folder.createFile(blob);
                file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
                fileUrl = file.getUrl();
            }
        } catch (imgErr) { /* image upload failed — row still written below */ }

        // Write all data + Drive link to sheet in one go
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
            paymentTypeLabel(data.paymentType),
            fileUrl
        ]);

        return ContentService
            .createTextOutput(JSON.stringify({ status: 'success', fileUrl: fileUrl }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
