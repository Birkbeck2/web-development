# Workshop: Conditions and Functions

Get a GitHub repository for this workshop in moodle. Homework will be to finish this workshop within 5 days.

In an alternate future you are a survivor of the recent Climate War that lasted decades. The world outside has been irradiated through heavy use of nuclear weaponry, and deadly airborne infections are rife. Your only contact with the outside is through your browser console. In this universe the console acts as a one way messaging system to the side who won the war and who now also control food and supplies.

1. Create a JavaScript file called `supplies-list.js` and link it to an `index.html` page.
2. In your JavaScript file create two global variables. Set each global variable to a integer of your choice, making sure you have to add at least 5 or more to the lower integer to get the higher integer.
3. Create a global boolean variable called `resistance` and initialise it with a value of your choice.
4. Log a message to the console explaining how your character is feeling this week, and anything you might want to ask or tell the interim government.
5. Create a function to output your supplies list to the console. Each line of the list should state the number of each item needed. Include the following in this function:
    - Give your list a title and print this to console.
    - Create local variables for the numbers of each item needed. This could include things such as fruit, vegetables, water, milk, soap, pet food, fertiliser etc. Be creative in what you think will be available in a world like this.
    - Use concatenation of strings and numbers to create each line of the list, with one console line for each item.
Call the function to output your list to the console.
6. Use an `if` . . . `else` statement to print lines to the console if `resistance` is true or false. For example if `resistance` is true you could send a secret coded message to operatives inside the interim government through the console, or if `resistance` is false send a weather report for your area through the console instead.
7. Use a `switch` statement to output different things that will happen, according to different weather conditions (or other string-based conditions of your choosing), to the console. The console output should include the condition, then what will happen because this condition is true. Use string concatenation or template literals to create the console output.
8. Create a new function with two parameters representing integers. Include the following in this function:
    - Create a random integer that is between the two parameters or equal to the lower of the two parameters using `Math.random()` and `Math.floor()`.
    - Depending on different condition(s); e.g. if the random number is odd or even, or within particular ranges; use `if` . . . `else` statement(s) or switch to create different ending messages for your supplies list. Examples of messages could include updates for your area, secret coded messages to resistance operatives in the interim government, or luxury items to add to your supplies list. Choose one particular type of message, and then create two or more different messages which fit that theme to print to the console, depending on the condition(s) you have chosen.
Again, remember to call the function to print your ending message to the console. Using `Math.random()` means a different ending message could be printed to the console each time the programme is run.

Alternatively create a story using the same structure as in the instructions above, but with a different scenario. Include the following:

1. Link a JavaScript file called `story.js` to an `index.html` file.
2. Two global variables which are integers with a difference of at least 5.
3. A global boolean variable.
4. Starting line(s) output to the console.
5. A function containing local variables and outputting a list of concatenated strings and numbers to the console.
6. An `if` . . . `else` statement with the boolean as the conditional, outputting text to the console if true or false.
7. A `switch` statement outputting text to the console depending on value of the condition (a string).
8. A function with two integer parameters which creates the ending line(s) of text using `Math.random()` and `Math.floor()` to get a random integer; and either an `if` . . . `else` statement or `switch`.

::: tip  While
If you have time or want try a different control structure, include a `while` loop. Add this `while` loop to the ending message or line(s) to create extra lines for your console message or story while a certain condition is true. Add an element of randomness to the text that is output while the condition is true using `Math.random()` and `Math.floor()`. Once the condition is false print a different ending message or line(s) to the console.
:::
