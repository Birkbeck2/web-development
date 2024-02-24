let form = document.querySelector('form')
let flexContainer = document.querySelector('.flex-container')

function createNewSquare(event) {
  event.preventDefault()
  let colorSelect = form.querySelector('#color')
  let color = colorSelect.value
  const shapeElement = document.createElement('div')
  shapeElement.className = `shape square ${color}`
  flexContainer.appendChild(shapeElement)
}

form.addEventListener('submit', createNewSquare)