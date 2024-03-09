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




