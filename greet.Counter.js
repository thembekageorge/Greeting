var namesGreeted = {};
var counter;
// for (var i = 0; i < namesGreeted.length; i++) {}
function count( nameHold){
if (namesGreeted[nameHold] === undefined) {
  namesGreeted[nameHold]=0;
 counter++;
}
return counter;
}
