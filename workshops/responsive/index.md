# Workshop: Responsive CSS and flexbox

All these exercises can be placed on the same HTML page. Or if you want you could have the gallery on a new page.

Whilst logged into GitHub with your Birkbeck email address, get the starter repository from the link in moodle.

## Flexbox alignment CSS

1. Create an empty HTML page and linked CSS stylesheet.

2. In the HTML page create a flexbox container with five items in it, each with a fixed pixel width (defined in the CSS stylesheet) similar to the example.

3. Play around with flex-direction changing it from row to column to see how this changes the layout, then settle on one.

4. In a comment above the block of code which is the CSS rule for the flexbox container, write which direction (row or column) is the main axis in your particular flexbox arrangement.

5. Choose how the flexbox items will display by changing the values of justify-content and/or align-items.

## Flex item CSS

1. On the same page create another flexbox container, this time with 15 fixed width items in it, and your choice of either flex-direction row or column.

2. Change the value of flex-wrap so that the items are not squashed together, but instead go onto another line.

3. Use flex-basis, flex-grow, and/or flex-shrink to change the width or height of items.

## Create a gallery using flexbox

There are some jellyfish drawing images in moodle that can be used for this. Or you can find your own set of images at [Pexels](https://www.pexels.com/).

1. Using flexbox create a gallery of images, setting the width of each image to be a particular % of the browser viewport's width.

2. Create a media query to change the layout when the width of the screen gets to below 600px.
