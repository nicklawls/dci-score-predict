function recordDates() {
  var dataRange = SpreadsheetApp.getActiveSheet().getDataRange();
  var data = dataRange.getValues();
  var num_rows = data.length;
  var current_date = new Date();
  
  var i = 0;
  while (i < num_rows) {
    var a_cell = data[i][0];
    var b_cell = data[i][1];
        
    if (a_cell === "") {
      current_date = b_cell;
      data.splice(i, 1);
      num_rows = data.length;
    } else {
      data[i][0] = current_date;
      i++;
    }
  }
  
  var newRange = SpreadsheetApp.getActiveSheet().getRange(1, 1, data.length, 3);
  dataRange.clear();
  newRange.setValues(data);
}