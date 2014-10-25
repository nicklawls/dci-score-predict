var data = SpreadsheetApp.getActiveSheet().getDataRange();

function clearFormatting() {
  data.setFontColor("Black");
  data.setBackground("White");
  data.setBorder(false, false, false, false, false, false);
}