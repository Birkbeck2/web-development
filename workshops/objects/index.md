# Workshop on JavaScript objects, loops, and files

## Part 1: Practical

The practical part of today’s workshop is contained in two files,
“shapes.js” and “extraColors.js”. Download both files or copy-paste into
your own versions to get started. Then follow the instructions in
“shapes.js”.

[Download shapes.js](https://github.com/Birkbeck2/web-development/blob/main/workshops/objects/starter-files/shapes.js)

<<< @/workshops/objects/starter-files/shapes.js{js}

[Download extraColors.js](https://github.com/Birkbeck2/web-development/blob/main/workshops/objects/starter-files/extraColors.js)

<<< @/workshops/objects/starter-files/extraColors.js{js}

## Part 2: Creative

Choose one of the three options below.

## Creative option A: Make something!

Scenario: Choose something that you can represent in code with arrays and
objects. It can be info about some of your favorite songs, TV shows,
clothes, hobbies, pets, work, etc. 

Goal: Write a program including arrays, objects, and loops that uses that
info to tell a story or investigate the answer to some questions about the
info.

## Creative option B: Explore 1980s hit song data

### Scenario

You are a developer working on a music streaming app. You use
JavaScript to work with data about songs, albums, artists, and audio
generally. You’ve been provided with a list of top singles from the UK in
the 1980s (see starter files below).

### Goal

Ask some questions that the data can answer, using loops. Can’t
think of any? Try these.

  1. What’s the longest song title (in terms of number of characters)?
  2. What’s the shortest title?
  3. Is “I” or “You” used more often? How about “Me”? How about “Love”?
  4. What was the top ranked song for each year?
  5. Which artist appears on the list most often?
  6. Can you use a for loop to write an HTML document (a string) with markup
     for a `ul` and `li` items, using the data?

### Starter code

[Download songData.js](https://github.com/Birkbeck2/web-development/blob/main/workshops/objects/starter-files/songData.js) (too long to show here)

[Download songs.js](https://github.com/Birkbeck2/web-development/blob/main/workshops/objects/starter-files/songs.js)

<<< @/workshops/objects/starter-files/songs.js{js}

## Creative option C: Image factory (warning: challenging!)

### Scenario

You are a developer working on a web app where users can
choose a color and download geometric shapes in that color. The shapes are
made with SVG (scalable vector graphics), which is a markup language that
can be used to encode graphics like logos, icons, and illustrations.

### Objective

In the starter code below, you are given a square, encoded
using SVG markup. Create at least five copies of the square in different
colors, and save them all as files in the folder called “output”.

### Starter code

[Download images.js](https://github.com/Birkbeck2/web-development/blob/main/workshops/objects/starter-files/images.js)

<<< @/workshops/objects/starter-files/images.js{js}

### Clues and tips

- Program structure: First create an array with all the color codes you want, or an
  object with color names and color codes as key-value pairs. Then you can
  iterate over this with a for loop to create one copy of the image for each
  color.

- SVG format: Don’t worry if you haven’t used SVG markup before--you
  already know some of it, because it’s similar to HTML and CSS in many
  ways. Look for familiar patterns. Can you tell where the color is
  defined in the code?

- Changing the colors: Once you have found the color definition in the SVG
  code, you’ll want to change it. Try looking up how the `replace()`
  method works on strings.

- Saving each file: You’ll need the built-in function called `writeFileSync()`,
  which is already imported for you on line 1. It is used like this:
  `writeFileSync('output-folder-name/file-name.txt', 'content of file as
  a string')`. Note: on Windows, you have to use backslash (`\`) between
  the folder name and file name, and on Mac and Linux, you have to use
  forward slash (`/`).
