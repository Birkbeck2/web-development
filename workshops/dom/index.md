# Workshop on the Document Object Model

In this workshop, you will work with data from the Eurovision Song Contest to
create a webpage that displays information of your choosing.

## Steps

1. Create a repository using the link on Moodle.

2. Explore the data contained in `eurovisionContestants.js` to see what information you have to work with.

3. Write a JavaScript program in `app.js` that uses the data imported in
   `contestants` to populate the webpage `index.html`.

::: tip IDEAS
Your webpage can display any combination of information in any way you like. Think of a meaningful subset of info that’s interesting to display. Here are a few possibilities:
* display all the winning songs with their artists and countries and YouTube links
* display the songs and lyrics of the country with the most winners
* display all the songs that came in last place :skull:
* make a few short lists: first-place winners of the 2000s, second-place winners of the 2000s, etc.
:::

4. Feel free to modify the CSS file to style the page, but use JS to assign classes to HTML elements inside the dynamically generated part of the page.

::: info NOTE
Don’t copy-paste any of the Eurovision information into the HTML. Rather, use JS to dynamically generate HTML
and put it in the webpage.
:::

## Requirements checklist

For homework credit, here are the main things to try to get right:

- The JS program uses iteration
- The JS program accesses object properties
- The JS program successfully accesses the DOM
- The JS program successfully manipulates the DOM using values from the Eurovision data
- The dynamically generated HTML renders properly in the browser
- The dynamically generated HTML contains at least some attributes
- The dynamically generated HTML is valid and basically accessible
