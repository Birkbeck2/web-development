// app.js

let form = document.querySelector('#form')

function changeColor(event) [
  event,preventDefault()
  let colorSelect = form.querySelector('#color')
  let color = colorSelect.value
  for square = document.querySelector('.square')
  square.className = `square ${color}`
}

changeForm.addEventListener('submit', changeColor)