let haveSunshine = false;
let isRaining = true;

if (haveSunshine === true && isRaining === false){
  console.log("It is sunny");
} else if(haveSunshine === true && isRaining === true){
  console.log("It is sunny and raining");
} else if(haveSunshine === false && isRaining === false){
  console.log("It is cloudy");
} else {
  console.log("It is cloudy and raining");
}