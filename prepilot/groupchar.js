// assign variables for number of men in the group, number of odd ID, dummy for men have higher scores, and dummy for odd ID have higer scores

if ("${e://Field/RandomGroup}"==1) {
    var nummen = "${e://Field/a1}";
    var numodd = "${e://Field/c1}";
    var menhigher = "${e://Field/e1}";
    var oddhigher = "${e://Field/f1}";
  }
if ("${e://Field/RandomGroup}"==2) {
    var nummen = "${e://Field/a2}";
    var numodd = "${e://Field/c2}";
    var menhigher = "${e://Field/e2}";
    var oddhigher = "${e://Field/f2}";
  }
if ("${e://Field/RandomGroup}"==3) {
    var nummen = "${e://Field/a3}";
    var numodd = "${e://Field/c3}";
    var menhigher = "${e://Field/e3}";
    var oddhigher = "${e://Field/f3}";
  }
if ("${e://Field/RandomGroup}"==4) {
    var nummen = "${e://Field/a4}";
    var numodd = "${e://Field/c4}";
    var menhigher = "${e://Field/e4}";
    var oddhigher = "${e://Field/f4}";
  }
if ("${e://Field/RandomGroup}"==5) {
    var nummen = "${e://Field/a5}";
    var numodd = "${e://Field/c5}";
    var menhigher = "${e://Field/e5}";
    var oddhigher = "${e://Field/f5}";
  }
if ("${e://Field/RandomGroup}"==6) {
    var nummen = "${e://Field/a6}";
    var numodd = "${e://Field/c6}";
    var menhigher = "${e://Field/e6}";
    var oddhigher = "${e://Field/f6}";
  }
if ("${e://Field/RandomGroup}"==7) {
    var nummen = "${e://Field/a7}";
    var numodd = "${e://Field/c7}";
    var menhigher = "${e://Field/e7}";
    var oddhigher = "${e://Field/f7}";
  }
if ("${e://Field/RandomGroup}"==8) {
    var nummen = "${e://Field/a8}";
    var numodd = "${e://Field/c8}";
    var menhigher = "${e://Field/e8}";
    var oddhigher = "${e://Field/f8}";
  }
if ("${e://Field/RandomGroup}"==9) {
    var nummen = "${e://Field/a9}";
    var numodd = "${e://Field/c9}";
    var menhigher = "${e://Field/e9}";
    var oddhigher = "${e://Field/f9}";
  }
if ("${e://Field/RandomGroup}"==10) {
    var nummen = "${e://Field/a10}";
    var numodd = "${e://Field/c10}";
    var menhigher = "${e://Field/e10}";
    var oddhigher = "${e://Field/f10}";
  }
if ("${e://Field/RandomGroup}"==11) {
    var nummen = "${e://Field/a11}";
    var numodd = "${e://Field/c11}";
    var menhigher = "${e://Field/e11}";
    var oddhigher = "${e://Field/f11}";
  }
if ("${e://Field/RandomGroup}"==12) {
    var nummen = "${e://Field/a12}";
    var numodd = "${e://Field/c12}";
    var menhigher = "${e://Field/e12}";
    var oddhigher = "${e://Field/f12}";
  }
if ("${e://Field/RandomGroup}"==13) {
    var nummen = "${e://Field/a13}";
    var numodd = "${e://Field/c13}";
    var menhigher = "${e://Field/e13}";
    var oddhigher = "${e://Field/f13}";
  }
if ("${e://Field/RandomGroup}"==14) {
    var nummen = "${e://Field/a14}";
    var numodd = "${e://Field/c14}";
    var menhigher = "${e://Field/e14}";
    var oddhigher = "${e://Field/f14}";
  }
if ("${e://Field/RandomGroup}"==15) {
    var nummen = "${e://Field/a15}";
    var numodd = "${e://Field/c15}";
    var menhigher = "${e://Field/e15}";
    var oddhigher = "${e://Field/f15}";
  }
if ("${e://Field/RandomGroup}"==16) {
    var nummen = "${e://Field/a16}";
    var numodd = "${e://Field/c16}";
    var menhigher = "${e://Field/e16}";
    var oddhigher = "${e://Field/f16}";
  }
if ("${e://Field/RandomGroup}"==17) {
    var nummen = "${e://Field/a17}";
    var numodd = "${e://Field/c17}";
    var menhigher = "${e://Field/e17}";
    var oddhigher = "${e://Field/f17}";
  }
if ("${e://Field/RandomGroup}"==18) {
    var nummen = "${e://Field/a18}";
    var numodd = "${e://Field/c18}";
    var menhigher = "${e://Field/e18}";
    var oddhigher = "${e://Field/f18}";
  }
if ("${e://Field/RandomGroup}"==19) {
    var nummen = "${e://Field/a19}";
    var numodd = "${e://Field/c19}";
    var menhigher = "${e://Field/e19}";
    var oddhigher = "${e://Field/f19}";
  }
if ("${e://Field/RandomGroup}"==20) {
    var nummen = "${e://Field/a20}";
    var numodd = "${e://Field/c20}";
    var menhigher = "${e://Field/e20}";
    var oddhigher = "${e://Field/f20}";
  }

    var numwomen = 20 - nummen
    var numeven = 20 - numodd

Qualtrics.SurveyEngine.setEmbeddedData("nummen", nummen);
Qualtrics.SurveyEngine.setEmbeddedData("numwomen", numwomen);
Qualtrics.SurveyEngine.setEmbeddedData("numodd", numodd);
Qualtrics.SurveyEngine.setEmbeddedData("numeven", numeven);
Qualtrics.SurveyEngine.setEmbeddedData("menhigher", menhigher);
Qualtrics.SurveyEngine.setEmbeddedData("oddhigher", oddhigher);

//assign variable for number of odd

if ("${e://Field/RandomGroup}"==1)
  {
  var numodd = "${e://Field/c1}";
  }
if ("${e://Field/RandomGroup}"==2)
  {
  var numodd = "${e://Field/c2}";
  }
if ("${e://Field/RandomGroup}"==3)
  {
  var numodd = "${e://Field/c3}";
  }
if ("${e://Field/RandomGroup}"==4)
  {
  var numodd = "${e://Field/c4}";
  }
if ("${e://Field/RandomGroup}"==5)
  {
  var numodd = "${e://Field/c5}";
  }
if ("${e://Field/RandomGroup}"==6)
  {
  var numodd = "${e://Field/c6}";
  }
if ("${e://Field/RandomGroup}"==7)
  {
  var numodd = "${e://Field/c7}";
  }
if ("${e://Field/RandomGroup}"==8)
  {
  var numodd = "${e://Field/c8}";
  }
if ("${e://Field/RandomGroup}"==9)
  {
  var numodd = "${e://Field/c9}";
  }
if ("${e://Field/RandomGroup}"==10)
  {
  var numodd = "${e://Field/c10}";
  }
if ("${e://Field/RandomGroup}"==11)
  {
  var numodd = "${e://Field/c11}";
  }
if ("${e://Field/RandomGroup}"==12)
  {
  var numodd = "${e://Field/c12}";
  }
if ("${e://Field/RandomGroup}"==13)
  {
  var numodd = "${e://Field/c13}";
  }
if ("${e://Field/RandomGroup}"==14)
  {
  var numodd = "${e://Field/c14}";
  }
if ("${e://Field/RandomGroup}"==15)
  {
  var numodd = "${e://Field/c15}";
  }
if ("${e://Field/RandomGroup}"==16)
  {
  var numodd = "${e://Field/c16}";
  }
if ("${e://Field/RandomGroup}"==17)
  {
  var numodd = "${e://Field/c17}";
  }
if ("${e://Field/RandomGroup}"==18)
  {
  var numodd = "${e://Field/c18}";
  }
if ("${e://Field/RandomGroup}"==19)
  {
  var numodd = "${e://Field/c19}";
  }
if ("${e://Field/RandomGroup}"==20)
  {
  var numodd = "${e://Field/c20}";
  }
