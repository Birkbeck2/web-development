let cx = document.querySelector("canvas").getContext("2d");
let patternImg = new Image();

getEmojis("https://api.github.com/emojis")
.then(emojiData => {
  patternImg.src=emojiData.smiling_face_with_three_hearts;
  patternImg.onload=function(){
    let pattern = cx.createPattern(patternImg,'repeat');
    cx.strokeStyle = pattern;
    cx.lineWidth = 64;
    cx.beginPath();     // starts a new path
    for (let y = 32; y < 545; y += 128) {
      cx.moveTo(0, y);     // starts a new sub path at the point specified
      cx.lineTo(768, y);     // 
    }
    cx.stroke();
  }
});

async function getEmojis(file) {
  let myObject = await fetch(file);
  let myJSobj = await myObject.json();
  return myJSobj;
}
