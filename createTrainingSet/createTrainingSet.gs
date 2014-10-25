function createTrainingSet(numPreviousScores) { // assumes all corps had sufficient # of shows 
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets()
  
  var training_set = sheets[0];
  var corps_data = sheets.slice(1);
  
  var result = []; // array that will be fed to range.setValues
  var score_frame = [];
  var score_frame_size = numPreviousScores + 1; 
  var corps = ""
  var score = 0;
  var last_year = 0;
  var year = 0;
  var time = 0;
  
  
  for (var i = 0; i < corps_data.length; ++i) { // for each corps 
    var corps_scores = corps_data[i].getDataRange().getValues();
    for (var j = 0; j < corps_scores.length; ++j) {
      var entry = corps_scores[j];
      time = entry[0]; corps = entry[1];
      score = entry[2]; year = entry[3];
      
      if (year !== last_year) { 
        score_frame = [];// reset score frame 
      } 
      score_frame.push(score); // update score frame
      
      if (score_frame.length >= score_frame_size) { // score frame is full, update result
        if (score_frame.length > score_frame_size ) {
          score_frame.splice(0, 1); // keep consistent size
        }
        result.push([corps].concat([year]).concat([time]).concat(score_frame));
      }
      
      last_year = year; 
    } 
  }
  training_set.getDataRange().clear();
  // make header for convinence
  training_set.getRange(1, 1, result.length, result[0].length).setValues(result);
}

function createTrainingSetInterface() {
  var numShows = SpreadsheetApp.getUi().prompt("How many shows?").getResponseText();
  createTrainingSet(parseInt(numShows));
}