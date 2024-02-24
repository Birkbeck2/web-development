//setTimeout(function() {
    getText("https://temp.staticsave.com/65d8d1d3d272f.txt");
//}, 8000);

async function getText(file) {
  let myObject = await fetch(file);     // myObject is the response object of the fetch()
  let myText = await myObject.text();     // text() method of response object returns a promise that resolves to a string
  document.getElementById("demo").innerHTML = myText;
}