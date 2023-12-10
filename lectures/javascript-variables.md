# JavaScript variables

Variables give names to values. Collectively, they form the **memory** of the
program.

When combined with operators, variables allow you to chain together
transformations of data over multiple lines.

Another word for a variable is a “binding”, because you are tying together
a name and a value.

## Setting variables

Here are some examples of variable declaration and assignment.

<<< @/public/sandbox/js-variables/variable-script.js#setting{js}

As shown here, one way to declare variables is with the JavaScript keyword `let`.
You always need such a word in JavaScript when establishing a variable name for
the first time.

::: details What is a keyword?
Every programming language has reserved words, which you cannot use for your
own variables, because they are used for the grammar of the language itself.
The ‘let’ keyword is reserved for variable declaration.
:::

After `let` comes the name of your variable. You can choose almost anything,
but here are the rules and conventions:

1. Variable identifiers (names) can contain a wide variety of symbols defined in the
   international character encooding standard
   [Unicode](https://home.unicode.org/). They cannot begin with numbers but
   they can contain them. They can also contain underscore (`_`) and the dollar sign
   (`$`).

2. Do not use reserved keywords as variable names. You can find a [list of
   JavaScript keywords on
   MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).

3. Capitalize your variables with “camel case” :camel:: a lower case first
   letter, and then a capital first letter for following words, with no space
   in between words, like `thisVariableWithHumpsInTheMiddle`. This is not
   a formal rule but a convention, making your code easier to read.

Finally, you use a single equals sign to assign a value to your new variable.
Leave a space around the equals for readability.

## Using variables

JavaScript code runs line by line, from top to bottom, unless directed
otherwise.

So once you have assigned a variable, you can refer to it in the same script or
scope on any line that comes after.

<<< @/public/sandbox/js-variables/variable-script.js#setting{js}
<<< @/public/sandbox/js-variables/variable-script.js#using{js}

## Changing variables

When changing variables, you repeat most of the assignment expression. But you leave off the
the declaration keyword (in this case `let`).

<<< @/public/sandbox/js-variables/variable-script.js#setting{js}
<<< @/public/sandbox/js-variables/variable-script.js#changing{js}

## Variables that do not vary

Sometimes it is helpful to set variables that remain constant throughout the
program.

<<< @/public/sandbox/js-variables/variable-script.js#constants{js}

The choice to use `let` or `const` depends on the situation, and on the
preference or style of the developer. Some developers choose `const` by default
and only use `let` if a variable needs to be ... variable. This is a safe way
to code because it prevents accidental re-assignment.

## The old bad way

In early JavaScript, variables were declared with the `var` keyword.

<<< @/public/sandbox/js-variables/variable-script.js#var{js}

Binding with `var` resulted in messy programs because the declaration is too
powerful. Names declared with `var` extend beyond the local scope, potentially
interfering with the same names in other programs running in the same webpage.
They also move to the top of the proram’s run sequence (called hoisting), which
makes it easy to miss bugs caused by using a variable before it is assigned.

Because of these usability issues, we recommend not using the `var` keyword at
all, but you should know about it because you will see it in old programs.

## Statements and semicolons

With variables, you are now writing some of your first full JavaScript
**statements**.

A statement is one step in the sequential run of the program. Statements are executed
one after another, collectively building the logic of the program.

Each line here is one statement.

<<< @/public/sandbox/js-variables/variable-script.js#statements{js}

Formally, JavaScript requires semicolons between statements. So you will often
see things written like this:

<<< @/public/sandbox/js-variables/variable-script.js#semicolons{js}

But if you leave semicolons out, and you are writing modern, readable JavaScript
(without patterns like IIFEs or unbound arrays), the parser is generally
smart enough to use line breaks as the division between statements, and to
add semicolons automatically for you before your program runs. There are a few
exceptions, but you are unlikely to encounter them very often.

As a result, some programmers leave semicolons out so they don’t have to think
about them, and to make their code easier to read.

In this module you can write without them or with them. Find your style and
stick with it!

## Check your understanding

1. How can we calculate the money left over?

    <<< @/public/sandbox/js-variables/variable-script.js#check1{js}

2. What is wrong with this program?

    <<< @/public/sandbox/js-variables/variable-script.js#check2{js}

3. What will be logged?

    <<< @/public/sandbox/js-variables/variable-script.js#check3{js}

    ::: tip Stuck?
    Try putting `console.log()` statements in to check the values of variables.
    :::
