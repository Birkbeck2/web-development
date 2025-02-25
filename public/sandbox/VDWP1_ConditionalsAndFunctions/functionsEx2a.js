let numGoldfish = Math.floor(Math.random() * 10);
let numCarp = Math.floor(Math.random() * 10);
let sleepy = true;

function fishTale(){
    let randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber == 0){
        sleepy = false;
    } else {
        sleepy = true;
    }
    if(sleepy == true){
        let sleepState = "My goldfish are sleepy today.";
        console.log(sleepState);
        return sleepState;
    } else {
        let sleepState = "My goldfish are awake today.";
        console.log(sleepState);
        return sleepState;
    }
}

function fishTank(goldfish, carp){
    console.log("I have " + goldfish + " goldfish.");
    console.log("I have " + carp + " carp.");
    let totalFish = goldfish + carp;
    console.log("In total I have " + totalFish + " fish.");
}

fishTank(numGoldfish, numCarp);
let goldfishHealth = fishTale();