let cx = document.querySelector("canvas").getContext("2d");
let worldMap = document.createElement("img");
worldMap.src = "images/worldMap.jpg";
worldMap.style.zIndex = 0;
let iSS = document.createElement("img");
iSS.src = "images/iss.png";
iSS.style.zIndex = 10;


setInterval(function () {
  fetch('http://api.open-notify.org/iss-now.json')
  .then(issData => {
    return issData.json();
  })
  .then(issDataObj => {
    let longitudeX =  issDataObj.iss_position.longitude * 3.5;
    let latitudeY =  -(issDataObj.iss_position.latitude * 4.354);
    //console.log("long = " + longitudeX + " lat = " + latitudeY);
    cx.drawImage(worldMap, 0, 0, 1260, 790);
    cx.translate(924, 494);
    cx.drawImage(iSS, longitudeX - 50, latitudeY - 34, 100, 68);
    cx.resetTransform();
  })
}, 120);
