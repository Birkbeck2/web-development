let songs = document.querySelectorAll('p')

function remove(event) {
  let p = event.target
  let section = p.parentElement
  section.removeChild(p)
}

function highlightBlue(event) {
  let p = event.target
  p.classList.toggle('blue')
}

for (let song of songs) {
  song.addEventListener('click', remove)
  // song.addEventListener('click', highlightBlue)
}

// OR using forEach

// songs.forEach(
//   function (song) {
//     song.addEventListener('click', remove)
//     song.addEventListener('click', highlightBlue)
//   }
// )
