// Make the background color change to the color entered by the user

// Select the form by the element name
let form = document.querySelector('form')

// Select the square div by the class "square"
let square = document.querySelector('.square')

// Defines what to do with the event
function changeColor(event) {

  // First keep the browser from automatically refreshing the whole page.
  event.preventDefault()

  // Then get the target of the event. We know this is the form.
  let form = event.target

  // Get the input where the user typed the color.
  colorInput = form.querySelector('input#color')

  // Reset the classes on the square, including the string entered by the user.
  color = colorInput.value
  square.className = `shape square ${color}`
}

// This ties the form submit event to an action to take
form.addEventListener('submit', changeColor)
