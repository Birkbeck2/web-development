// #region snippet
let cx = document.querySelector("canvas").getContext("2d");
let worldMap = document.createElement("img");
worldMap.src = "images/worldMap1.jpg";
worldMap.style.zIndex = 0;
let iSS = document.createElement("img");
iSS.src = "images/iss.png";
iSS.style.zIndex = 10;

// fetch.then

setInterval(function () {
  fetch('http://api.open-notify.org/iss-now.json')
  .then(issData => {
    return issData.json();
  })
  .then(issDataObj => {
    let longitudeX =  issDataObj.iss_position.longitude * 3.3;  // longitude * 3.3 accounts for width of map image and 360 degrees of longitude shown across map width
    let latitudeY =  -(issDataObj.iss_position.latitude * 5.08);   // latitude * 5.08 accounts for height of map image and 150 degrees of latitude shown across map height
    console.log("long = " + longitudeX + " lat = " + latitudeY);
    cx.drawImage(worldMap, 0, 0, 1190, 762);   // last two numbers represent pixel width and height of map image
    //cx.drawImage(worldMap, 0, 0, canvas.width, canvas.height);
    cx.translate(893, 477);   // translates origin to longitude = 0, latitude = 0 on map
    // if longitude is over 297, conditional brings satellite img longitude back to left hand side of map to continue its journey
    if(longitudeX > 297){
      longitudeX =  -(893 - (longitudeX - 297));
    }
    cx.drawImage(iSS, longitudeX - 50, latitudeY - 34, 100, 68);
    cx.resetTransform();
  })
}, 120);
// #endregion snippet

// async await fetch
/*
async function whereIsISS(){
  let issData = await fetch('http://api.open-notify.org/iss-now.json');
  let issDataObj = await issData.json();
  drawISSPos(issDataObj);
}

async function drawISSPos(issJSObj){
  let longitudeX =  issJSObj.iss_position.longitude * 3.3;
  let latitudeY =  -(issJSObj.iss_position.latitude * 5.08);
  //console.log("long = " + longitudeX + " lat = " + latitudeY);
  cx.drawImage(worldMap, 0, 0, 1260, 790);
  cx.translate(893, 477);
  if(longitudeX > 297){
    longitudeX =  -(893 - (longitudeX - 297));
  }
  cx.drawImage(iSS, longitudeX - 50, latitudeY - 34, 100, 68);
  cx.resetTransform();
}

whereIsISS();
*/