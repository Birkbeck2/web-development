// #region snippet
let cx = document.querySelector("canvas").getContext("2d");     // creates a context object on the <canvas> element
let geoDataObj;
let worldMap = document.createElement("img");
worldMap.src = "images/vector-world-map.jpg";
worldMap.style.zIndex = 0;


// fetch.then

fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
.then(geoData => {
  // json() method of fetch API request object
  return geoData.json();     // returns a promise that parses JSON data and resolves/returns it as JavaScript Object
})
.then(geoDataObj => {
  let geoArray = geoDataObj.features;
  cx.drawImage(worldMap, 0, 0, 1172, 760);
  cx.translate(552, 465);
  for (let i = 0; i < geoArray.length; i++){
    let magnitude = geoArray[i].properties.mag * 10;
    let x = geoArray[i].geometry.coordinates[0] * 3.26;   // longitude * 3.26 accounts for width of map image and 360 degrees of longitude shown across map width
    let y = -(geoArray[i].geometry.coordinates[1] * 4.22);   // latitude * 4.22 accounts for height of map image and 180 degrees of latitude shown across map height
    let location = geoArray[i].properties.place;
    //console.log(`${location}: latitude = ${x}, longitude = ${y}, magnitude = ${magnitude/10}.`);
    if(x < -552){
      x = x + 1172;   // x = x plus map img width
    }
    cx.beginPath();     // method of Canvas 2D API starts a new path
    cx.arc(x, y, magnitude, 0, 2 * Math.PI);     // arc(x, y, radius, startAngle, endAngle)
    cx.fillStyle = 'rgba(255,255,30,' + 0.5 + ')';
    cx.fill();
    cx.font = "12px Arial";
    cx.fillStyle = "white";
    cx.fillText(location, x+((i+1)*28), y+((i+1)*28));
    cx.beginPath();
    cx.moveTo(x+((i+1)*28), y+((i+1)*28));
    cx.lineTo(x, y);
    cx.strokeStyle = 'rgba(255,255,255,' + 0.5 + ')';
    cx.stroke();
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
  cx.translate(552, 465);
  for (let i = 0; i < geoArray.length; i++){
    let magnitude = geoArray[i].properties.mag * 10;
    let x = geoArray[i].geometry.coordinates[0] * 3.26;
    let y = geoArray[i].geometry.coordinates[1] * 4.22;
    let location = geoArray[i].properties.place;
    console.log(`${location}: latitude = ${x}, longitude = ${y}, magnitude = ${magnitude/10}.`);
    cx.beginPath();     // method of Canvas 2D API starts a new path
    cx.arc(x, y, magnitude, 0, 2 * Math.PI);     // arc(x, y, radius, startAngle, endAngle)
    cx.fillStyle = 'rgba(255,255,30,' + 0.5 + ')';
    cx.fill();
    cx.font = "12px Arial";
    cx.fillStyle = "white";
    cx.fillText(location, x+((i+1)*28), y+((i+1)*28));
    cx.beginPath();
    cx.moveTo(x+((i+1)*28), y+((i+1)*28));
    cx.lineTo(x, y);
    cx.strokeStyle = 'rgba(255,255,255,' + 0.5 + ')';
    cx.stroke();
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



