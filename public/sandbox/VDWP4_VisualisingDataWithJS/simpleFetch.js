//setTimeout(function() {
    getText("https://temp.staticsave.com/67d53f98ba08b.txt");
//}, 8000);
/*
setTimeout(getTxt(), 8000);

function getTxt(){
  getText("https://temp.staticsave.com/65d8d1d3d272f.txt");
}
*/
async function getText(file) {
  let myObject = await fetch(file);     // myObject is the response object of the fetch()
  let myText = await myObject.text();     // text() method of response object returns a promise that resolves to a string
  document.getElementById("demo").innerHTML = myText;
}