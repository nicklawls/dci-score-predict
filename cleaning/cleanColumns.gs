function cleanColumns() {
  var dataRange = SpreadsheetApp.getActiveSheet().getDataRange();
  var data = dataRange.getValues();
  var num_rows = data.length;
  var i = 0;
  while (i < num_rows) {
    var b_cell = data[i][1];
    var c_cell = data[i][2];
    
    if (b_cell === "" || c_cell === "") {
      data.splice(i, 1);
      num_rows = data.length;
    } else {
      i++;
    }
  }
  
  var newRange = SpreadsheetApp.getActiveSheet().getRange(1, 1, data.length, 3);
  dataRange.clear();
  newRange.setValues(data);
  
}