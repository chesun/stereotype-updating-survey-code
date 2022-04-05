//calculate bonus payment for base incentive treatment
var guess = parseInt("${e://Field/guess}");
var rand_num_1_10 = parseInt("${e://Field/rand_num_1_10}");
var n_red_jar = parseInt("${e://Field/n_red_jar}");
var n_red_ball_red_jar = parseInt("${e://Field/n_red_ball_red_jar}");
var n_red_ball_blue_jar = parseInt("${e://Field/n_red_ball_blue_jar}");

if (rand_num_1_10 <= n_red_jar) {
  var jar_color = "red";
  var num_red_ball_in_jar = n_red_ball_red_jar;
} else {
  var jar_color = "blue";
  var num_red_ball_in_jar = n_red_ball_blue_jar;
}

if (guess >= num_red_ball_in_jar - 1 && guess <= num_red_ball_in_jar + 1) {
  var bonus_payment = 1;
} else {
  var bonus_payment = 0;
}


Qualtrics.SurveyEngine.setEmbeddedData("bonus_payment",bonus_payment);
Qualtrics.SurveyEngine.setEmbeddedData("jar_color",jar_color);
Qualtrics.SurveyEngine.setEmbeddedData("num_red_ball_in_jar",num_red_ball_in_jar);
