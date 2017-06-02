var namesGreeted = {};
var counter = 0;

function resetCounter() {
  'use strict';
  counter = 0;
  localStorage.setItem('counter', 0);

  return counter;
}


function setupCounter(){
  var storedCounter = localStorage['counter']

  if (storedCounter){
      counter = Number(storedCounter);
  }

  return counter;
}

function count(nameHold) {
  if (namesGreeted[nameHold] === undefined) {
    counter++;
    localStorage['counter'] = counter;
    namesGreeted[nameHold]=0;
  }
  return counter;
}
