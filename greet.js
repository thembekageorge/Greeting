var counter = 0;
var whatsthere = localStorage.getItem('counter');

// check if theere is any counter value stored in LocalStorage
if (whatsthere) {
  localStorage.setItem('counter', whatsthere);
  counter = whatsthere;
}

var namesGreeted = {};
for (var i = 0; i < namesGreeted.length; i++) {}
document.getElementById("submitButton").addEventListener("click", output);
document.getElementById("resetButton").addEventListener("click", resetCounter);

function output() {

 var nameHold = document.getElementById("username").value;
 var language = checkLingo();
 document.getElementById('display').innerHTML= generateGreeting(nameHold, language);
  //
  // document.getElementById("display").value = "";
  //
  // if (document.getElementById("sesotho").checked === true && nameHold.length > 0 && namesGreeted[nameHold] === undefined) {
  //   document.getElementById('display').innerHTML = 'Dumela, ' + nameHold;
  //   counter++;
  //
  //   namesGreeted[nameHold] = 0;
  //
  //
  //   document.getElementById('counterDisplay').innerHTML = counter;
  // }
  // if (document.getElementById("english").checked === true && nameHold.length > 0 && namesGreeted[nameHold] === undefined) {
  //
  //   document.getElementById('display').innerHTML = 'Hello, ' + nameHold;
  //   counter++;
  //
  //   namesGreeted[nameHold] = 0;
  //
  //
  //   document.getElementById('counterDisplay').innerHTML = counter;
  // }
  // if (document.getElementById("xhosa").checked === true && nameHold.length > 0 && namesGreeted[nameHold] === undefined) {
  //   document.getElementById('display').innerHTML = 'Molo,  ' + nameHold;
  //   counter++;
  //
  //   namesGreeted[nameHold] = 0;
  //
  //   document.getElementById('counterDisplay').innerHTML = counter;
  // } else if (document.getElementById("sesotho").checked === true && nameHold.length > 0 && namesGreeted[nameHold] !== undefined) {
  //   document.getElementById('display').innerHTML = 'Dumela, ' + nameHold;
  // } else if (document.getElementById("english").checked === true && nameHold.length > 0 && namesGreeted[nameHold] !== undefined) {
  //
  //   document.getElementById('display').innerHTML = 'Hello, ' + nameHold;
  // } else if (document.getElementById("xhosa").checked === true && nameHold.length > 0 && namesGreeted[nameHold] !== undefined) {
  //   document.getElementById('display').inSnerHTML = 'Molo, ' + nameHold;
  // }
  document.getElementById("username").value = "";


  localStorage.setItem('counter', counter);
};

function resetCounter() {
  'use strict';
  counter = 0;
  localStorage.setItem('counter', 0);
  document.getElementById('display').innerHTML = "";
  document.getElementById('counterDisplay').innerHTML = counter;
}
