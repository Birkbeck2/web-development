![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | Helena Wee

[Previous](JSON-data-and-storage.md) | [All](README.md) | [Next](Drawing-shapes-text-and-transformations.md)

## APIs and fetching data

![APIs and fetching data](images/fetch.jpg)

## APIs in client-side JavaScript

APIs stands for Application Programming Interfaces.

They are constructs made to make complex functionality simpler. They abstract complex code away from you, providing easier syntax to use instead.

Common browser APIs include:
-	The DOM (Document Object Model) API for manipulating HTML and CSS.
-	The Fetch API which fetches data from servers.
-	The Canvas API for updating pixel data contained in the <canvas> element.
-	The Web Storage API to store data (such as JSON) on the client’s computer.
  
Common third-party APIs include:
-	Twitter API to display your latest tweets.
-	YouTube API to embed videos on your site.
-	Pinterest API to manage Pinterest boards and pins.
-	The Mastodon API for Mastodon posts.
  
Different JavaScript APIs work in slightly different ways, but they have some common features such as:
-	Object containers for the data the API uses.
-	Recognisable entry points, such as specific context objects to manipulate child objects.
-	Use events to handle changes in state.
-	Additional security mechanisms where appropriate.

## Fetch API
  
Many websites use JavaScript APIs to request data from a server and update the page content without reloading a page. This is more efficient when only a small part of a page needs to be updated, such as in data-driven websites (e.g. library sites).

The main API here is the Fetch API which allows JavaScript to make an HTTP request to a server to retrieve specific resources. JavaScript can use the data (often JSON, but can be HTML or text) to update the page using the DOM API.

This is common for data driven websites such as Amazon, YouTube, and eBay. With this model:
-	Page updates are faster, as you don't have to wait for the page to refresh.
-	Less data is downloaded on each update, meaning less wasted bandwidth. This makes it simpler for mobile downloads in countries that don't have much access to fast internet speeds.
To speed things up further some sites store assets and data on the user's computer when first requested, meaning subsequent visits use local versions. Content is only reloaded from server when it has been updated.

The response interface of the Fetch API represents the response to a data request. The response object is often returned as a result of an API method call, such as `fetch()`.

Fetch API is commonly used to request data from text files to populate a content area:

```
<!DOCTYPE html>
<html>
<body>
<p id="demo">Fetch a file to change this text.</p>

<script>
getText("fetch_info.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("demo").innerHTML = myText;
}
</script>

</body>
</html>
```

Async indicates that it is an asynchronous function. Asynchronous means that the code can start now and finish its execution later. Calling an async function will always return a Promise. A promise is something that will take time to do. Await stalls JavaScript from assigning fetch to the response variable until the promise has been resolved. Then the results from the fetch method can be assigned to the response variable.

In the above example, the async function calls an external API without halting the execution of other instructions. Other functions on the site continue to run even when the API call has not been resolved. Instructions are not necessarily executed one after the other as is normally the case.

Here `fetch()` returns a response object (the data) and `text()` acts on the response object returning a promise that resolves to a string.

For more on async functions see: https://www.freecodecamp.org/news/asynchronous-javascript-explained/

## Using Fetch API in JavaScript

An endpoint is a unique url you call to interact with another system.

When making a request to an external API to get some data (a GET request) simply call `fetch()` with the endpoint url as the argument:

```
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
```

The response object (returned data) body for this endpoint will be information (in JSON format) on all earthquakes that have happened in the past hour.

The response body contains a lot of information.

The data returned from the API is not usually useable. You need to convert the data to a form which JavaScript can operate with. To do this use the response object’s `json()` method to convert the JSON into a JavaScript object:

```
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.metadata.title + " - data fetched!");
});
```

Above nesting a subsequent `then()` method is used to parse the data after it has been fetched. Once it has been converted to a JavaScript object using the `json()` method, the `then()` method is used again to post the metadata.title value from the JSON to the console, along with an added string.

To make a POST request to send data to a server you can also use fetch. But for this you will need to pass an object of configuration options as a second argument. This is something you are unlikely to use in your assignment, but more about this can be found here: https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/

## XMLHttpRequest object

AJAX is Asynchronous JavaScript And XML. It is not a programming language. It just uses a combination of:

-	Browser-based XMLHttpRequest object (to request data from a web server).
-	JavaScript and HTML DOM (to display or use the data).

Using the XMLHttpRequest object to request data from a server is an older method than using the Fetch API, but one to be aware of.

The XMLHttpRequest object is used to request data from a server. In the following code `onload()` is an event which fires when the XMLHttpRequest transaction completes successfully, and responseText is a property of the XMLHttpRequest object.

The `open()` line is a GET request to the server at the url in the second parameter. The `send()` method prints the response text to the HTML page within the paragraph with id=”demo”.

```
<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="loadDoc()">Request data</button>
<p id="demo"></p>

<script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson");
  xhttp.send();
}
</script>

</body>
</html>
```
  
  

## References
https://eloquentjavascript.net/11_async.html  
https://eloquentjavascript.net/18_http.html  
https://developer.mozilla.org/en-US/docs/Web/API  
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch  
https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/  
https://www.freecodecamp.org/news/asynchronous-javascript-explained/  
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction  
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data  
https://www.w3schools.com/js/js_api_fetch.asp  
https://developer.mozilla.org/en-US/docs/Web/API/Response/json  
https://developer.mozilla.org/en-US/docs/Web/API/Response/text  
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest  
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText  
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event  
https://livecodestream.dev/post/5-ways-to-make-http-requests-in-javascript/#xmlhttprequest  
https://www.w3schools.com/Js/js_ajax_http_send.asp  

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

