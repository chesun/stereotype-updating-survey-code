//generate embedded data fields needed to show the participant the selected problem and their bonus payment for the Gender Treatment

//parse embedded data needed for calculating payment.
//payQuestionNum is the question randomly selected for payment, from 1 to 12
//randomN is the number between 1 and 100 randomly draw to determine whether to pay using event lottery or number lottery
//numLottRandDraw is the number between 1 and 100 randomly drawn to play the number lottery
var payQuestionNum = parseInt("${e://Field/payQuestionNum}");
var randomN = parseInt("${e://Field/randomN}");
var numLottRandDraw = parseInt("${e://Field/numLottRandDraw}");
var bonusFee = parseInt("${e://Field/bonusFee}");
var baseFee = parseInt("${e://Field/baseFee}");


//generate embedded fields for the question number and part number displayed to the subject on the payment screen
//there are in total 12 questions that count for bonus including age fillers
if (payQuestionNum<=4) {
  //text injection for the part number the selected question is from
  var payPartNumInject = 1
  //text injection for question number selected inside the part
  var payQuestionNumInject = payQuestionNum
} else {
  var payPartNumInject = 2
  var payQuestionNumInject = payQuestionNum - 4
}



//construct an array that contains all of the stated beliefs in the belief elicitation questions.
//NOTE array index starts at 0, there are 12 elements in this array
var beliefReports = new Array();
beliefReports[0] = parseInt("${e://Field/topscoreBeliefGroupA}");
beliefReports[1] = parseInt("${e://Field/avgscoreBeliefGroupA}");
beliefReports[2] = parseInt("${e://Field/topscoreAbove35HigherGroupA}");
beliefReports[3] = parseInt("${e://Field/avgscoreAbove35HigherGroupA}");
beliefReports[4] = parseInt("${e://Field/genderPrior}");
beliefReports[5] = parseInt("${e://Field/genderPost1}");
beliefReports[6] = parseInt("${e://Field/genderPost2}");
beliefReports[7] = parseInt("${e://Field/genderPost3}");
beliefReports[8] = parseInt("${e://Field/genderPost4}");
beliefReports[9] = parseInt("${e://Field/genderPost5}");
beliefReports[10] = parseInt("${e://Field/genderPost6}");
beliefReports[11] = parseInt("${e://Field/topscoreAbove35HigherGroupB}");


//payment calculation if the elicitation language is man higher
if ("${e://Field/genderLanguage}" == "man") {

  //payment calculation needs to be made separately for Q1 to Q4 for group A (50/50 group)
  if (payQuestionNum==1) {
    //if P1Q1 is selected for payment, trueStateManHigher takes value 1 if top man score is higher than top woman score in Group A
    var trueStateManHigher = parseInt("${e://Field/topmanhigher5050}");
    var payQuestionBelief = beliefReports[payQuestionNum - 1]; //stated belief in the question
    var payEventText = "the top scorer in Group A is a man"; //text injection for the event description
    var payQuestionGroup = "Group A"; //text injection for the group in the question
      if (randomN <= payQuestionBelief) {
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
          if (numLottRandDraw <= randomN) {
            var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
            var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
          } else {
            var numLottCompare = "greater than";
            var winLottText = "did not win";
          }
      }

  }

  //If selected question for payment is P1Q2, about the avg score of men vs women
  if (payQuestionNum==2) {
    var trueStateManHigher = parseInt("${e://Field/avgmanhigher5050}");
    var payQuestionBelief = beliefReports[payQuestionNum - 1];
    var payEventText = "the average scoore of the men is higher than the average score of the women in Group A";
    var payQuestionGroup = "Group A";
      if (randomN <= payQuestionBelief) {
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
          if (numLottRandDraw <= randomN) {
            var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
            var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
          } else {
            var numLottCompare = "greater than";
            var winLottText = "did not win";
          }
      }
  }

  //if the selected question for payment is P1Q3, about top scorer is above 35 yo
  if (payQuestionNum==3) {
    var trueStateAbove35Higher = parseInt("${e://Field/topabove35higher5050gender}")
      var payQuestionBelief = beliefReports[payQuestionNum - 1];
      var payEventText = "the top scorer in Group A is aged 35 or above"
      var payQuestionGroup = "Group A";
        //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
        if (randomN <= payQuestionBelief) {
          var earnBonus = (trueStateAbove35Higher == 1) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "less than or equal to";
          var payMethod = "EL"; //paymnent method, event lottery or number lottery
          var payMethodText = "Payment on Event"; //text injection for payment method
            if (trueStateAbove35Higher == 1) {
              var trueEventText = "the top scorer is aged 35 or above";
            } else {
              var trueEventText = "the top scorer is below 35 years old";
            }
        } else {
          //if randomN is larger than stated belief, then use number lottery method to calculate payment
          var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "greater than";
          var payMethod = "NL"; //payment method is number lottery
          var payMethodText = "Payment on Lottery";
            if (numLottRandDraw <= randomN) {
              var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
              var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
            } else {
              var numLottCompare = "greater than";
              var winLottText = "did not win";
            }
        }
  }


  //if the selected question for payment is P1Q4, about whether average score of above 35 yo people is higher in Group A
  if (payQuestionNum==4) {
    var trueStateAbove35Higher = parseInt("${e://Field/avgabove35higher5050gender}")
      var payQuestionBelief = beliefReports[payQuestionNum - 1];
      var payEventText = "the average score of the people aged 35 or above is higher than the average score of the people below 35 in Group A"
      var payQuestionGroup = "Group A";
        //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
        if (randomN <= payQuestionBelief) {
          var earnBonus = (trueStateAbove35Higher == 1) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "less than or equal to";
          var payMethod = "EL"; //paymnent method, event lottery or number lottery
          var payMethodText = "Payment on Event"; //text injection for payment method
            if (trueStateAbove35Higher == 1) {
              var trueEventText = "the average score of the people aged 35 or above is higher than the average score of the people below 35";
            } else {
              var trueEventText = "the average score of the people aged 35 or above is lower than the average score of the people below 35";
            }
        } else {
          //if randomN is larger than stated belief, then use number lottery method to calculate payment
          var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "greater than";
          var payMethod = "NL"; //payment method is number lottery
          var payMethodText = "Payment on Lottery";
            if (numLottRandDraw <= randomN) {
              var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
              var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
            } else {
              var numLottCompare = "greater than";
              var winLottText = "did not win";
            }
        }
  }




  //if the selected question for payment is between 5 and 11, i.e. one of the gender prior or posteriors
  if (payQuestionNum>=5 && payQuestionNum<=11) {
    //For all questions after Q1 and Q2, it's about Group B and top scorer
    var trueStateManHigher = parseInt("${e://Field/manhigher}");
      for (let i=5; i<=11; i++) {
        if (payQuestionNum==i) {
          var payQuestionBelief = beliefReports[i-1];
          var payEventText = "the top scorer in Group B is a man";
          var payQuestionGroup = "Group B";
          if (randomN <= payQuestionBelief) {
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
               if (numLottRandDraw <= randomN) {
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




  //if the selected question for payment is 12, i.e. P2Q8, it is about top scorer in Group B being above 35 yo
  if (payQuestionNum==12) {
    var trueStateAbove35Higher = parseInt("${e://Field/above35higher}")
      var payQuestionBelief = beliefReports[payQuestionNum - 1];
      var payEventText = "the top scorer in Group B is aged 35 or above"
      var payQuestionGroup = "Group B";
        //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
        if (randomN <= payQuestionBelief) {
          var earnBonus = (trueStateAbove35Higher == 1) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "less than or equal to";
          var payMethod = "EL"; //paymnent method, event lottery or number lottery
          var payMethodText = "Payment on Event"; //text injection for payment method
            if (trueStateAbove35Higher == 1) {
              var trueEventText = "the top scorer is aged 35 or above";
            } else {
              var trueEventText = "the top scorer is below 35 years old";
            }
        } else {
          //if randomN is larger than stated belief, then use number lottery method to calculate payment
          var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "greater than";
          var payMethod = "NL"; //payment method is number lottery
          var payMethodText = "Payment on Lottery";
            if (numLottRandDraw <= randomN) {
              var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
              var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
            } else {
              var numLottCompare = "greater than";
              var winLottText = "did not win";
            }
        }
  }


}





////////////////////////////////////////////////////////////////////////////////
//payment calculation if the elicitation language is woman higher
if ("${e://Field/genderLanguage}" == "woman") {

  //payment calculation needs to be made separately for Q1 to Q4 for group A (50/50 group)
  if (payQuestionNum==1) {
    //if P1Q1 is selected for payment, trueStateManHigher takes value 1 if top man score is higher than top woman score in Group A
    var trueStateManHigher = parseInt("${e://Field/topmanhigher5050}");
    var payQuestionBelief = beliefReports[payQuestionNum - 1]; //stated belief in the question
    var payEventText = "the top scorer in Group A is a woman"; //text injection for the event description
    var payQuestionGroup = "Group A"; //text injection for the group in the question
      if (randomN <= payQuestionBelief) {
        //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
        var earnBonus = (trueStateManHigher == 0) ? 1 : 0; // dummy for whether the subject earns a bonus, equals 1 if top scorer is woman
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
          if (numLottRandDraw <= randomN) {
            var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
            var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
          } else {
            var numLottCompare = "greater than";
            var winLottText = "did not win";
          }
      }
  }


  //If selected question for payment is P1Q2, about the avg score of men vs women
  if (payQuestionNum==2) {
    var trueStateManHigher = parseInt("${e://Field/avgmanhigher5050}");
    var payQuestionBelief = beliefReports[payQuestionNum - 1];
    var payEventText = "the average scoore of the women is higher than the average score of the men in Group A";
    var payQuestionGroup = "Group A";
      if (randomN <= payQuestionBelief) {
        //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
        var earnBonus = (trueStateManHigher == 0) ? 1 : 0; // earn bonus if true state is top scorer is a woman
        var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0; // amount of bonus earned
        var randomNReportCompare = "less than or equal to"; //text injection for comparison between N and stated belief
        var payMethod = "EL"; //paymnent method, event lottery or number lottery
        var payMethodText = "Payment on Event"; //text injection for payment method
          if (trueStateManHigher == 1) {
            var trueEventText = "the average score of the women is lower than the average score of the men";
          } else {
            var trueEventText = "the average score of the women is higher than the average score of the men";
          }
      } else {
        //if randomN is larger than stated belief, then use number lottery method to calculate payment
        var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
        var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
        var randomNReportCompare = "greater than";
        var payMethod = "NL"; //payment method is number lottery
        var payMethodText = "Payment on Lottery";
          if (numLottRandDraw <= randomN) {
            var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
            var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
          } else {
            var numLottCompare = "greater than";
            var winLottText = "did not win";
          }
      }
  }

  //if the selected question for payment is P1Q3, about top scorer is above 35 yo
  if (payQuestionNum==3) {
    var trueStateAbove35Higher = parseInt("${e://Field/topabove35higher5050gender}")
      var payQuestionBelief = beliefReports[payQuestionNum - 1];
      var payEventText = "the top scorer in Group A is aged 35 or above"
      var payQuestionGroup = "Group A";
        //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
        if (randomN <= payQuestionBelief) {
          var earnBonus = (trueStateAbove35Higher == 1) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "less than or equal to";
          var payMethod = "EL"; //paymnent method, event lottery or number lottery
          var payMethodText = "Payment on Event"; //text injection for payment method
            if (trueStateAbove35Higher == 1) {
              var trueEventText = "the top scorer is aged 35 or above";
            } else {
              var trueEventText = "the top scorer is below 35 years old";
            }
        } else {
          //if randomN is larger than stated belief, then use number lottery method to calculate payment
          var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "greater than";
          var payMethod = "NL"; //payment method is number lottery
          var payMethodText = "Payment on Lottery";
            if (numLottRandDraw <= randomN) {
              var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
              var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
            } else {
              var numLottCompare = "greater than";
              var winLottText = "did not win";
            }
        }
  }


  //if the selected question for payment is P1Q4, about whether average score of above 35 yo people is higher in Group A
  if (payQuestionNum==4) {
    var trueStateAbove35Higher = parseInt("${e://Field/avgabove35higher5050gender}")
      var payQuestionBelief = beliefReports[payQuestionNum - 1];
      var payEventText = "the average score of the people aged 35 or above is higher than the average score of the people below 35 in Group A"
      var payQuestionGroup = "Group A";
        //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
        if (randomN <= payQuestionBelief) {
          var earnBonus = (trueStateAbove35Higher == 1) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "less than or equal to";
          var payMethod = "EL"; //paymnent method, event lottery or number lottery
          var payMethodText = "Payment on Event"; //text injection for payment method
            if (trueStateAbove35Higher == 1) {
              var trueEventText = "the average score of the people aged 35 or above is higher than the average score of the people below 35";
            } else {
              var trueEventText = "the average score of the people aged 35 or above is lower than the average score of the people below 35";
            }
        } else {
          //if randomN is larger than stated belief, then use number lottery method to calculate payment
          var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "greater than";
          var payMethod = "NL"; //payment method is number lottery
          var payMethodText = "Payment on Lottery";
            if (numLottRandDraw <= randomN) {
              var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
              var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
            } else {
              var numLottCompare = "greater than";
              var winLottText = "did not win";
            }
        }
  }

  //if the selected question for payment is between 5 and 11, i.e. one of the gender prior or posteriors
  if (payQuestionNum>=5 && payQuestionNum<=11) {
    //For all questions after Q1 and Q2, it's about Group B and top scorer
    var trueStateManHigher = parseInt("${e://Field/manhigher}");
      for (let i=5; i<=11; i++) {
        if (payQuestionNum==i) {
          var payQuestionBelief = beliefReports[i-1];
          var payEventText = "the top scorer in Group B is a woman";
          var payQuestionGroup = "Group B";
          if (randomN <= payQuestionBelief) {
            //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
            // dummy for whether the subject earns a bonus
            var earnBonus = (trueStateManHigher == 0) ? 1 : 0; //earn bonus if top scorer is woman
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
               if (numLottRandDraw <= randomN) {
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

  //if the selected question for payment is 12, i.e. P2Q8, it is about top scorer in Group B being above 35 yo
  if (payQuestionNum==12) {
    var trueStateAbove35Higher = parseInt("${e://Field/above35higher}")
      var payQuestionBelief = beliefReports[payQuestionNum - 1];
      var payEventText = "the top scorer in Group B is aged 35 or above"
      var payQuestionGroup = "Group B";
        //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
        if (randomN <= payQuestionBelief) {
          var earnBonus = (trueStateAbove35Higher == 1) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "less than or equal to";
          var payMethod = "EL"; //paymnent method, event lottery or number lottery
          var payMethodText = "Payment on Event"; //text injection for payment method
            if (trueStateAbove35Higher == 1) {
              var trueEventText = "the top scorer is aged 35 or above";
            } else {
              var trueEventText = "the top scorer is below 35 years old";
            }
        } else {
          //if randomN is larger than stated belief, then use number lottery method to calculate payment
          var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
          var bonusAmountEarned = (earnBonus == 1) ? bonusFee : 0;
          var randomNReportCompare = "greater than";
          var payMethod = "NL"; //payment method is number lottery
          var payMethodText = "Payment on Lottery";
            if (numLottRandDraw <= randomN) {
              var numLottCompare = "less than or equal to"; //text injection to compare numLottRandDraw and randomN
              var winLottText = "won"; //text injection for whether subject won or did not win the number lottery
            } else {
              var numLottCompare = "greater than";
              var winLottText = "did not win";
            }
        }
  }




}




Qualtrics.SurveyEngine.setEmbeddedData("payPartNumInject",payPartNumInject);
Qualtrics.SurveyEngine.setEmbeddedData("payQuestionNumInject",payQuestionNumInject);
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
