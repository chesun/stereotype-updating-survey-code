// create vars to inject text into the signal statement for whether odd or even ID is top scorer
// signal1idtopinject is a var that injects the text "odd" or "even" into the performance report depending on the signal generated

if ("${e://Field/oddhigher}" == 1) {
  var topScorerTrue = "odd";
  var topScorerFalse = "even";
} else {
  var topScorerTrue = "even";
  var topScorerFalse = "odd";
}

if  ("${e://Field/signal1IDRandDraw}" <= 75) {
  var signal1IDTopInject = topScorerTrue;
} else {
  var signal1IDTopInject = topScorerFalse;
}

Qualtrics.SurveyEngine.setEmbeddedData("signal1IDTopInject", signal1IDTopInject);
