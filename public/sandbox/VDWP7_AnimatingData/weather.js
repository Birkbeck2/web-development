let raindrops = [];
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth-16;
canvas.height = window.innerHeight-316;
let cx = canvas.getContext("2d");
let weatherImg = '';
const apiKey = '774948ac98942fe696c2d00b5e4e5d85';  // This string should be replaced with your own API key

class rainDroplet {
  constructor(imgSrc) {
      this.initX = Math.random() * canvas.width;
      this.initY = Math.random() * canvas.height;
      this.speed = Math.random() * 3;
      this.weatherIcon = new Image();
      this.weatherIcon.src = imgSrc;
      //this.colour = `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
  }

  drawDroplet(){ 
      this.weatherIcon.style.left = this.initX;
      this.weatherIcon.style.top = this.initY;
  }

  moveDroplet(){
      this.initY += this.speed;
      if(this.initY > canvas.height + 20){
          this.initY = -this.initY;
      }
  }
  
}

function initialise(){
  for(let i=0; i<100; i++){
      let raindrop = new rainDroplet(weatherImg);
      raindrops.push(raindrop);
  }
}

function draw(){
  for(let i = 0; i < raindrops.length; i++){
      raindrops[i].drawDroplet();
      cx.drawImage(raindrops[i].weatherIcon, raindrops[i].initX, raindrops[i].initY, 64, 64);
  }
}

function update(){
  for(let i = 0; i < raindrops.length; i++){
      cx.clearRect(0, 0, canvas.width, canvas.height);
      raindrops[i].moveDroplet();
  }
  draw();
  window.requestAnimationFrame(update);
}

document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const locationInput = document.getElementById('locationInput').value;
  const weatherData = document.getElementById('weatherData');
  // Clear canvas and raindrop array
  cx.clearRect(0, 0, canvas.width, canvas.height);
  raindrops = [];
  // Clear previous weather data
  weatherData.innerHTML = '';

  // Make a request to Openweathermap's Weather API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        let icon = data.weather[0].icon;
        weatherImg = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        // Use the weather icon as rain droplets
        initialise();
        for(let i = 0; i < raindrops.length; i++){
          raindrops[i].weatherIcon.onload = function(){
            cx.drawImage(raindrops[i].weatherIcon, raindrops[i].initX, raindrops[i].initY, 64, 64);
          }
        }
        update();
        // Process the weather data
        const weatherHTML = `
        <p>Temperature: ${temperature}&#xb0;C</p>
        <p>Weather: ${description}</p>`;
        weatherData.innerHTML = weatherHTML;

    })
    .catch(error => {
        console.log('Error:', error);
    });
});

    






