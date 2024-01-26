// objects.js
// Top two singles from the UK in 1980s
const dontTheyKnow = {
  rank: 1,
  title: "Do They Know It's Christmas?",
  year: 1984
}

const lastChristmas = {
  rank: 2,
  title: "Relax",
  year: 1983
}

console.log('The song titles:')
console.log(dontTheyKnow.title)
console.log(lastChristmas.title)

console.log('Adding an artist for each song:')
dontTheyKnow.artist = 'Band Aid'
lastChristmas.artist = 'Frankie Goes to Hollywood'

console.log('Switching the rank:')
dontTheyKnow.rank = 2
lastChristmas.rank = 1

console.log('They are from the same year:')
console.log(dontTheyKnow.year === lastChristmas.year)

console.log("All the data about the Don't They Know It's Christmas:")
for (const property in dontTheyKnow) {
  const value = dontTheyKnow[property]
  console.log(`${key}: ${value}`)
}

console.log('An array of the song objects:')
const songs = [dontTheyKnow, lastChristmas]
console.log(songs)

console.log('The title of the second song:')
console.log(songs[1].title)

console.log('The artist of the first song:')
console.log(songs[0].artist)

console.log('Now the titles and artists are uppercase:')
for (const song of songs) {
  song.title = song.title.toUpperCase()
  song.artist = song.artist.toUpperCase()
}
console.log(songs)

console.log('Another song to add to the song array:')
const twoTribes = {
  "rank": 4,
  "title": "TWO TRIBES",
  "artist": "FRANKIE GOES TO HOLLYWOOD",
  "year": 1984
}
songs.push(twoTribes)
console.log(twoTribes)

console.log(`Using loops to build a new object
that records how many top songs each artist has:`)
const numberOfTopSongs = {}
for (const song of songs) {
  const artist = song.artist
  if (!numberOfTopSongs.hasOwnProperty(artist)) {
    numberOfTopSongs[artist] = 1
  } else {
    numberOfTopSongs[artist] = numberOfTopSongs[artist] + 1
  }
}
console.log(numberOfTopSongs)
