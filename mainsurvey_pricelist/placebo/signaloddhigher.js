// create vars to inject "higher" or "lower" lower for odd even signals based on the randomly generated signal
//signaloddhigherinject is the text injection for whether top scorer is odd or even.

if ("${e://Field/oddhigher}" == 1) {
  var TopScorerTrueState = "odd";
  var TopScorerFalseState = "even";
} else {
  var TopScorerTrueState = "even";
  var TopScorerFalseState = "odd";
}

if ("${e://Field/Signal1PlaceboRandomDraw}" <= 75) {
  var signal1oddhigherinject = TopScorerTrueState;
} else {
  var signal1oddhigherinject = TopScorerFalseState;
}

Qualtrics.SurveyEngine.setEmbeddedData("signal1oddhigherinject", signal1oddhigherinject);
