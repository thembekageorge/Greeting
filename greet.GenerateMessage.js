
function generateGreeting(nameHold){
// var nameHold = document.getElementById("username").value;

document.getElementById("display").value = "";

 if (document.getElementById("sesotho").checked === true && nameHold.length > 0 ) {
  document.getElementById('display').innerHTML = 'Dumela, ' + nameHold;
  // counter++;

  // namesGreeted[nameHold] = 0;

  // document.getElementById('counterDisplay').innerHTML = counter;
}
if (document.getElementById("english").checked === true && nameHold.length > 0  ) {

  document.getElementById('display').innerHTML = 'Hello, ' + nameHold;
  // counter++;

  // namesGreeted[nameHold] = 0;


  // document.getElementById('counterDisplay').innerHTML = counter;
}
if (document.getElementById("xhosa").checked === true && nameHold.length > 0 ) {
  document.getElementById('display').innerHTML = 'Molo,  ' + nameHold;
  // counter++;

  // namesGreeted[nameHold] = 0;

  // document.getElementById('counterDisplay').innerHTML = counter;
} else if (document.getElementById("sesotho").checked === true && nameHold.length > 0) {
  document.getElementById('display').innerHTML = 'Dumela, ' + nameHold;
} else if (document.getElementById("english").checked === true && nameHold.length > 0 ) {

  document.getElementById('display').innerHTML = 'Hello, ' + nameHold;
} else if (document.getElementById("xhosa").checked === true && nameHold.length > 0 ) {
  document.getElementById('display').innerHTML = 'Molo, ' + nameHold;
}
}
