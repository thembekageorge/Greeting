var namesGreeted = {};

for (var i = 0; i < namesGreeted.length; i++) {}

var counter = 0;
function count(nameHold) {
  if (namesGreeted[nameHold] === undefined) {
    counter++;
    namesGreeted[nameHold]=0;
  }
  return counter;
}
