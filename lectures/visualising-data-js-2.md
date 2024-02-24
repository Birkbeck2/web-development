## APIs and fetching data

![APIs and fetching data](./images/fetch.jpg)

*[Image](https://pixsector.com/photos/dog-carrying-stick-photo/514) by Mental Cinephile*

## APIs in client-side JavaScript

APIs stands for Application Programming Interfaces.

They are constructs made to make complex functionality simpler. They abstract complex code away from you, providing easier syntax to use instead.

Common APIs include:
-	The DOM (Document Object Model) API for manipulating HTML and CSS.
-	The Fetch API which fetches data from servers.
-	The Canvas API for updating pixel data contained in the `<canvas>` element.
-	Twitter API to display your latest tweets.
-	YouTube API to embed videos on your site.

## Fetch API
  
The Fetch API allows JavaScript to make an HTTP request to a server to retrieve specific resources. JavaScript can use the data (often JSON, but can be HTML or text) to update the page (using the DOM API) without reloading it.

This is common for data driven websites such as Amazon, YouTube, and eBay. With this model:
-	Page updates are faster, as you don't have to wait for the page to refresh.
-	Less data is downloaded on each update, meaning less wasted bandwidth. This makes it simpler for mobile downloads in countries that don't have much access to fast internet speeds.

The response interface of the Fetch API represents the response to a data request. The response object is often returned as a result of an API method call, such as `fetch()`.

Fetch API is commonly used to request data from text files to populate a content area:

Example:

<<< @/public/sandbox/VDWP4_VisualisingDataWithJS/simpleFetch.js{js}

Async indicates that it is an asynchronous function. Asynchronous means that the code can start now and finish its execution later. Calling an async function will always return a Promise. A promise is something that will take time to do. Await stalls JavaScript from assigning fetch to the response variable until the promise has been resolved. Then the results from the fetch method can be assigned to the response variable.

For more on async functions see: https://www.freecodecamp.org/news/asynchronous-javascript-explained/

## Using Fetch API in JavaScript

An endpoint is a unique url you call to interact with another system.

When making a request to an external API to get some data (a GET request) simply call `fetch()` with the endpoint url as the argument:

Example:

<<< @/public/sandbox/VDWP4_VisualisingDataWithJS/earthquakeData.js#snippet{js}

The response object (returned data) body for this endpoint will be information (in JSON format) on all earthquakes that have happened in the past hour.

The data returned from the API is not usually useable. You need to convert the data to a form which JavaScript can operate with. To do this use the response object’s json() method to convert the JSON into a JavaScript object:

Example:

<<< @/public/sandbox/VDWP4_VisualisingDataWithJS/earthquakeData.js{js}

The `then()` method is used to parse the data after it has been fetched. Once it has been converted to a JavaScript object using the `json()` method, the `then()` method is used again to post the metadata.title value from the JSON to the console, along with an added string.

Example:

<<< @/public/sandbox/VDWP4_VisualisingDataWithJS/earthquakeMag.js#snippet{js}

## XMLHttpRequest object

AJAX is Asynchronous JavaScript And XML. It is not a programming language. It just uses a combination of:

-	Browser-based XMLHttpRequest object (to request data from a web server).
-	JavaScript and HTML DOM (to display or use the data).

Using the XMLHttpRequest object to request data from a server is an older method than using the Fetch API, but one to be aware of.

The XMLHttpRequest object is used to request data from a server. In the following code `onload()` is an event which fires when the XMLHttpRequest transaction completes successfully, and responseText is a property of the XMLHttpRequest object.

The `open()` line is a GET request to the server at the url in the second parameter. The `send()` method prints the response text to the HTML page within the paragraph with id=”demo”.

Example:

<<< @/public/sandbox/VDWP4_VisualisingDataWithJS/XMLHttpRequest.js



## References
[https://eloquentjavascript.net/11_async.html](https://eloquentjavascript.net/11_async.html)  
[https://eloquentjavascript.net/18_http.html](https://eloquentjavascript.net/18_http.html)  
[https://developer.mozilla.org/en-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API)  
[https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  
[https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/](https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/)  
[https://www.freecodecamp.org/news/asynchronous-javascript-explained/](https://www.freecodecamp.org/news/asynchronous-javascript-explained/)  
[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)  
[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)  
[https://www.w3schools.com/js/js_api_fetch.asp](https://www.w3schools.com/js/js_api_fetch.asp)  
[https://developer.mozilla.org/en-US/docs/Web/API/Response/json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)  
[https://developer.mozilla.org/en-US/docs/Web/API/Response/text](https://developer.mozilla.org/en-US/docs/Web/API/Response/text)  
[https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)  
[https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText)  
[https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event)  
[https://livecodestream.dev/post/5-ways-to-make-http-requests-in-javascript/#xmlhttprequest](https://livecodestream.dev/post/5-ways-to-make-http-requests-in-javascript/#xmlhttprequest)  
[https://www.w3schools.com/Js/js_ajax_http_send.asp](https://www.w3schools.com/Js/js_ajax_http_send.asp)  