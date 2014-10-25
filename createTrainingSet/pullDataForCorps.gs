 var selected_corps = ["Bluecoats","Vanguard","Blue Devils", "Carolina Crown", 
                        "Cavaliers", "Phantom Regiment", "Boston Crusaders", 
                        "Blue Knights", "Troopers", "Crossmen", "Blue Stars",
                        "Pacific Crest", "Colts", "Mandarins", "Pioneer", "Cadets",
                        "Academy", "Cascades", "Jersey Surf", "Spirit", "Madison Scouts" ];

function pullDataForCorps() {
  var rawDataSpreadsheet = SpreadsheetApp.openById("1DUqKS21mgoPMHUgxueoXSQDe03CVzR7HLO8T99IK4c8");
  var rawDataSpreadsheets = rawDataSpreadsheet.getSheets();
  var result = [];
  
  for (var q = 0; q < selected_corps.length; q++) {
    var corps = selected_corps[q];
    for (var i = 0; i < rawDataSpreadsheets.length; ++i) {
      //var skip_year = false;
      var data = rawDataSpreadsheets[i].getDataRange().getValues();
      
      var j = 0;
      while (data[j][1] !== corps && j < data.length-1) {++j;}
      
      if (j < data.length-1) { // safe to continue
        var k = j+1;
        while (data[k][1] === corps) {++k;} // find index after corps
        var yearChunk = data.slice(j, k);
        var result = result.concat(yearChunk)
      }
    }
    
    var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(corps);
    targetSheet.getDataRange().clear();
    var targetRange = targetSheet.getRange(1, 1, result.length, result[0].length);
    targetRange.setValues(result);
    result = [];
  }
}
