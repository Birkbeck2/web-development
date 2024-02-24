let form = document.querySelector('form')

function changeColor(event) {
  event.preventDefault()
  let colorSelect = form.querySelector('#color')
  console.log(colorSelect)
  let color = colorSelect.value
  let square = document.querySelector('.square')
  square.className = `shape square ${color}`
}

form.addEventListener('submit', changeColor)