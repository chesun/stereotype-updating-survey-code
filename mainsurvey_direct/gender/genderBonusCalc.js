//generate embedded data fields needed to show the participant the selected problem and their bonus payment
//calculates subject payment

//construct an array that contains all of the stated beliefs in the belief elicitation questions.
//NOTE array index starts at 0, there are 9 elements in this array
var beliefReports = new Array();
beliefReports[0] = parseInt("${e://Field/topscoreManHigherGroupA}");
beliefReports[1] = parseInt("${e://Field/avgscoreManHigherGroupA}");
beliefReports[2] = parseInt("${e://Field/genderPrior}");
beliefReports[3] = parseInt("${e://Field/genderPost1}");
beliefReports[4] = parseInt("${e://Field/genderPost2}");
beliefReports[5] = parseInt("${e://Field/genderPost3}");
beliefReports[6] = parseInt("${e://Field/genderPost4}");
beliefReports[7] = parseInt("${e://Field/genderPost5}");
beliefReports[8] = parseInt("${e://Field/genderPost6}");

//parse embedded data needed for calculating payment.
//payQuestionNum is the question randomly selected for payment
//randomN is the number between 1 and 100 randomly draw to determine whether to pay using event lottery or number lottery
//numLottRandDraw is the number between 1 and 100 randomly drawn to play the number lottery
var payQuestionNum = parseInt("${e://Field/payQuestionNum}");
var randomN = parseInt("${e://Field/rnadomN}");
var numLottRandDraw = parseInt("${e://Field/numLottRandDraw}");
var bonusFee = parseInt("${e://Field/bonusFee}");
var baseFee = parseInt("${e://Field/baseFee}");

//payment calculation needs to be made separately for Q1 and Q2 for group A (50/50 group)
if (payQuestionNum==1) {
  //if Q1 is selected for payment, trueStateManHigher takes value 1 if top man score is higher than top woman score in Group A
  trueStateManHigher = parseInt("${e://Field/topmanhigher5050}");
  var payQuestionBelief = beliefReports[0]; //stated belief in the question
  var payEventText = "the top scorer in Group A is a man"; //text injection for the event description
  var payQuestionGroup = "Group A"; //text injection for the group in the question
    if (randomN <= beliefReports[0]) {
      //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
      var earnBonus = (trueStateManHigher == 1) ? 1 : 0; // dummy for whether the subject earns a bonus
      var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0; // amount of bonus earned
      var randomNReportCompare = "less than or equal to"; //text injection for comparison between N and stated belief
      var payMethod = "EL"; //paymnent method, event lottery or number lottery
      var payMethodText = "Payment on Event"; //text injection for payment method
        if (trueStateManHigher == 1) {
          var trueEventText = "the top scorer is a man"; //text injection for the true event
        } else {
          var trueEventText = "the top scorer is a woman";
        }
    } else {
      //if randomN is larger than stated belief, then use number lottery method to calculate payment
      var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
      var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
      var randomNReportCompare = "greater than";
      var payMethod = "NL"; //payment method is number lottery
      var payMethodText = "Payment on Lottery";
        if numLottRandDraw <= randomN {
          var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
          var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
        } else {
          var numLottCompare = "greater than";
          var winLottText = "did not win";
        }
    }

} else {
      if (payQuestionNum==2) {
        trueStateManHigher = parseInt("${e://Field/avgmanhigher5050}");
        var payQuestionBelief = beliefReports[1];
        var payEventText = "the average scoore of the men is higher than the average score of the women in Group A ";
        var payQuestionGroup = "Group A";
          if (randomN <= beliefReports[1]) {
            //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
            var earnBonus = (trueStateManHigher == 1) ? 1 : 0; // dummy for whether the subject earns a bonus
            var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0; // amount of bonus earned
            var randomNReportCompare = "less than or equal to"; //text injection for comparison between N and stated belief
            var payMethod = "EL"; //paymnent method, event lottery or number lottery
            var payMethodText = "Payment on Event"; //text injection for payment method
              if (trueStateManHigher == 1) {
                var trueEventText = "the average score of the men is higher than the average score of the women";
              } else {
                var trueEventText = "the average score of the men is lower than the average score of the women";
              }
          } else {
            //if randomN is larger than stated belief, then use number lottery method to calculate payment
            var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
            var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
            var randomNReportCompare = "greater than";
            var payMethod = "NL"; //payment method is number lottery
            var payMethodText = "Payment on Lottery";
              if numLottRandDraw <= randomN {
                var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
                var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
              } else {
                var numLottCompare = "greater than";
                var winLottText = "did not win";
              }
          }
      } else {
          //For all questions after Q1 and Q2, it's about Group B and top scorer
          trueStateManHigher = parseInt("${e://Field/manhigher}");
            for (let i=3; i<=9; i++) {
              if (payQuestionNum==i) {
                var payQuestionBelief = beliefReports[i-1];
                var payEventText = "the top scorer in Group B is a man";
                var payQuestionGroup = "Group B";
                if (randomN <= beliefReports[i-1]) {
                  //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
                  // dummy for whether the subject earns a bonus
                  var earnBonus = (trueStateManHigher == 1) ? 1 : 0;
                  // amount of bonus earned
                  var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
                  var randomNReportCompare = "less than or equal to"; //text injection for comparison between N and stated belief
                  var payMethod = "EL"; //paymnent method, event lottery or number lottery
                  var payMethodText = "Payment on Event"; //text injection for payment method
                    if (trueStateManHigher == 1) {
                      var trueEventText = "the top scorer is a man"; //text injection for the true event
                    } else {
                      var trueEventText = "the top scorer is a woman";
                    }
                } else {
                   //if randomN is larger than stated belief, then use number lottery method to calculate payment
                   var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
                   var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
                   var randomNReportCompare = "greater than";
                   var payMethod = "NL"; //payment method is number lottery
                   var payMethodText = "Payment on Lottery";
                     if numLottRandDraw <= randomN {
                       var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
                       var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
                     } else {
                       var numLottCompare = "greater than";
                       var winLottText = "did not win";
                     }
                }
              }
            }
      }
}


Qualtrics.SurveyEngine.setEmbeddedData("payQuestionBelief",payQuestionBelief);
Qualtrics.SurveyEngine.setEmbeddedData("payEventText",payEventText);
Qualtrics.SurveyEngine.setEmbeddedData("payQuestionGroup",payQuestionGroup);
Qualtrics.SurveyEngine.setEmbeddedData("earnBonus",earnBonus);
Qualtrics.SurveyEngine.setEmbeddedData("bonusAmountEarned",bonusAmountEarned);
Qualtrics.SurveyEngine.setEmbeddedData("randomNReportCompare",randomNReportCompare);
Qualtrics.SurveyEngine.setEmbeddedData("payMethod",payMethod);
Qualtrics.SurveyEngine.setEmbeddedData("payMethodText",payMethodText);
Qualtrics.SurveyEngine.setEmbeddedData("trueEventText",trueEventText);
Qualtrics.SurveyEngine.setEmbeddedData("numLottCompare",numLottCompare);
Qualtrics.SurveyEngine.setEmbeddedData("winLottText",winLottText);
