let triggerButton = document.querySelector('button')

function addWord(event) {
  let element = event.target
  // console.log(element)
  element.textContent += ' word'
}

triggerButton.addEventListener('click', addWord)
