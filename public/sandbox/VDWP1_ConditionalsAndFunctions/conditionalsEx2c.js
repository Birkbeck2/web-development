// this example runs in browser console
let num = Number(prompt("Pick a number"));

if(!isNaN(num)){
  if (num < 10) {
    console.log("Small");
  } else if (num < 100) {
    console.log("Medium");
  } else {
    console.log("Large");
  }
} else {
  console.log("You did not type in a number")
}