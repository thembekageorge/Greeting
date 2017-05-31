
//var whatsthere = localStorage.getItem('counter');

// check if theere is any counter value stored in LocalStorage
//if (whatsthere) {
//  localStorage.setItem('counter', whatsthere);
//  counter = whatsthere;
//}

// var namesGreeted = {};
// for (var i = 0; i < namesGreeted.length; i++) {}
document.getElementById("submitButton").addEventListener("click", output);
// document.getElementById("resetButton").addEventListener("click", resetCounter);

function output() {

 var nameHold = document.getElementById("username").value;
 var language = checkLingo();
 document.getElementById('display').innerHTML= generateGreeting(nameHold, language);
// count();
document.getElementById('counterDisplay').innerHTML = count(nameHold);


document.getElementById("username").value = "";


  // localStorage.setItem('counter', counter);
};

// function resetCounter() {
//   'use strict';
//   counter = 0;
//   localStorage.setItem('counter', 0);
//   document.getElementById('display').innerHTML = "";
//   document.getElementById('counterDisplay').innerHTML = counter;
// }
