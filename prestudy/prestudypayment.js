//calculate the payment for the pre-study and set the embedded data fields needed for the payment screen
var score = parseInt("${e://Field/score}");
  var baseFee = parseFloat("${e://Field/baseFee}");

  var pieceRate = parseFloat("${e://Field/pieceRate}");

  var bonuspayment = score * pieceRate;
  //convert into a string and specify a fixed decimal precision to avoid floating number precision problems in multiplication
  var totalpayment = (bonuspayment + baseFee).toFixed(1);
  var bonuspayment = bonuspayment.toFixed(1);

  Qualtrics.SurveyEngine.setEmbeddedData("bonuspayment", bonuspayment);
  Qualtrics.SurveyEngine.setEmbeddedData("totalpayment", totalpayment);
