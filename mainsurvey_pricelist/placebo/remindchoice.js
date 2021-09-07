// create an embedded data var to inject text into the reminder for the choice in the previous question

//Posterior 1: reminder for choice in Placebo Prior
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopriorzoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopriorzoomswitchnum}" == i) {
    var remindplacebopriorinject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopriorinject", remindplacebopriorinject);





//Posterior 2: reminder for choice in Posterior 1
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost1zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost1zoomswitchnum}" == i) {
    var remindplacebopost1inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost1inject", remindplacebopost1inject);




//Posterior 3: reminder for choice in Posterior 2
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost2zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost2zoomswitchnum}" == i) {
    var remindplacebopost2inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost2inject", remindplacebopost2inject);



//Posterior 4: reminder for choice in Posterior 3
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost3zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost3zoomswitchnum}" == i) {
    var remindplacebopost3inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost3inject", remindplacebopost3inject);




//Posterior 5: reminder for choice in Posterior 4
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost4zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost4zoomswitchnum}" == i) {
    var remindplacebopost4inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost4inject", remindplacebopost4inject);





//Posterior 6: reminder for choice in Posterior 5
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost5zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost5zoomswitchnum}" == i) {
    var remindplacebopost5inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost5inject", remindplacebopost5inject);




//Posterior 7: reminder for choice in Posterior 6
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost6zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost6zoomswitchnum}" == i) {
    var remindplacebopost6inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost6inject", remindplacebopost6inject);




//Posterior 8: reminder for choice in Posterior 7
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost7zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost7zoomswitchnum}" == i) {
    var remindplacebopost7inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost7inject", remindplacebopost7inject);




//Posterior 9: reminder for choice in Posterior 8
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost8zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost8zoomswitchnum}" == i) {
    var remindplacebopost8inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost8inject", remindplacebopost8inject);




//Posterior 10: reminder for choice in Posterior 9
//construct an array for the numbers on each row in the zoom-in list, including the number immediately following it in the inital list
var zoomrownums = new Array();
zoomrownums[0] = parseInt("${e://Field/placebopost9zoomrow1num}");
  //recursively set the value of zoomrownums[]
  for (let i = 1; i<10; i++) {
    zoomrownums[i] = zoomrownums[i-1] + 1;
  }

// initial switch number can be from 0 to 9. 0 means switch point is 1st row in the zoom-in list,
// 1 means switch point is 2nd row in the zoom-in list, etc.
// 9 means switch point is the number after the zoom-in list in the initial list, i.e. zoomrow9num + 1
for (let i = 0; i<10; i++) {
  if  ("${e://Field/placebopost9zoomswitchnum}" == i) {
    var remindplacebopost9inject = zoomrownums[i];
  }
}

Qualtrics.SurveyEngine.setEmbeddedData("remindplacebopost9inject", remindplacebopost9inject);
