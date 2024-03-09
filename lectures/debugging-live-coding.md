# Live Coding: Timeouts, Debugging, and Packages

## Timing in JavaScript

There are a few functions in JavaScript which deal with timing the calling of functions:

```
// calls function after duration milliseconds from now
setTimeout(function, duration);

// calls function after every duration milliseconds
setInterval(function, duration);

// calls a callback function at a frequency matching the display refresh rate
requestAnimationFrame(callback);
```

These can be using in conjunction with CSS styles on document object model elements to create animations.

Here's an example using `setTimeout()`:

<<< @/public/sandbox/VDWP6_JSAnimation/setTimeoutEmojis.js{js}

Here's an example using `setInterval()` to create trails:

<<< @/public/sandbox/VDWP6_JSAnimation/setIntervalEmojis.js{js}

`requestAnimationFrame()` allows you to execute code on the next available screen repaint, syncing with the user’s browser and hardware to make changes to the screen:

<<< @/public/sandbox/VDWP6_JSAnimation/rain.js{js}

## Debugging with console.log

For all debugging, you need two things:

- :world_map: a map of the path taken through the program

- :flashlight: a torch to shine a light where JavaScript went astray

For the map, you can use your knowledge of the order in which the program
runs. If you’re not sure, start at the very beginning and work it out bit
by bit.

For the torch, you have several options:

- Error messages (syntax, runtime, logical) provided in the console when
  the program runs

- `console.log` statements placed at possible wrong turns

- The `debugger` statement and related tools in editors and browsers

Here’s a buggy program to practice on:

<<< @/public/sandbox/js-debugging/index.html#script{html}

<<< @/public/sandbox/js-debugging/index.html#form{html}

<<< @/public/sandbox/js-debugging/app.js{js}


## Installing an NPM package

[Example
repository](https://github.com/Birkbeck2/sandbox-npm-install){target="_blank"}

To add a package like [chalk](https://www.npmjs.com/package/chalk) to your
project, run this at the command line:

```bash
npm install chalk
```

This will automatically create or update the `package.json` file with the
appropriate line in the `dependencies` array:

```json
{
  "type": "module",
  "dependencies": {
    "chalk": "^5.3.0"
  }
}
```

::: tip
You may need to add `"type": "module",` manually.
:::

Then import the package according to its documentation in your JavaScript:

```js
import chalk from 'chalk'

console.log(chalk.green('Green!'))
```

## Telling Git to ignore source code from NPM packages

In your `.gitignore` file:

```
node_modules
```
