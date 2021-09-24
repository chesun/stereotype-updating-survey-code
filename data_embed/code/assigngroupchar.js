//assign embedded data for the characteristics of the randomly drawn group for the subject
var randgroup = parseInt("${e://Field/randgroup}");
for (let i = 1; i <= 100; i++) {
  if (randgroup == i) {
    //let is only scoped to the immediate code block enclosed by {}
    var topmanhigher5050 = Qualtrics.SurveyEngine.getEmbeddedData('topmanhigher5050' + '_' + i.toString());
    var avgmanhigher5050 = Qualtrics.SurveyEngine.getEmbeddedData('avgmanhigher5050' + '_' + i.toString());
    var numman = Qualtrics.SurveyEngine.getEmbeddedData('numman' + '_' + i.toString());
    var numwoman = Qualtrics.SurveyEngine.getEmbeddedData('numwoman' + '_' + i.toString());
    var numodd = Qualtrics.SurveyEngine.getEmbeddedData('numodd' + '_' + i.toString());
    var numeven = Qualtrics.SurveyEngine.getEmbeddedData('numeven' + '_' + i.toString());
    var oddhigher = Qualtrics.SurveyEngine.getEmbeddedData('oddhigher' + '_' + i.toString());
    var manhigher = Qualtrics.SurveyEngine.getEmbeddedData('manhigher' + '_' + i.toString());
  }
}

Qualtrics.SurveyEngine.setEmbeddedData('topmanhigher5050', topmanhigher5050);
Qualtrics.SurveyEngine.setEmbeddedData('avgmanhigher5050', avgmanhigher5050);
Qualtrics.SurveyEngine.setEmbeddedData('numman', numman);
Qualtrics.SurveyEngine.setEmbeddedData('numwoman', numwoman);
Qualtrics.SurveyEngine.setEmbeddedData('numodd', numodd);
Qualtrics.SurveyEngine.setEmbeddedData('numeven', numeven);
Qualtrics.SurveyEngine.setEmbeddedData('oddhigher', oddhigher);
Qualtrics.SurveyEngine.setEmbeddedData('manhigher', manhigher);
