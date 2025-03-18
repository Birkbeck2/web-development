let raindrops = [];
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;
let cx = canvas.getContext("2d");
let stopAnim;

class rainDroplet {
    constructor() {
        this.initX = Math.random() * canvas.width;
        this.initY = Math.random() * canvas.height;
        this.speed = Math.random() * 8;
        //this.colour = `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
    }

    drawRose(){
        cx.moveTo(this.initX, this.initY);
        cx.beginPath();
        for (let i = 0; i < (Math.PI * 2); i += 0.1) {
            let r = 20 * Math.abs(Math.cos(4 * i));
            let x = (r * Math.cos(i)) + this.initX;
            let y = (r * Math.sin(i)) + this.initY;
            cx.lineTo(x, y/*, x1, y1*/);
            cx.stroke();
            cx.strokeStyle = "pink";
            //cx.strokeStyle = this.colour;
        }
    }

    moveRose(){
        this.initY += this.speed;
        if(this.initY > canvas.height + 20){
            this.initY = -this.initY;
        }
    }
    
}

function initialise(){
    for(let i=0; i<100; i++){
        let raindrop = new rainDroplet();
        raindrops.push(raindrop);
    }
}

function draw(){
    for(let i = 0; i < raindrops.length; i++){
        raindrops[i].drawRose();
    }
}

function update(){
    for(let i = 0; i < raindrops.length; i++){
        cx.clearRect(0, 0, canvas.width, canvas.height);
        raindrops[i].moveRose();
        //console.log(raindrops[i].initY + " and " + raindrops[i].initX);
    }
    draw();
    window.requestAnimationFrame(update);
}

initialise();
update();
