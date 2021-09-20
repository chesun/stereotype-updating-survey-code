// create vars to inject text into the signal statement for whether man or woman is top scorer
// signal1gendertopinject is a var that injects the text "man" or "woman" into the performance report depending on the signal generated

if ("${e://Field/manhigher}" == 1) {
  var topScorerTrue = "man";
  var topScorerFalse = "woman";
} else {
  var topScorerTrue = "woman";
  var topScorerFalse = "man";
}

if  ("${e://Field/signal1GenderRandDraw}" <= 75) {
  var signal1GenderTopInject = topScorerTrue;
} else {
  var signal1GenderTopInject = topScorerFalse;
}

Qualtrics.SurveyEngine.setEmbeddedData("signal1GenderTopInject", signal1GenderTopInject);
