// #region snippet
let cx = document.querySelector("canvas").getContext("2d");     // creates a context object on the <canvas> element
let geoDataObj;


// fetch.then

fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
.then(geoData => {
  // json() method of fetch API request object
  return geoData.json();     // returns a promise that parses JSON data and resolves/returns it as JavaScript Object
})
.then(geoDataObj => {
  let geoArray = geoDataObj.features;
  for (let i = 0; i < geoArray.length; i++){
    let magnitude = geoArray[i].properties.mag * 10;
    console.log(magnitude);
    let x = geoArray[i].geometry.coordinates[0];
    console.log(x);
    let y = geoArray[i].geometry.coordinates[1];
    console.log(y);
    let location = geoArray[i].properties.place;
    //cx.resetTransform();
    cx.translate(180, 90);
    cx.beginPath();     // method of Canvas 2D API starts a new path
    cx.arc(x, y, magnitude, 0, 2 * Math.PI);     // arc(x, y, radius, startAngle, endAngle)
    cx.strokeStyle = "red";
    cx.stroke();
    cx.font = "14px Arial";
    cx.fillStyle = "blue";
    cx.fillText(location, x, y+8);
  }
});

// #endregion snippet

// async await fetch
/*
async function fetchGeoData() {
  const geoDataResponse = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
  geoDataObj = await geoDataResponse.json();
  console.log("This is the geoDataObj" + geoDataObj);
  parseGeoDataObj(geoDataObj);
}

function parseGeoDataObj(responseJSONObj){
  let geoArray = responseJSONObj.features;
  //console.log(geoArray);
  for (let i = 0; i < geoArray.length; i++){
    let location = geoArray[i].properties.place;
    console.log("Location = " + location);
    let magnitude = geoArray[i].properties.mag * 10;
    console.log("Magnitude = " + magnitude);
    let x = geoArray[i].geometry.coordinates[0];
    console.log("Longitude = " + x);
    let y = geoArray[i].geometry.coordinates[1];
    console.log("Latitude = " + y);
    cx.translate(180, 90);
    cx.beginPath();     // method of Canvas 2D API starts a new path
    cx.arc(x, y, magnitude, 0, 2 * Math.PI);     // arc(x, y, radius, startAngle, endAngle)
    cx.strokeStyle = "red";
    cx.stroke();
    cx.font = "14px Arial";
    cx.fillStyle = "blue";
    cx.fillText(location, x, y+8);
  }
}

fetchGeoData();
*/




/*
// source: https://stackoverflow.com/questions/14329691/convert-latitude-longitude-point-to-a-pixels-x-y-on-mercator-projection

latitude    = 41.145556; // (φ)
longitude   = -73.995;   // (λ)

mapWidth    = 200;
mapHeight   = 100;

// get x value
x = (longitude+180)*(mapWidth/360)

// convert from degrees to radians
latRad = latitude*PI/180;

// get y value
mercN = ln(tan((PI/4)+(latRad/2)));
y     = (mapHeight/2)-(mapWidth*mercN/(2*PI));

// above code in JavaScript below

// let mapWidth;
// let mapHeight;

function mercatorLongitude(longitude, mW){
  x = (longitude + 180)*(mW/360);
  return x;
}

function degToRad(latitude){
  latRad = latitude*Math.PI/180;
  return latRad;
}

function mercatorLatitude(latRad, mH){
  mercN = Math.ln(Math.tan(Math.PI/4)+(latRad/2));
  y = (mH/2) - (mH/360);
  return y;
}

*/



