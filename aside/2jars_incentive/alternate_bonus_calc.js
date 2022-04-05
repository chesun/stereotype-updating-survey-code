//calculate bonus payment for alternate incentive treatment
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

var bonus_payment = 1 - Math.pow(guess - num_red_ball_in_jar, 2)/100;


Qualtrics.SurveyEngine.setEmbeddedData("bonus_payment",bonus_payment);
Qualtrics.SurveyEngine.setEmbeddedData("jar_color",jar_color);
Qualtrics.SurveyEngine.setEmbeddedData("num_red_ball_in_jar",num_red_ball_in_jar);
