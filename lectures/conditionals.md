![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | Helena Wee

[Previous](assigning-variables.md) | [All](README.md) | [Next](writing-functions-to-make-programs-modular.md)

# Setting up conditional statements

## Conditionals

Conditionals are how a program is able to act in a non-linear way (also called conditional execution).

Conditionals are the DECISION part of programming.

## If

A conditional is a block of code that is executed depending on the true/false value of a statement (if the statement is true, the code is executed, but not if false).

In JavaScript you create a conditional using the keyword `if`. The statement being assessed (the condition) comes after the `if` keyword in brackets `()` and is followed by the code to be executed. If the condition is true and there is more than one line of code to be executed, these are placed in curly brackets `{}`.

Example:
```
let haveSunshine = true;

if(haveSunshine == true){
  console.log("It is sunny");
}
```

## If else

If you want some code to execute if the statement is assessed as false, you can use an `if else` statement.

Example:
```
let haveSunshine = false;

if(haveSunshine == true){
  console.log("It is sunny");
} else {
  console.log("It is cloudy");
}
```

If there are more than two possible outcomes then a chain of `if else` pairs can be put together.

Examples:
```
let haveSunshine = false;
let isRaining = true;

if (haveSunshine == true && isRaining == false){
  console.log("It is sunny");
} else if(haveSunshine == true && isRaining == true){
  console.log("It is sunny and raining");
} else if(haveSunshine == false && isRaining == false){
  console.log("It is cloudy");
} else {
  console.log("It is cloudy and raining");
}
```
```
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

## While

Sometimes you want to repeat an operation many times. You could do this by writing out the same code many times, but that is not very efficient:

Example:
```
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
```

A better way to repeat an operation many times is to code a loop.

Loops are a more efficient way of doing REPETITION in programming.

One type of loop makes something happen whilst a condition is true. This is called a `while` loop.

Example:
```
let number = 0;
while (number <= 10) {
  console.log(number);
  number = number + 2;
}
```

If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

## Do while

The `do while` loop is a special case of the `while` loop. It runs some code first, then checks the condition, and if that is true it runs the code again.

So a `do while` loop will always run the condition once, and then it will run it again as long as the condition is true.

Example:
```
let text =""
let i = 0;
do{
  text += i + "<br>"
  i++;
}
while (i < 5);
document.getElementById("demo").innerHTML = text;
```

Block scope: Variables declared with let inside {} cannot be accessed outside of this block. Variables declared with var inside {} can be accessed outside this block.



## References
[https://eloquentjavascript.net/02_program_structure.html](https://eloquentjavascript.net/02_program_structure.html)  
[https://www.w3schools.com/jsref/jsref_dowhile.asp](https://www.w3schools.com/jsref/jsref_dowhile.asp)  
[https://www.w3schools.com/js/js_scope.asp](https://www.w3schools.com/js/js_scope.asp)


## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
