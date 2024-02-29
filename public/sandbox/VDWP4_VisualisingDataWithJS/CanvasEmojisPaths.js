let cx = document.querySelector("canvas").getContext("2d");
let patternImg = new Image();

// fetch.then

fetch("https://api.github.com/emojis")
.then(data => {
  return data.json();
})
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

// async await fetch
/*
async function drawEmojis(file) {
  let myObject = await fetch(file);
  let myJSobj = await myObject.json();
  await drawEmojiLines(myJSobj);
}

async function drawEmojiLines(myJSobj){
  patternImg.src=myJSobj.smiling_face_with_three_hearts;
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
}

drawEmojis("https://api.github.com/emojis");
*/