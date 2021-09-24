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
    if (randomN <= beliefReports[0]) {
      //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
      var earnBonus = (trueStateManHigher == 1) ? 1 : 0; // dummy for whether the subject earns a bonus
      var bonusAmount = (earnBonus == 1) ? bonusFee : 0; // amount of bonus earned
    } else {
      //if randomN is larger than stated belief, then use number lottery method to calculate payment
      var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
      var bonusAmount = (earnBonus == 1) ? bonusFee : 0;
    }

} else {
      if (payQuestionNum==2) {
        trueStateManHigher = parseInt("${e://Field/avgmanhigher5050}");
          if (randomN <= beliefReports[1]) {
            //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
            var earnBonus = (trueStateManHigher == 1) ? 1 : 0; // dummy for whether the subject earns a bonus
            var bonusAmount = (earnBonus == 1) ? bonusFee : 0; // amount of bonus earned
          } else {
            //if randomN is larger than stated belief, then use number lottery method to calculate payment
            var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
            var bonusAmount = (earnBonus == 1) ? bonusFee : 0;
          }
      } else {
          trueStateManHigher = parseInt("${e://Field/manhigher}");
            for (let i=3; i<=9; i++) {
              if (payQuestionNum==i) {
                if (randomN <= beliefReports[i-1]) {
                  //if randomN is smaller or equal to stated belief in the selected question, use event lottery method
                  // dummy for whether the subject earns a bonus
                  var earnBonus = (trueStateManHigher == 1) ? 1 : 0;
                  // amount of bonus earned
                  var bonusAmount = (earnBonus == 1) ? bonusFee : 0;
                } else {
                   //if randomN is larger than stated belief, then use number lottery method to calculate payment
                   var earnBonus = (numLottRandDraw <= randomN) ? 1 : 0;
                   var bonusAmount = (earnBonus == 1) ? bonusFee : 0;
                }
              }
            }
      }
}
