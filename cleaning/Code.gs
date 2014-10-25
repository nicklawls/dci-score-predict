function cleanRawData() { // Go from copy/paste from web to fully organized sheet for a given year
  clearFormatting();// Change Formatting(Colors, Borders)
  unfold(); // Unfold
  cleanColumns(); // Delete Bogus Rows, clear RECAP
  recordDates();  // enter dates and eliminate date rows
  setDaysToFinals(); // change date to days until finals
  sort(); // sort by corps then time number
  // remove zero scores
  // addYearRow // add year row
}


function sort() {
  var data = SpreadsheetApp.getActiveSheet().getDataRange();
  data.sort([2, {column: 1, ascending: false}]); // sort by corps name then by date
}

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "Clean Data",
    functionName : "cleanRawData"
  }];
  spreadsheet.addMenu("Clean Data", entries);
};
