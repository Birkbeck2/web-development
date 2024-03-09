let cx = document.querySelector("canvas").getContext("2d");
let locs = [];


getEmojis("https://api.github.com/emojis")
.then(emojiData => {
  for(let i=0; i<25; i++){
    let locX = Math.round(Math.random() * (736 - 64) + 64);
    let locY = Math.round(Math.random() * (536 - 64) + 64);
    locs.push([locX, locY]);
  }
  for(let i=0; i<25; i++){
    let newFace = new Emoji(locs[i][0], locs[i][1], emojiData.smiling_face_with_three_hearts);
    newFace.faceImg.onload = function(){
      setInterval(function() {
        newFace.update();
        newFace.display();
        cx.drawImage(newFace.faceImg, newFace.locX, newFace.locY, 64, 64);
      }, 120);
    }

  }
});

async function getEmojis(file) {
  let myObject = await fetch(file);
  let myJSobj = await myObject.json();
  return myJSobj;
}

class Emoji{
  constructor(locX, locY, source){
    this.faceImg = new Image();
    this.faceImg.src = source;
    this.locX = locX;
    this.locY = locY;
    this.stepX = Math.random() * 5;
    this.stepY = Math.random() * 5;
  }
  update(){
    this.locX += this.stepX;
    if(this.locX>736){
      this.locX = 64;
    }
    this.locY += this.stepY;
    if(this.locY>536){
      this.locY = 64;
    }
  }
  display(){
    this.faceImg.style.left = this.locX;
    this.faceImg.style.top = this.locY;
  }
}
