// Choose meaningful, specific names that help you and others remember
// important things, like the type or category of a variable.
// When something becomes hard to read, make a small variable or function
// so you can give parts of it helpful names.

let colors = {
  pink: '#d703fc',
  yellow: '#fcf803',
}

for (let color in colors) {
  console.log(`I have a ${color} triangle with code ${colors[color]}`);
}

// Why this is important:

// "There are only two hard things in Computer Science: cache invalidation and naming things."
// -- Phil Karlton

// "In almost all computer applications, users must enter correct words for the desired objects or actions. We ... found the variability to be surprisingly large. In every case two people favored the same term with probability <0.20. Simultaions show how this fundamental property of language limits the success of various design methodologies for vocabulary-driven interaction."
// Furnas, G, T Landauer, L Gomez, and S Dumais. “The Vocabulary Problem in Human-System Communication.” Communications of the ACM 30, no. 11 (1987): 964–71. https://doi.org/10.1145/32206.32212.

// "Recognition rather than recall", Nielsen Norman Group, https://www.nngroup.com/articles/ten-usability-heuristics/#6-recognition-rather-than-recall.
