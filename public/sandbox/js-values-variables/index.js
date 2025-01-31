console.log("~~ The situation ~~");

let foxName = "Fox";
let feelingGood = true;
console.log(foxName + " feeling good: " + feelingGood);

let tasteOfGrapes = "delicious";
console.log("Grapes are: " + tasteOfGrapes);

let goal = "eat grapes";
console.log(foxName + " goal: " + goal);

let foxAttempts = 0;
console.log(foxName + " attempts: " + foxAttempts);

let grapesEaten = 0;
console.log("Grapes eaten: " + grapesEaten);

console.log("~~ The action ~~");

foxAttempts = foxAttempts + 1;
grapesEaten = grapesEaten + 0;
console.log(foxName + " attempts: " + foxAttempts);
console.log("Grapes eaten: " + grapesEaten);

foxAttempts = foxAttempts + 1;
grapesEaten = grapesEaten + 0;
console.log(foxName + " attempts: " + foxAttempts);
console.log("Grapes eaten: " + grapesEaten);

foxAttempts = foxAttempts + 1;
grapesEaten = grapesEaten + 0;
console.log(foxName + " attempts: " + foxAttempts);
console.log("Grapes eaten: " + grapesEaten);

console.log("~~ The conclusion ~~");

feelingGood = grapesEaten > 0;
console.log(foxName + " feeling good: " + feelingGood);
tasteOfGrapes = "sour";
console.log("Grapes are: " + tasteOfGrapes);
goal = undefined;
console.log(foxName + " goal: " + goal);
