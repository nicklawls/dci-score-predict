function featurizeCorpsNames() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dataset");
  var range = sheet.getRange("A:A");
  var names = range.getValues();

  
  for (var i = 0; i < names.length; ++i) {
    names[i][0] = selected_corps.indexOf(names[i][0]) + 1;
  }
  
  range.setValues(names);
  
}