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
    'Notes', 'Registration ID', 'Payment Proof'
];

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
            data.registrationId    || '',
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

// doPost — saves payment proof to Drive, then updates the matching sheet row with the file link
function doPost(e) {
    try {
        var data = JSON.parse(e.postData.contents);

        // Save image to Drive
        var fileUrl = '';
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

        // Update the matching row in Sheets with the Drive link
        if (fileUrl && data.registrationId) {
            var sheet    = getSheet();
            var lastRow  = sheet.getLastRow();
            var idCol    = HEADERS.indexOf('Registration ID') + 1;
            var proofCol = HEADERS.indexOf('Payment Proof') + 1;
            for (var i = 2; i <= lastRow; i++) {
                if (sheet.getRange(i, idCol).getValue() === data.registrationId) {
                    sheet.getRange(i, proofCol).setValue(fileUrl);
                    break;
                }
            }
        }

        return ContentService
            .createTextOutput(JSON.stringify({ status: 'success', fileUrl: fileUrl }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
