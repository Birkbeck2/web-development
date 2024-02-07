// All these console logs output the same thing.
// This shows there are often multiple ways to accomplish the same thing.
// Sometimes one way is better,
// but often several ways are just as good as each other.
// Which one you choose might come down to style, readability,
// or some other purpose.

let myString = 'pizza'

console.log(myString[4])
console.log(myString.at(-1))
console.log(myString.at(4))
console.log(myString.charAt(4))
console.log(myString.slice(4))
console.log(myString.slice(-1))
console.log(myString.substring(4, 5))
console.log(myString[myString.length - 1])
console.log(myString[myString.indexOf('a')])
