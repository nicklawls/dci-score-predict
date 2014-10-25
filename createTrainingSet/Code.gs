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
  var entries = [
    {
      name : "Pull Data for Corps",
      functionName : "pullDataForCorps"
    },
    {
      name : "Create Training Set",
      functionName : "createTrainingSetInterface"
    },
    {
      name : "Replace Corps Names With Integers",
      functionName : "featurizeCorpsNames"
    }
  ];
  spreadsheet.addMenu("Helpers", entries);
};
