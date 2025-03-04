# Prep: Objects and loops

## Session goals

By the end of this session students will be able to do the following with
JavaScript:

  - Create objects with properties to hold data
  - Create arrays
  - Iterate over objects, arrays and strings
  - Manipulate objects, arrays, and strings with methods and iteration

## Videos and readings

Please set aside time to watch the following priority
videos before class.

Together the videos are **65 minutes**.

If you learn best by reading, check out chapter 4 of _Eloquent JavaScript_.

### Priority

[JavaScript Tutorial #21 | Object Literal Basics](https://www.youtube.com/watch?v=kXwDrcsONhA), 9m 30s, Anagh Technologies Inc. (Nirmal Joshi), YouTube, 27 Mar 2020.

[#14 Template Literals](https://youtu.be/52OJhTbCtoA), 8m 19s, Dev Dreamer (Amit), YouTube, 1 Mar 2021.

[#15 String methods](https://youtu.be/uKKEdtNU5II), 9m 25s, Dev Dreamer (Amit), YouTube, 2 Mar 2021.

[#27 For...in loop](https://youtu.be/vPB-GnzRiT4), 10m 53s, Dev Dreamer (Amit), YouTube, 19 Mar 2021.

[#28 For...of loop](https://youtu.be/virQjbYVvjM), 6m 56s, Dev Dreamer (Amit), YouTube, 19 Mar 2021.

[#29 How to use JS arrays](https://youtu.be/K97CmrUFyQY), 10m 49s, Dev Dreamer (Amit), YouTube, 21 Apr 2021.

[#30 How to use JS array methods](https://youtu.be/K97CmrUFyQY), 19m 08s, Dev Dreamer (Amit), YouTube, 30 Apr 2021.

[Data Structures: Objects and Arrays](https://eloquentjavascript.net/04_data.html), chapter from book _Eloquent JavaScript_, 3rd ed. (2018), Marijn Haverbeke

### Also recommended

[#25 How to use the JS For Loop](https://youtu.be/sJZLB0p5QQk), 11m 43s, Dev Dreamer (Amit), YouTube, 16 Mar 2021.

[#31 JS Array Iterator Methods](https://youtu.be/yakPfS0asbk), 18m 37s, Dev Dreamer (Amit), YouTube, 7 May 2021.

[What is Object oriented programming](https://youtu.be/FMIuwvt0vGQ), 12m 52s, procademy, YouTube, 4 May 2021.

[Learning Functional Programming with JavaScript](https://youtu.be/e-5obm1G_FY), 29m 56s, Anjana Vakil, JSUnconf, YouTube, 14 Jul 2016.

## Check your understanding

What will be logged to the console?

### 1
```js
function nameTag(name="Felicia") {
  return `Hello, my name is ${name}`
};
console.log(nameTag("Jack"));
```

### 2
```js
function nameTag(name="Felicia") {
  return `Hello, my name is ${name}`
};
console.log(nameTag());
```

### 3
```js
function nameTag(name="Felicia") {
  return `Hello, my name is ${name}`
};
console.log(nameTag);
```

### 4
```js
function nameTag(name="Felicia") {
  return `Hello, my name is ${name}`
};
```

### 5
```js
let names = ['Felicia', 'Jack']
for (let name of names) {
  console.log(name);
}
```

### 6
```js
let player = {
  firstName: 'Felicia',
  username: 'winner',
}
player.username = 'happygolucky';
console.log(player.username);
```

### 7
```js
let players = [
  {
    firstName: 'Felicia',
    username: 'winner',
  },
  {
    firstName: 'Jack',
    username: 'keanu99',
  }
]
for (let player of players) {
  console.log(players.username);
}
```
