//set a var for page submit time from the attention check timiing question
var attcheckpagesubmit = parseFloat("${e://Field/attcheckpagesubmit}");

if (attcheckpagesubmit >= 15) {
    var attncheckFailed = 1;
}

Qualtrics.SurveyEngine.setEmbeddedData("attncheckFailed", attncheckFailed);
