![Birkbeck, University of London](images/birkbeck-logo.jpg)

Web Development and User Experience | Coding Sessions | Joseph Muller

[Previous](javascript-values-and-data-types.md) | [All](README.md)

# JavaScript evaluation with operators

Operators are the most basic ways that we can begin to do something with values and data types.

They let us combine values into expressions that can be evaluated to new values.

In doing so, operators demonstrate how data types are used in JavaScript, showing why they matter.

## Combining and adding

Say you're programming a calculator. The user enters an equation.

```javascript
2 + 2
```

The output should be `4`.

On the other hand, let's say you're programming a messaging app. The user types 2, and then another 2.

```javascript
"2" + "2"
```

The output should be `22`.

The plus sign (`+`) is an *operator* that combines strings together or finds the sum of numbers, depending on the data types.

When the values are strings, the operation is *concatenation*:

```javascript
"My name is " + "Joe" + ". What is your name?"
'WC1E ' + '7HX'
```

When they are numbers, the operation is summation:

```javascript
1203910516 + 150151956
-294 + 24
23913 + 42 + 95
```

If you use `+` with a string and a number, JavaScript will first turn the number into a string and then combine them (concatenation):

```javascript
"She's turning " + 72
```

This evaluates to `She's turning 72`.

### Check your understanding

What's the evaluated value of each of these expressions?

1. `'word ' + 'cloud'`
2. `'word ' + '2'`
3. `'word ' + 2`
4. `'4' + 2`
5. `4 + 2`

<!--
1. `word cloud`
2. `word 2`
3. `word 2`
4. `42`
5. `6`
-->

## Comparing strings or numbers

To check if two things are the same, you can use the double equals sign operator (`==`):

```javascript
'orange' == 'purple'
```

The result of this operator is always a boolean value, `true` or `false`. In the above case, it's `false`.

JavaScript doesn't know what 'orange' and 'purple' mean, but it knows they are not spelled the same way, so it believes they are not the same.

Here's one more example that evaluates to `false`:

```javascript
'London' == 'the UK capital'
```

This one is `true`:

```javascript
'hope' == 'hope'
```

Here's one with numbers:

```javascript
1900 == 1899
```

To check that things are *not* the same, you can put an exclamation point in front of an equals sign (`!=`):

```javascript
'orange' != 'purple'
```

The above code evaluates to `true` because they are not the same word.

You can also use `<` and `>` to compare numeric values:

```javascript
1900 > 1899
1 > 4
```

### Check your understanding

Do these evaluate to `true` or `false`?

1. `"sky" == "blue"`
2. `"sky" == "sky"`
3. `"sky" != "sky"`
4. `"sky" != 'sky'`
5. `19 > 1`
6. `6000 < 6000`

## Arithmetic operators

JavaScript has operators for mathematics: `+`, `-`, `/`, `*`.

```javascript
1 + 5 - 2
100 / 5
2 * 6 / 3 + 1
```

Like in math, you can use parentheses to control the order of operations:

```javascript
2 * 6 / (3 + 1)
```

If you're not fond of math, don't worry--these are only used in simple ways in most web applications.

### Check your understanding

What's the result?

1. `3 * 3`
2. `6 / 2`
3. `10 - 5`

## References
Marijn Haverbeke, *Eloquent JavaScript: A Modern Introduction to Programming*, third edition, 2018, [https://eloquentjavascript.net/](https://eloquentjavascript.net/).

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
