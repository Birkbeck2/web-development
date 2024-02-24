## Drawing shapes and text

![Drawing shapes and text](./images/shapes.jpg)

## Canvas

Canvas graphics are drawn onto the `<canvas>` element, which can be given a width and a height in pixels.

There are two types of drawing: "2d" for two-dimensional graphics and "webgl" for three-dimensional graphics through the OpenGL interface. We will just look at "2d" graphics.

You can create a context object using the getContext method on the `<canvas>` DOM element. This object has methods with which you can draw on the `<canvas>`.

The coordinate system that canvas uses puts (0, 0) at the top-left corner with the positive y-axis going down from there, and the x-axis going up to the right.

A shape can be filled (its area is a certain colour) or stroked (a line is drawn on its edge).

Example:

<<< @/public/sandbox/VDWP4_VisualisingDataWithJS/CanvasEmojisPaths.js{js}

Example:

<<< @/public/sandbox/VDWP4_VisualisingDataWithJS/CanvasRectUSpopulationSince1960.js{js}

Example:

<<< @/public/sandbox/VDWP4_VisualisingDataWithJS/setIntervalExample.js{js}



A reference list (incomplete) of canvas methods and properties can be found here: [https://www.w3schools.com/tags/ref_canvas.asp](https://www.w3schools.com/tags/ref_canvas.asp).

Mozilla's guide to canvas in the 2D context: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D).
                             


## References
[https://eloquentjavascript.net/17_canvas.html](https://eloquentjavascript.net/17_canvas.html)  
[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)  
[https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)  
[https://www.w3schools.com/tags/ref_canvas.asp](https://www.w3schools.com/tags/ref_canvas.asp)  