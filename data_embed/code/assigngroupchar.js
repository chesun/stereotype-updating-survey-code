//assign embedded data for the characteristics of the randomly drawn group for the subject
var randgroup = parseInt("${e://Field/randgroup}");
for (let i = 1; i <= 100; i++) {
  if (randgroup == i) {
    //let is only scoped to the immediate code block enclosed by {}
    var topmanhigher5050 = Qualtrics.SurveyEngine.getEmbeddedData('topmanhigher5050' + '_' + i.toString());
    var avgmanhigher5050 = Qualtrics.SurveyEngine.getEmbeddedData('avgmanhigher5050' + '_' + i.toString());
    var topabove35higher5050gender = Qualtrics.SurveyEngine.getEmbeddedData('topabove35higher5050gender' + '_' + i.toString());
    var avgabove35higher5050gender = Qualtrics.SurveyEngine.getEmbeddedData('avgabove35higher5050gender' + '_' + i.toString());
    var topoddhigher5050 = Qualtrics.SurveyEngine.getEmbeddedData('topoddhigher5050' + '_' + i.toString());
    var avgoddhigher5050 = Qualtrics.SurveyEngine.getEmbeddedData('avgoddhigher5050' + '_' + i.toString());
    var numabove35_5050gender = Qualtrics.SurveyEngine.getEmbeddedData('numabove35_5050gender' + '_' + i.toString());
    var numbelow35_5050gender = Qualtrics.SurveyEngine.getEmbeddedData('numbelow35_5050gender' + '_' + i.toString());
    var numman = Qualtrics.SurveyEngine.getEmbeddedData('numman' + '_' + i.toString());
    var numwoman = Qualtrics.SurveyEngine.getEmbeddedData('numwoman' + '_' + i.toString());
    var numabove35 = Qualtrics.SurveyEngine.getEmbeddedData('numabove35' + '_' + i.toString());
    var numbelow35 = Qualtrics.SurveyEngine.getEmbeddedData('numbelow35' + '_' + i.toString());
    var numodd = Qualtrics.SurveyEngine.getEmbeddedData('numodd' + '_' + i.toString());
    var numeven = Qualtrics.SurveyEngine.getEmbeddedData('numeven' + '_' + i.toString());
    var manhigher = Qualtrics.SurveyEngine.getEmbeddedData('manhigher' + '_' + i.toString());
    var above35higher = Qualtrics.SurveyEngine.getEmbeddedData('above35higher' + '_' + i.toString());
    var oddhigher = Qualtrics.SurveyEngine.getEmbeddedData('oddhigher' + '_' + i.toString());
  }
}

Qualtrics.SurveyEngine.setEmbeddedData('topmanhigher5050', topmanhigher5050);
Qualtrics.SurveyEngine.setEmbeddedData('avgmanhigher5050', avgmanhigher5050);
Qualtrics.SurveyEngine.setEmbeddedData('topabove35higher5050gender', topabove35higher5050gender);
Qualtrics.SurveyEngine.setEmbeddedData('avgabove35higher5050gender', avgabove35higher5050gender);
Qualtrics.SurveyEngine.setEmbeddedData('topoddhigher5050', topoddhigher5050);
Qualtrics.SurveyEngine.setEmbeddedData('avgoddhigher5050', avgoddhigher5050);
Qualtrics.SurveyEngine.setEmbeddedData('numabove35_5050gender', numabove35_5050gender);
Qualtrics.SurveyEngine.setEmbeddedData('numbelow35_5050gender', numbelow35_5050gender);
Qualtrics.SurveyEngine.setEmbeddedData('numman', numman);
Qualtrics.SurveyEngine.setEmbeddedData('numwoman', numwoman);
Qualtrics.SurveyEngine.setEmbeddedData('numabove35', numabove35);
Qualtrics.SurveyEngine.setEmbeddedData('numbelow35', numbelow35);
Qualtrics.SurveyEngine.setEmbeddedData('numodd', numodd);
Qualtrics.SurveyEngine.setEmbeddedData('numeven', numeven);
Qualtrics.SurveyEngine.setEmbeddedData('manhigher', manhigher);
Qualtrics.SurveyEngine.setEmbeddedData('above35higher', above35higher);
Qualtrics.SurveyEngine.setEmbeddedData('oddhigher', oddhigher);
