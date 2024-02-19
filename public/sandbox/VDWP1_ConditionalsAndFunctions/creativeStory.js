let numGoldfish = 5;
let numCarp = 3;
let totalFish = 0;
let sleepy = true;

/*let randomNumber = Math.floor(Math.random() * 2);
if(randomNumber == 0){
    sleepy = false;
} else {
    sleepy = true;
}*/

function fishTales(){
    console.log("I have " + numGoldfish + " goldfish.");
    console.log("I have " + numCarp + " carp.");
    totalFish = numGoldfish + numCarp;
    console.log("In total I have " + totalFish + " fish.");
    let randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber == 0){
        sleepy = false;
    } else {
        sleepy = true;
    }
    if(sleepy == true){
        let sleepState = "My goldfish are sleepy today.";
        console.log(sleepState);
    } else {
        let sleepState = "My goldfish are awake today.";
        console.log(sleepState);
    }
    let randomInt = Math.floor(Math.random() * 10);
    if(randomInt >= 5){
        console.log("My cat likes watching my goldfish.");
    } else {
        console.log("My cat likes watching my carp.");
    }
}

fishTales();

