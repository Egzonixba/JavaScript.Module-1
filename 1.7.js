
var numberOfRolls = prompt("Enter the number of dice rolls:");


numberOfRolls = parseInt(numberOfRolls);


function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}


var sum = 0;

for (var i = 0; i < numberOfRolls; i++) {
  var result = rollDie();
  console.log("Roll " + (i + 1) + ": " + result);
  sum += result;
}

console.log("Sum of the results: " + sum);
