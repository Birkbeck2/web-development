// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement

// Say hello twice

for (
    let i = 0; // Initial expression - executes before the first loop
    i < 2; // Conditional expression - evaluated to see if it is still
           // true before each loop, otherwise the iteration stops
    i = i + 1 // Increment expression - executed after each loop
  ) {
  alert(`hello (${i+1})`);
}

const body = document.querySelector('body');

for (const propertyName in body) {
  console.log(propertyName);
}

// Looping over the objects in an array

const typesOfCake = ['Chocolate', 'Carrot', 'Red Velvet', 'Cheese']

for (const cakeType of typesOfCake) {
  console.log(cakeType)
  console.log(cakeType.length)
}

const sentence = 'The quick brown fox jumps over the lazy dog.';

for (const letter of sentence) {
  console.log(letter);
}

const paragraphs = document.querySelectorAll('p');

for (const p of paragraphs) {
  let random = Math.random();
  p.innerHTML += ` They fall by ${random} meters.`;
}

// Destructuring an associative array in a for loop

const obj = { foo: 1, bar: 2 };
for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
