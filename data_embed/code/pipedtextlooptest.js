//test js code to loop over piped text to assign embedded data with random group chars


let test1 = 1;
let test2 = 2;
let test3 = 3;


Qualtrics.SurveyEngine.setEmbeddedData('test1', test1);
Qualtrics.SurveyEngine.setEmbeddedData('test2', test2);
Qualtrics.SurveyEngine.setEmbeddedData('test3', test3);





let result1 = Qualtrics.SurveyEngine.getEmbeddedData('test' + '1');
Qualtrics.SurveyEngine.setEmbeddedData('result1', result1);

let i = 2;
let result2 = Qualtrics.SurveyEngine.getEmbeddedData('test' + i.toString());
Qualtrics.SurveyEngine.setEmbeddedData('result2', result2);


let groupN = 3;
let randomvar = 3;
for (let i = 1; i <= 3; i++) {
  if (groupN == i) {
    //let is only scoped to the immediate code block enclosed by {}
    var result3 = Qualtrics.SurveyEngine.getEmbeddedData('test' + i.toString());
  }
}
Qualtrics.SurveyEngine.setEmbeddedData('randomvar', randomvar);
Qualtrics.SurveyEngine.setEmbeddedData('groupN', groupN);
Qualtrics.SurveyEngine.setEmbeddedData('result3', result3);
