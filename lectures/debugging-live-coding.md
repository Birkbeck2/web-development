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


## Installing an NPM package

[Example repository](/sandbox/js-dom/index.html){target="_blank"}

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
