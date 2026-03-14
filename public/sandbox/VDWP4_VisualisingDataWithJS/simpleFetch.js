async function getText(file) {
  let myObject = await fetch(file);     // myObject is the response object of the fetch()
  let myText = await myObject.text();     // text() method of response object returns a promise that resolves to a string
  document.getElementById("demo").innerHTML = myText;
}

//setTimeout(function() {
    getText("https://temp.staticsave.com/69b491b0ec093.css");
//}, 8000);