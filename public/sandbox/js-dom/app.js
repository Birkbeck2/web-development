const songs = [
  "Do They Know It's Christmas?",
  "Relax",
  "I Just Called to Say I Love You",
  "Two Tribes",
  "Don't You Want Me",
]

let flexContainer = document.querySelector('.flex-container')

for (let song of songs) {
  flexContainer.innerHTML += `<p>${song}</p>`
}

let h1 = document.querySelector('h1')
h1.textContent = h1.textContent + '!'
