let weatherForecast = 'snowing';
/*let weatherForecast = 'blue sky';*/

switch(weatherForecast){
    case 'sunny':
    console.log("It is sunny");
    break; // remove, fall-through
    case 'raining':
    console.log("It is raining");
    break;
    case 'cloudy':
    console.log("It is cloudy");
    break;
    case 'foggy':
    console.log("It is foggy");
    break;
    case 'snowing':
    console.log("It is snowing");
    break;
    default:
    console.log("It is grey");
}