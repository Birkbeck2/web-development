let cx = document.querySelector("canvas").getContext("2d");

setTimeout(function() {
  getEmojis("https://api.github.com/emojis")
  .then(emojiData => {
    for(let i=0; i<25; i++){
    let faceImg = new Image();
    faceImg.src = emojiData.smiling_face_with_three_hearts;
    faceImg.onload = function(){
      let locX = Math.round(Math.random() * (736 - 64) + 64);
      let locY = Math.round(Math.random() * (536 - 64) + 64);
      faceImg.style.left = locX;
      faceImg.style.top = locY;
      cx.drawImage(faceImg, locX, locY, 64, 64);
      }
    }
  })
}, 3000);

async function getEmojis(file) {
  let myObject = await fetch(file);
  let myJSobj = await myObject.json();
  return myJSobj;
}
