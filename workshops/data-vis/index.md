# Workshop: Visualising Data

Get a GitHub repository for this workshop in moodle. Homework will be to finish this workshop and publish your code to GitHub Pages, within 5 days.  

## Drawing with open JSON data from the web

Create an HTML file and a linked JavaScript file.  

Use the fetch API to get some open data from the web.  
Examples of APIs you could use include:  
[Emojis API](https://api.github.com/emojis)  
[Rick and Morty API](https://rickandmortyapi.com/)  
[Pokemon API](https://pokeapi.co/)  
Or look at some open data sources on this page:  
[Awesome JSON datasets](https://github.com/jdorfman/awesome-json-datasets).  
Some of the links here might not work, but many will.  

Use [JSON Beautify](https://jsonbeautify.com/) to look at the JSON and format/beautify it.  

If your JSON data links images use context.drawImage() to place some of the images on a canvas. (Hint: you need to use `Image()` [the Image Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image), and then specify its src and what happens onload of the image).  

Or if you have chosen an API which has text or numerical data, draw a representation of one (or more) aspect(s) of this data on the canvas element.  

Incorporate the JSON data into a creative JavaScript program using canvas commands.

If you have time, add interactivity to your program through an event which manipulates what is drawn to the canvas in some way.  
