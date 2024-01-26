// arrays.js
// Top five UK singles of the 1980s
const songs = [
  "Do They Know It's Christmas?",
  "Relax",
  "I Just Called to Say I Love You",
  "Two Tribes",
  "Don't You Want Me",
]

console.log('The fifth song:')
console.log(songs[4])

console.log('Adding a song to the end of the list:')
songs.push("Last Christmas")
console.log(songs.slice(-1))

console.log('How many characters are in each song:')
for (const song of songs) {
  console.log(song.length)
}

console.log('Songs with "You":')
for (const song of songs) {
  if (song.includes('You')) {
    console.log(song)
  }
}

console.log('A list of all the unique words in the songs:')
const uniqueWords = []
for (const song of songs) {
  const wordsInSong = song.split(' ')
  for (const word of wordsInSong) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word)
    }
  }
}
console.log(uniqueWords)

console.log('The word list, sorted alphabetically:')
console.log(uniqueWords.sort())

console.log('Each song title, lowercase, with no punctuation:')
const charactersToKeep = ' abcdefghijklmnopqrstuvwxyz'
for (const song of songs) {
  let lowercaseSong = ''
  for (const character of song) {
    const lowercaseCharacter = character.toLowerCase()
    if (charactersToKeep.includes(lowercaseCharacter)) {
      lowercaseSong = lowercaseSong + lowercaseCharacter
    }
  }
  console.log(lowercaseSong)
}
