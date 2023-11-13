// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_structures_and_types

// string
const season = 'Autumn'
console.log(typeof season)

// number
const numberOfSeasons = 4
console.log(typeof numberOfSeasons)
const numberOfLeaves = 26912
console.log(typeof numberOfLeaves)

// boolean
const falling = true
console.log(typeof falling)
const growing = false
console.log(typeof growing)

// null (logs in the console as "object")
const snow = null
console.log(typeof snow)

// undefined
let howIFeel
console.log(typeof howIFeel)

// object
const theSituation = {
  when: season,
  leavesAreFalling: falling,
  howManyLeaves: numberOfLeaves
}
console.log(typeof theSituation)
