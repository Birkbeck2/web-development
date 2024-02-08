let triggerButton = document.querySelector('button')

triggerButton.addEventListener('click', function (event) {
  let element = event.target
  // console.log(element)
  element.textContent += ' word'
})
