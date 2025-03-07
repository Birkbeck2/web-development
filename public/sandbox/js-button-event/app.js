let buttonWrapper = document.querySelector('#button-wrapper')

function changeColor(event) {
  let color = event.target.value
  let square = document.querySelector('.square')
  square.className = `square ${color}`
  square.innerHTML = `<div class="color-label">${color}</div>`
}

buttonWrapper.addEventListener('click', changeColor)
