let USpopulation = [];
let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");

fetch('http://api.worldbank.org/v2/countries/USA/indicators/SP.POP.TOTL?per_page=5000&format=json')
.then(data => {
  return data.json();
})
.then(jsonArr => {
    let myArray = jsonArr[1];
    for(let i=1960; i<2021; i++){
      USpopulation.push(myArray[i-1960]);
    }
    return USpopulation;
})
.then(drawRects => {
    for(let i=1960; i<2021; i++){
      let num = i-1960;
      let height = Math.round((USpopulation[num].value)/1000000);
      cx.fillStyle = "red";
      let x = 620-((num*10)+10);
      let y = (350-height)+10;
      let width = 5;
      cx.fillRect(x, y, width, height);
    }
});
