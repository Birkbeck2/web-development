// Generally, use "of" for arrays and strings
// but "in" for objects

let shapes = [
  'circle',
  'square',
  'rectangle',
  'triangle',
  'star',
]

let colors = {
  green: '#32a852',
  blue: '#2932aB',
  pink: '#e060de',
  yellow: '#e0dc60',
}

let song = `Last Christmas`

// ARRAY
console.log('Looping over array')

// OF
console.log(`Using OF`)
for (let shape of shapes) {
  console.log('shape: ' + shape)
}

// IN
console.log(`Using IN`)
for (let shape in shapes) {
  console.log('shape: ' + shape)
}


// STRING
console.log('Looping over string')

// OF
console.log(`Using OF`)
for (let character of song) {
  console.log('character: ' + character)
}

// IN
console.log(`Using IN`)
for (let character in song) {
  console.log('character: ' + character)
}


// OBJECT
console.log('Looping over object')

// OF
console.log(`Using OF`)
console.log(`Would cause an error`)
for (let color of colors) {
  console.log('color: ' + color)
}

// IN
console.log(`Using IN`)
for (let color in shapes) {
  console.log('color: ' + color)
}
