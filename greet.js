var counter = 0;
var whatsthere = localStorage.getItem('counter');

// check if theere is any counter value stored in LocalStorage
if (whatsthere) {
 localStorage.setItem('counter',whatsthere);
  counter = whatsthere;
 }

var namesGreeted = {};
for (var i = 0; i < namesGreeted.length; i++) {
}
document.getElementById("submitButton").addEventListener("click", output);
document.getElementById("resetButton").addEventListener("click", resetCounter);

function output() {
  // window.alert("hello");
  // counter = localStorage.getItem('counter');
  var nameHold = document.getElementById("username").value;
  // document.getElementById('example').innerHTML = 'Hello, ' + nameHold;
  document.getElementById("display").value = "";

  if (document.getElementById("sesotho").checked === true && nameHold.length>0 && namesGreeted[nameHold] === undefined) {
  document.getElementById('display').innerHTML = 'Dumela, ' + nameHold;
counter++;
// localStorage.setItem('counter', counter);
namesGreeted[nameHold] = 0;

  // document.getElementByIdi("username").value = "";
  document.getElementById('counterDisplay').innerHTML = counter;
  }
  if (document.getElementById("english").checked === true && nameHold.length>0 && namesGreeted[nameHold] === undefined) {

    document.getElementById('display').innerHTML = 'Hello, ' + nameHold;
   counter++;
  //  localStorage.setItem('counter', counter);
   namesGreeted[nameHold] = 0;

// document.getElementById("username").value = "";
  document.getElementById('counterDisplay').innerHTML = counter;
  }
  if (document.getElementById("xhosa").checked === true && nameHold.length>0 && namesGreeted[nameHold] === undefined) {
    document.getElementById('display').innerHTML = 'Molo,  ' + nameHold;
counter++;
// localStorage.setItem('counter', counter);
namesGreeted[nameHold] = 0;
// document.getElementById("username").value = "";
  document.getElementById('counterDisplay').innerHTML = counter;
} else if (document.getElementById("sesotho").checked === true && nameHold.length>0 && namesGreeted[nameHold] !== undefined) {
    document.getElementById('display').innerHTML = 'Dumela, ' + nameHold;
    }
  else if (document.getElementById("english").checked === true && nameHold.length>0 && namesGreeted[nameHold] !== undefined) {

      document.getElementById('display').innerHTML = 'Hello, ' + nameHold;
    }
  else if (document.getElementById("xhosa").checked === true && nameHold.length>0 && namesGreeted[nameHold] !== undefined) {
      document.getElementById('display').innerHTML = 'Molo, ' + nameHold;
    }
  document.getElementById("username").value = "";

  // update LocalStorage with the new value of counter
localStorage.setItem('counter', counter);
};
function resetCounter(){
 'use strict';
counter = 0;
localStorage.setItem('counter',0);
document.getElementById('display').innerHTML = "";
document.getElementById('counterDisplay').innerHTML = counter;
}
