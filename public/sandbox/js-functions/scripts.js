// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Function declarations

function turnBackTime(anArray) {
  return anArray.reverse();
}

const seasons = ["Leaves are falling", "Snow is freezing", "Leaves are growing", "It's hot"];
const seasonsReversed = turnBackTime(seasons);

console.log(seasonsReversed); // The array has been reversed in place.

console.log(seasons); // The original variable points to the same, now reversed, array.

// Function expressions
// Functions can also be defined in expressions, either as anonymous functions:

const turnBackTime2 = function (anArray) {
  return anArray.reverse();
}

// Or with names in case the name is needed inside the expression:

const turnBackTime = function reverse(anArray) {
  return anArray.reverse();
}
