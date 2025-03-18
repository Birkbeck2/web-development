let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");
let api_key = '7754680569dded2d1928d0fd15a1d920'; // This string should be replaced with your own API key
let skillBars = [];
let chartBottomY = 600;
let chartBarWidth = 5;
let chartBarPadding = 2;
let percent = 0;

fetch(`https://api.currencylayer.com/live?access_key=${api_key}`)
.then(response => response.json())
.then(data => {
    for(let countryRate in data.quotes){
        let rate = data.quotes[countryRate];
        skillBars.push(rate);
    }
    animate();
})
.catch(error => {
    console.log('Error:', error);
});

function animate() {
    // if not 100% done, request another frame
    if (percent++ < 100) {
        requestAnimationFrame(animate);
    }

    // Drawing code goes here
    cx.clearRect(0, 0, canvas.width, canvas.height);
    let x = chartBarPadding;
    for (let i = 0; i < skillBars.length; i++) {
        let height = skillBars[i] * percent / 100;
        cx.fillStyle = "red";
        cx.fillRect(x, chartBottomY, chartBarWidth, -height);
        x += chartBarWidth + chartBarPadding;
    }
}