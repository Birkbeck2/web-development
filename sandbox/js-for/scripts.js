// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement

(function(){
    "use strict";
    /* Start of your code */

    // Say hello twice

    // for (
    //     let i = 0; // Initial expression - executes before the first loop
    //     i < 2; // Conditional expression - evaluated to see if it is still true before each loop, otherwise the iteration stops
    //     i = i + 1 // Increment expression - executed after each loop
    //   ) {
    //   alert(`hello (${i+1})`);
    // }

    // const body = document.getElementsByTagName('body')[0];
    
    // for (const property_name in body) {
    //   console.log(property_name);
    // }

    // Looping over the objects in an array

    const types_of_cake = ['Chocolate', 'Carrot', 'Red Velvet', 'Cheese'];

    for (const cake_type of types_of_cake) {
      console.log(cake_type);
      console.log(cake_type.length);
    }

    // const sentence = 'The quick brown fox jumps over the lazy dog.';

    // for (const letter of sentence) {
    //   console.log(letter);
    // }

    // const paragraphs = document.getElementsByTagName('p');

    // for (const p of paragraphs) {
    //   let random = Math.random();
    //   p.innerHTML += ` They fall by ${random} meters.`;
    // }

    // Destructuring an associative array in a for loop

    // const obj = { foo: 1, bar: 2 };
    // for (const [key, val] of Object.entries(obj)) {
    //   console.log(key, val);
    // }

    /* End of your code */
  })();  