let numGoldfish = Math.floor(Math.random() * 10);
let numCarp = Math.floor(Math.random() * 10);
let numFish = 0;
let sleepy = true;

function fishTale(){
    let randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber == 0){
        sleepy = false;
    } else {
        sleepy = true;
    }
    if(sleepy == true){
        console.log("My goldfish are sleepy today.");
    } else {
        console.log("My goldfish are awake today.");
    }
}

function fishTank(goldfish, carp, totalFish){
    console.log("I have " + goldfish + " goldfish.");
    console.log("I have " + carp + " carp.");
    totalFish = goldfish + carp;
    console.log("In total I have " + totalFish + " fish.");
    let goldfishHealth = fishTale();
}

fishTank(numGoldfish, numCarp, numFish);