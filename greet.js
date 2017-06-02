
function showCounter(counterVal){
  document.getElementById('counterDisplay').innerHTML = counterVal;
}

function showGreeting(msg){
  document.getElementById('display').innerHTML = msg;
}

var usernameElem = document.getElementById("username");

function showMessage() {

  var nameHold = usernameElem.value;
  var language = checkLingo();

  var msg = generateGreeting(nameHold, language);

  showGreeting(msg);
  showCounter(count(nameHold));

  usernameElem.value = "";
};



document.getElementById("submitButton").addEventListener("click", showMessage);

document.getElementById("resetButton").addEventListener("click", function(){

  var newCounter = resetCounter();
  showCounter(newCounter);
  showGreeting("");

});

showCounter(setupCounter());
