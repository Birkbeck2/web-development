const actions = [
  'jumped',
  'took a running leap',
  'tried again and again',
  // 'miraculously flew', // try uncommenting this to change the result
]

const grapes = {
  qualities: ['beautiful', 'ripe', 'ready to burst with juice'],
  status: 'hanging from a vine',
  respond: function(foxAction) {
    if (foxAction === 'miraculously flew') {
      return 'eaten'
    } else {
      return null
    }
  }
}

const fox = {
  attemptsMade: 0,
  feelings: ['hungry', 'a sense of longing'],
  hasTriedtoReachGrapes: false,
  hasReachedGrapes: false,

  tryToEatGrapes: function() {
    for (let action of actions) {
      result = grapes.respond(action);
      fox.attemptsMade += 1;
      if (result) {
        fox.hasReachedGrapes = true;
        fox.feelings = ['elation', 'pride'];
        grapes.qualities = ['delicious'];
        grapes.status = 'eaten';
        break;
      }
    }
    if (!fox.hasReachedGrapes) {
      fox.feelings = ['disgust'];
      grapes.qualities = ['sour'];
    }
    fox.hasTriedtoReachGrapes = true;
  },

  getTriedText: function() {
    if (fox.hasTriedtoReachGrapes) {
      return `
        The fox has ${fox.hasReachedGrapes ? '' : 'not '} reached
        the grapes after ${ fox.attemptsMade }
        attempt${ fox.attemptsMade === 1 ? '' : 's' }.
      `;
    } else {
      return `The fox has not tried to reach the grapes yet.`;
    }
  },

  displayResult: function() {
    let result = `
      ${ this.getTriedText() }
      He feels ${ fox.feelings.join(' and ') }
      and thinks the grapes are ${ grapes.qualities.join(' and ') }.
    `
    // Trim whitespace so it shows up more nicely in console
    result = result.replace(/(\s+)/g, ' ').trim();
    return result
  }
}

// Pretty output
console.log('Before')
console.log(fox.displayResult())
fox.tryToEatGrapes();
console.log('After')
console.log(fox.displayResult())

// Raw object output
console.log('fox', fox);
console.log('grapes', grapes);
