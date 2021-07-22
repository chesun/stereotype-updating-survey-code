//generate embedded data fields needed to show the participant the selected problem and their payment
//calculates subject payment



/*
text placed at the end of qualtrics preview url to set embedded data for preview

&QuestionRandomDraw=2ChoiceRandomDraw=4&BallRandomDraw=15&placebopost1initialswitchnum=5&placebopostzoomswitchnum=2&oddhigher=1


*/

////////////////////////////////////////////////////////////////////////////////
// 10 rounds version
////////////////////////////////////////////////////////////////////////////////
// construct an array for the relevant switch numbers in the question selected. NOTE array index starts at 0, there are 22 elements in this array
var switchnums = new Array();
switchnums[0] = "${e://Field/placebopriorinitialswitchnum}";
switchnums[1] = "${e://Field/placebopriorzoomswitchnum}";
switchnums[2] = "${e://Field/placebopost1initialswitchnum}";
switchnums[3] = "${e://Field/placebopost1zoomswitchnum}";
switchnums[4] = "${e://Field/placebopost2initialswitchnum}";
switchnums[5] = "${e://Field/placebopost2zoomswitchnum}";
switchnums[6] = "${e://Field/placebopost3initialswitchnum}";
switchnums[7] = "${e://Field/placebopost3zoomswitchnum}";
switchnums[8] = "${e://Field/placebopost4initialswitchnum}";
switchnums[9] = "${e://Field/placebopost4zoomswitchnum}";
switchnums[10] = "${e://Field/placebopost5initialswitchnum}";
switchnums[11] = "${e://Field/placebopost5zoomswitchnum}";
switchnums[12] = "${e://Field/placebopost6initialswitchnum}";
switchnums[13] = "${e://Field/placebopost6zoomswitchnum}";
switchnums[14] = "${e://Field/placebopost7initialswitchnum}";
switchnums[15] = "${e://Field/placebopost7zoomswitchnum}";
switchnums[16] = "${e://Field/placebopost8initialswitchnum}";
switchnums[17] = "${e://Field/placebopost8zoomswitchnum}";
switchnums[18] = "${e://Field/placebopost9initialswitchnum}";
switchnums[19] = "${e://Field/placebopost9zoomswitchnum}";
switchnums[20] = "${e://Field/placebopost10initialswitchnum}";
switchnums[21] = "${e://Field/placebopost10zoomswitchnum}";


// construct a var for injection text for odd higher true state in the payment screen
if ("${e://Field/oddhigher}" == 1) {
  var truestateoddhigherinject = "higher";
} else {
  var truestateoddhigherinject = "lower";
}

Qualtrics.SurveyEngine.setEmbeddedData("truestateoddhigherinject", truestateoddhigherinject);

// set var for selected question list type (initial/zoom-in) given odd/even QuestionRandomDraw
// check if the QuestionRandomDraw is even. if even, the list type is zoom-in
if ("${e://Field/QuestionRandomDraw}" % 2 == 0) {
  // set the var paylisttype for display text for the initial/zoom-in list type
  var paylisttype = "zoom-in";
}
// if the QuestionRandomDraw is odd, list type is initial
else {
  var paylisttype = "initial";
}


// use for loop to iterate over 1-22 for QuestionRandomDraw and
for (let i = 1; i <= 22; i++) {
  if ("${e://Field/QuestionRandomDraw}" == i) {
    // var payquestionnum for display text for question number selected
    var payquestionnum = i;

      // nested for loop to iterate over 1-9 for ChoiceRandomDraw
      for (let j = 1; j <= 9; j++) {
        if ("${e://Field/ChoiceRandomDraw}" == j) {
          // var for the display text for choice number selected
          var paychoicenum = j;

            // remember that switch number is the number of rows BEFORE the subject switches
            // if switch number < j means subject prefers Option B for the random selected choice row
            // remember that since array index starts at 0, actual index for question i's switch number is i-1 in array switchnums[]
            if (switchnums[i-1] < j) {
              // var for display text injection for the subject's chosen preference on the choice row selected
              var choicetextinject = "Option B: Earn $4 if the ball randomly drawn from Basket B is within the range 1 -";
              // recode value of the subject's choice on the choice row selected. 1 = Option A, 2 = Option B
              var choicerecode = 2;

                // if QuestionRandomDraw is even, then selected is zoom-in list, compare BallRandomDraw to zoomrowjnum = 10*initlalswitchpoint + j
                if ("${e://Field/QuestionRandomDraw}" % 2 == 0) {
                  // dummy for whether the subject earns a bonus. Note switchnums[i-2] is the initial switch number index in the array
                  var earnbonus = ("${e://Field/BallRandomDraw}" <= switchnums[i-2]*10 + j ) ? 1 : 0;
                  // var for the number in Option B on the choie row
                  var choicerownum = switchnums[i-2]*10 + j;
                  // amount of bonus earned, $4 or $0
                  var bonusamount = (earnbonus == 1) ? 4 : 0;
                }
                // if QuestionRandomDraw is odd, then the selected is initial list, compare BallRandomDraw to 10*j
                else {
                  // dummy for whether the subject earns a bonus
                  var earnbonus = ("${e://Field/BallRandomDraw}" <= 10*j ) ? 1 : 0;
                  // var for the number in Option B on the choie row
                  var choicerownum = 10*j;
                  // amount of bonus earned, $4 or $0
                  var bonusamount = (earnbonus == 1) ? 4 : 0;
                }

            }
            // if switch number >= j, this means that subject prefers Option A for the choice row selected
            else {
              var choicetextinject = "Option A: Earn $4 if the top scorer in the group has odd ID";
              var choicerecode = 1;
              // subject earns a bonus if the true state is odd higher
              var earnbonus = ("${e://Field/oddhigher}" == 1) ? 1 : 0;
              var bonusamount = (earnbonus == 1) ? 4 : 0;
            }
          }
      }

  }
}

var totalpayment = 3 + bonusamount


Qualtrics.SurveyEngine.setEmbeddedData("paylisttype", paylisttype);
Qualtrics.SurveyEngine.setEmbeddedData("payquestionnum", payquestionnum);
Qualtrics.SurveyEngine.setEmbeddedData("paychoicenum", paychoicenum);
Qualtrics.SurveyEngine.setEmbeddedData("choicetextinject", choicetextinject);
Qualtrics.SurveyEngine.setEmbeddedData("choicerecode", choicerecode);
Qualtrics.SurveyEngine.setEmbeddedData("earnbonus", earnbonus);
Qualtrics.SurveyEngine.setEmbeddedData("bonusamount", bonusamount);
Qualtrics.SurveyEngine.setEmbeddedData("choicerownum", choicerownum);
Qualtrics.SurveyEngine.setEmbeddedData("totalpayment", totalpayment);





////////////////////////////////////////////////////////////////////////////////
// 6 rounds version
////////////////////////////////////////////////////////////////////////////////

// construct an array for the relevant switch numbers in the question selected. NOTE array index starts at 0, there are 14 elements in this array
var switchnums = new Array();
switchnums[0] = "${e://Field/placebopriorinitialswitchnum}";
switchnums[1] = "${e://Field/placebopriorzoomswitchnum}";
switchnums[2] = "${e://Field/placebopost1initialswitchnum}";
switchnums[3] = "${e://Field/placebopost1zoomswitchnum}";
switchnums[4] = "${e://Field/placebopost2initialswitchnum}";
switchnums[5] = "${e://Field/placebopost2zoomswitchnum}";
switchnums[6] = "${e://Field/placebopost3initialswitchnum}";
switchnums[7] = "${e://Field/placebopost3zoomswitchnum}";
switchnums[8] = "${e://Field/placebopost4initialswitchnum}";
switchnums[9] = "${e://Field/placebopost4zoomswitchnum}";
switchnums[10] = "${e://Field/placebopost5initialswitchnum}";
switchnums[11] = "${e://Field/placebopost5zoomswitchnum}";
switchnums[12] = "${e://Field/placebopost6initialswitchnum}";
switchnums[13] = "${e://Field/placebopost6zoomswitchnum}";



// construct a var for injection text for odd higher true state in the payment screen
if ("${e://Field/oddhigher}" == 1) {
  var truestateoddhigherinject = "higher";
} else {
  var truestateoddhigherinject = "lower";
}

Qualtrics.SurveyEngine.setEmbeddedData("truestateoddhigherinject", truestateoddhigherinject);

// set var for selected question list type (initial/zoom-in) given odd/even QuestionRandomDraw
// check if the QuestionRandomDraw is even. if even, the list type is zoom-in
if ("${e://Field/QuestionRandomDraw}" % 2 == 0) {
  // set the var paylisttype for display text for the initial/zoom-in list type
  var paylisttype = "zoom-in";
}
// if the QuestionRandomDraw is odd, list type is initial
else {
  var paylisttype = "initial";
}


// use for loop to iterate over 1-14 for QuestionRandomDraw and
for (let i = 1; i <= 14; i++) {
  if ("${e://Field/QuestionRandomDraw}" == i) {
    // var payquestionnum for display text for question number selected
    var payquestionnum = i;

      // nested for loop to iterate over 1-9 for ChoiceRandomDraw
      for (let j = 1; j <= 9; j++) {
        if ("${e://Field/ChoiceRandomDraw}" == j) {
          // var for the display text for choice number selected
          var paychoicenum = j;

            // remember that switch number is the number of rows BEFORE the subject switches
            // if switch number < j means subject prefers Option B for the random selected choice row
            // remember that since array index starts at 0, actual index for question i's switch number is i-1 in array switchnums[]
            if (switchnums[i-1] < j) {
              // var for display text injection for the subject's chosen preference on the choice row selected
              var choicetextinject = "Option B: Earn $4 if the ball randomly drawn from Basket B is within the range 1 -";
              // recode value of the subject's choice on the choice row selected. 1 = Option A, 2 = Option B
              var choicerecode = 2;

                // if QuestionRandomDraw is even, then selected is zoom-in list, compare BallRandomDraw to zoomrowjnum = 10*initlalswitchpoint + j
                if ("${e://Field/QuestionRandomDraw}" % 2 == 0) {
                  // dummy for whether the subject earns a bonus. Note switchnums[i-2] is the initial switch number index in the array
                  var earnbonus = ("${e://Field/BallRandomDraw}" <= switchnums[i-2]*10 + j ) ? 1 : 0;
                  // var for the number in Option B on the choie row
                  var choicerownum = switchnums[i-2]*10 + j;
                  // amount of bonus earned, $4 or $0
                  var bonusamount = (earnbonus == 1) ? 4 : 0;
                }
                // if QuestionRandomDraw is odd, then the selected is initial list, compare BallRandomDraw to 10*j
                else {
                  // dummy for whether the subject earns a bonus
                  var earnbonus = ("${e://Field/BallRandomDraw}" <= 10*j ) ? 1 : 0;
                  // var for the number in Option B on the choie row
                  var choicerownum = 10*j;
                  // amount of bonus earned, $4 or $0
                  var bonusamount = (earnbonus == 1) ? 4 : 0;
                }

            }
            // if switch number >= j, this means that subject prefers Option A for the choice row selected
            else {
              var choicetextinject = "Option A: Earn $4 if the top scorer in the group has odd ID";
              var choicerecode = 1;
              // subject earns a bonus if the true state is odd higher
              var earnbonus = ("${e://Field/oddhigher}" == 1) ? 1 : 0;
              var bonusamount = (earnbonus == 1) ? 4 : 0;
            }
          }
      }

  }
}

var totalpayment = 3 + bonusamount


Qualtrics.SurveyEngine.setEmbeddedData("paylisttype", paylisttype);
Qualtrics.SurveyEngine.setEmbeddedData("payquestionnum", payquestionnum);
Qualtrics.SurveyEngine.setEmbeddedData("paychoicenum", paychoicenum);
Qualtrics.SurveyEngine.setEmbeddedData("choicetextinject", choicetextinject);
Qualtrics.SurveyEngine.setEmbeddedData("choicerecode", choicerecode);
Qualtrics.SurveyEngine.setEmbeddedData("earnbonus", earnbonus);
Qualtrics.SurveyEngine.setEmbeddedData("bonusamount", bonusamount);
Qualtrics.SurveyEngine.setEmbeddedData("choicerownum", choicerownum);
Qualtrics.SurveyEngine.setEmbeddedData("totalpayment", totalpayment);


/*
// BELOW ARE UNUSED CODE


// set vars for the relevant switch number for use in for loop
if ("${e://Field/QuestionRandomDraw}" == 1) {
  var relevantswitchnum = "${e://Field/placebopriorinitialswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 2) {
  var relevantswitchnum = "${e://Field/placebopriorzoomswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 3) {
  var relevantswitchnum = "${e://Field/placebopost1initialswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 4) {
  var relevantswitchnum = "${e://Field/placebopost1zoomswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 5) {
  var relevantswitchnum = "${e://Field/placebopost2initialswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 6) {
  var relevantswitchnum = "${e://Field/placebopost2zoomswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 7) {
  var relevantswitchnum = "${e://Field/placebopost3initialswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 8) {
  var relevantswitchnum = "${e://Field/placebopost3zoomswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 9) {
  var relevantswitchnum = "${e://Field/placebopost4initialswitchnum}";
}

if ("${e://Field/QuestionRandomDraw}" == 10) {
  var relevantswitchnum = "${e://Field/placebopost4zoomswitchnum}";
}




if ("${e://Field/QuestionRandomDraw}" == 2) {
  var paylisttype = "zoom-in";
  var payquestionnum = "1st";
}

if ("${e://Field/QuestionRandomDraw}" == 3) {
  var paylisttype = "initial";
  var payquestionnum = "2nd";
}

if ("${e://Field/QuestionRandomDraw}" == 4) {
  var paylisttype = "zoom-in";
  var payquestionnum = "2nd";
}

if ("${e://Field/QuestionRandomDraw}" == 5) {
  var paylisttype = "initial";
  var payquestionnum = "3rd";
}

if ("${e://Field/QuestionRandomDraw}" == 6) {
  var paylisttype = "zoom-in";
  var payquestionnum = "3rd";
}

if ("${e://Field/QuestionRandomDraw}" == 7) {
  var paylisttype = "initial";
  var payquestionnum = "4th";
}

if ("${e://Field/QuestionRandomDraw}" == 8) {
  var paylisttype = "zoom-in";
  var payquestionnum = "4th";
}

if ("${e://Field/QuestionRandomDraw}" == 9) {
  var paylisttype = "initial";
  var payquestionnum = "5th";
}

if ("${e://Field/QuestionRandomDraw}" == 10) {
  var paylisttype = "zoom-in";
  var payquestionnum = "5th";
}





// set the variable for display text for the choice number picked
if ("${e://Field/ChoiceRandomDraw}" == 1) {
  var paychoicenum = "1st";
}

if ("${e://Field/ChoiceRandomDraw}" == 2) {
  var paychoicenum = "2nd";
}

if ("${e://Field/ChoiceRandomDraw}" == 3) {
  var paychoicenum = "3rd";
}

if ("${e://Field/ChoiceRandomDraw}" == 4) {
  var paychoicenum = "4th";
}

if ("${e://Field/ChoiceRandomDraw}" == 5) {
  var paychoicenum = "5th";
}

if ("${e://Field/ChoiceRandomDraw}" == 6) {
  var paychoicenum = "6th";
}

if ("${e://Field/ChoiceRandomDraw}" == 7) {
  var paychoicenum = "7th";
}

if ("${e://Field/ChoiceRandomDraw}" == 8) {
  var paychoicenum = "8th";
}

if ("${e://Field/ChoiceRandomDraw}" == 9) {
  var paychoicenum = "9th";
}
*/
