let numPlants = 0;

function plants(){
    let spiderPlant = 3;
    let cactus = 5;
    let rubberPlant = 2;
    numPlants = spiderPlant + cactus + rubberPlant;
    console.log("I originally had " + numPlants + " plants.");
    return numPlants;
}

let boughtPlants = Math.floor(Math.random() * 10);
console.log("I bought " + boughtPlants + " plants.");

function plantsUpdate(newPlants){
    let originalPlants = plants();
    numPlants = originalPlants + newPlants;
    console.log("I now have " + numPlants + " plants.");
    if(numPlants < 15){
        console.log("That's quite a few plants!");
    } else {
        console.log("That's a lot of plants!");
    }
}

plantsUpdate(boughtPlants);