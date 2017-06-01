document.getElementById("submitButton").addEventListener("click", output);
document.getElementById("resetButton").addEventListener("click", resetCounter);

function output() {

  var nameHold = document.getElementById("username").value;
  var language = checkLingo();
  document.getElementById('display').innerHTML = generateGreeting(nameHold, language);
  document.getElementById('counterDisplay').innerHTML = count(nameHold);
  document.getElementById("username").value = "";
  localStorage.setItem('counter', count(nameHold));
};

function resetCounter() {
  'use strict';
  counter = 0;
localStorage.setItem('counter', 0);
  document.getElementById('display').innerHTML = "";
  document.getElementById('counterDisplay').innerHTML = counter;
}
