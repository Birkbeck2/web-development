// #region setting
let greeting = 'Hello'
let 你好 = 'nǐhǎo'
let playerName = 'Sam'
let result6 = 41 + 52
let gamePath = '/games/lava'
let playButton = '<button>Play</button>'
// #endregion setting

// #region using
console.log(greeting + ' ' + playerName)
let score = result6 * 5
console.log(score)
let gameUrl = 'https://example.org' + gamePath
// #endregion using

// #region changing
greeting = 'Hiya'
greeting = 'Good day'
// let greeting = 'Hi' // Throws an error
console.log(greeting)
gamePath = '/games/frog'
playButton = '<img src="frog.gif">'
console.log(someMarkup)
// #endregion changing

// #region constants
const domain = 'www.example.org'
gameUrl = 'https://' + domain + gamePath
console.log(gameUrl)

// const domain = 'www.bbk.ac.uk' // Results in an error

const defaultBackground = '#d6cbbc'
let userBackground = '#f2a865'
console.log(userBackground == defaultBackground)
userBackground = '#f7cda7'
console.log(userBackground == defaultBackground)
// #endregion constants

// #region var
var player2 = 'Nida'
console.log(player2)
player2 = 'John'
console.log(player2)

console.log(player2Background)
var player2Background
player2Background = '#a1c9d9'
// #endregion var

// #region statements
let player3Level = 27
let level27Win = false
let player3GameOver = !level27Win
console.log('Game over: ' + player3GameOver)
// #endregion statements

// #region semicolons
let player5Level = 2;
let level2Win = true;
let player5GameOver = !level2Win;
console.log('Game over: ' + player5GameOver);
// #endregion semicolons

// #region check1
let pizza = 9;
let numPizzas = 2;
let drinks = 8;
let cash = 40;
let moneyLeftOver = '?';
console.log(moneyLeftOver);
// #endregion check1

// #region check2
First episode name == 'Pilot ;             EpisodesWatched = 8;
episodeCount = 5;
console.log(episodesWatched);
// #endregion check2

// #region check3
const mostCommonOrder = 'juice ';
let order1 = mostCommonOrder;
order1 = 'tea ';
let order2 = 'tea ';
let jonsOrder = order2;
order2 = 'coffee ';
let samsOrder = mostCommonOrder + order2;
let table5Order = samsOrder + order1;
console.log(table5Order);
// #endregion check3
