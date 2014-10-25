var moment = Moment.load();

function setDaysToFinals() {
  var dataRange = SpreadsheetApp.getActiveSheet().getDataRange();
  var data = dataRange.getValues();  
  var finals_date = findFinalsDate(data);
  
  for (var i = 0; i < data.length; ++i) {
     data[i][0] = daysBetween(data[i][0], finals_date) + 1; // plus one so feature is nonzero
  }
  
  dataRange.setValues(data);
  var columnA = SpreadsheetApp.getActiveSheet().getRange("A:A");
  columnA.setNumberFormat("0");
}

function findFinalsDate(data) {
  greatest_date = data[0][0];
  for (var i = 0; i < data.length; ++i) {
    if (data[i][0] > greatest_date) {
      greatest_date = data[i][0];
    }
  }
  
  return greatest_date;
}

function daysBetween(begin, end) { // two JS Dates
  var mbegin = moment(begin);
  var mend = moment(end);
  Logger.log(mend.diff(mbegin, 'days'));
  return mend.diff(mbegin, 'days');
}