function unfold() {

  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange();

  while(data.getNumColumns() > 3) {
    var range_to_cut = sheet.getRange(2, data.getNumColumns()/2 + 1, data.getNumRows(), data.getNumColumns()/2 + 1);
    
    Logger.log(data.getNumRows() + " " + data.getNumColumns() );
    Logger.log(range_to_cut.getNumRows() + " " + range_to_cut.getNumColumns() );
    
    range_to_cut.copyTo(sheet.getRange(data.getNumRows()+2, 1));
    range_to_cut.clear();
    data = sheet.getDataRange();
  }
  
}
