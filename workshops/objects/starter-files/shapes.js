// shapes.js
// Workshop on objects and loops

// 1. Make an array called 'shapes' containing strings that are the names of
// shapes. It should have at least three shapes.


// 2. Log the third item in the array to the console, without retyping the
// name of the shape.


// 3. Add another shape to the array


// 4. Write a loop that goes through all the shapes in the array.
// In the loop, log each shape to the console.
// Also log the second letter in each shape.


// 5. Choose three colors. Get the hex code for each one, and pick a name for each one.
// Make an object called 'colors' that has a property for each color.
// Use the color name as the key, and the hex code as the value.


// 6. Log the hex code of one of your colors to the console, without retyping the
// code.


// 7. Write a loop that goes through the colors. For each one, log a sentence to
// the console that says "I have a green triangle with code #000000" but
// substituting the particular color name and code each time.


// 8. Write a loop that goes through the colors. For each one, transform the
// hex code to lowercase letters, changing the property values as you go.
// Then log the colors object.
// Hint: Not sure if it's working? Make sure there's at least one uppercase letter in
// the object definition above, and check that it's lowercase when logged.


// 9. Write a loop that goes through the shapes. Inside the shape loop, write
// another loop that goes through the colors. Inside the color loop, log the
// sentence "You have a red rectangle" but substitute the shape AND the color
// every time.


// 10. Modify the above code so that it only logs the sentence if the hex code
// contains the letter 'e'.

// 11. Build an array called 'hexCodes' listing just the hex codes. To build
// it, please use a for loop that goes over your colors object, rather than
// retyping the codes. Then log the array to the console.

// 11b. OPTIONAL
// The next two steps involve exporting and importing with a pattern from ES
// modules. We did not cover all the steps in class, so they are optional.
// Make sure you've downloaded the file package.json and saved it in the same
// folder as this one.
// Here is a one minute video demo of "type":"module" in package.json:
// https://www.youtube.com/watch?v=I4gR-1qMjk0

// 12. OPTIONAL
// Make sure you've downloaded the file extraColors.js and saved
// it in the same folder as this one. Modify the line where the pinkAndYellow
// object is defined, so that it is exported. Then import it below, in this
// file, and log it to the console.


// 13. OPTIONAL
// Write a loop that goes through pinkAndYellow. Inside the loop, add each
// new color to your colors object. Log the updated colors object to the console.


// 14. OPTIONAL CHALLENGE Use more loops to build an object called
// 'charFrequencies' that
// records each character that appears in the hex codes, and how many times
// each one appears, overall. Each key should be a character, and each value
// should be the number of times that character appears. Then log it to the console.
// For example, at the end of your looping, your object might look like this:
// charFrequencies = {
//   'e': 5,
//   '6': 1,
//   ...
// }
// Hint 1. For each character, the action to take will vary, depending on
// whether you've already added that character to the object. Try using an if
// statement to handle this.
// Hint 2. You may need to use the built-in hasOwnProperty() method of the object.
// Hint 3. Try excluding the hash (#) from charFrequencies.

