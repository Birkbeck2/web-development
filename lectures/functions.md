# Writing functions to make programs modular

## Functions

A function is a set of instructions that take an input and get an output, to perform a certain task.

Functions are the ACTION part of programming.

To define a function in JavaScript you use the function keyword.

A function declaration uses the `function` keyword, followed by:
- The name of the function.
- The parameters of the function, enclosed in brackets `(parameter1, parameter2)` after the name, separated by commas.
- If a function has no parameters the name is followed by an empty pair of brackets `()`.
- The statements that form the actions of the function, are enclosed in curly brackets `{}`.

Example:

<<< @/public/sandbox/VDWP1_ConditionalsAndFunctions/functionsEx1.js#snippet{js}

The keyword `return` is used to specify the value returned by the function.

Defining a function does not run (or execute) it. To execute a function you need to call it by typing its name and then any values you want to use as parameters in brackets beside this. If there are no parameters, simply call the function by typing its name in front of a set of empty brackets `()`.

Example:

<<< @/public/sandbox/VDWP1_ConditionalsAndFunctions/functionsEx1.js#snippet1{js}

Sometimes if you have a lot of code that will be used many times in a program, instead of writing out all the instructions again and again, you can put them in a function and just use a one line function call to do the same thing. This makes your code modular and more efficient.

The special term `return` is used to stop the function running, then specify the value returned and give it to the function caller (put it into memory). After this other following statements in the function will run.

Functions can be used as values, and in expressions.

Example:

<<< @/public/sandbox/VDWP1_ConditionalsAndFunctions/functionsEx2.js{js}

Example:

<<< @/public/sandbox/VDWP1_ConditionalsAndFunctions/functionsEx1.js#snippet2{js}

## Function scope

Function scope: Variables declared within a function, cannot be accessed outside of it. Local variables have function scope and can only be accessed from within a function.

The difference between global and local variables:
- Global variables are declared OUTSIDE functions (typically at the beginning of the program). They are retained throughout the entire program lifetime.
- Local variables are declared INSIDE functions. They are thrown away when the function returns.

Example:

<<< @/public/sandbox/VDWP1_ConditionalsAndFunctions/functionsEx1a.js{js}

Example:

<<< @/public/sandbox/VDWP1_ConditionalsAndFunctions/functionsEx2a.js{js}


## References
[https://eloquentjavascript.net/02_program_structure.html](https://eloquentjavascript.net/02_program_structure.html)  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
