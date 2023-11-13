// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations

(function(){
    "use strict";
    /* Start of your code */
    console.log(leaf1 === undefined); // true because although it was hoisted it was not assigned until after this line

    var leaf1 = "A red maple leaf";
    // let leaf1 = "A big red maple leaf"; // SyntaxError because you can't redeclare a variable, only reassign it once declared
    let leaf2 = "A small pine needle";

    let numberOfLeaves = 2;

    if (true) {
        var leaf3 = "A yellow oak leaf";
        let leaf4 = "A rotten leaf";
        console.log(leaf4); // "A rotten leaf"
        console.log(leaf2); // "A small pine needle"
        console.log(numberOfLeaves); // 2
    }

    console.log(leaf3); // "A yellow oak leaf"
    // console.log(leaf4); // ReferenceError because it was declared with "let" inside a block scope
    // console.log(season); // ReferenceError because it was declared with "const" inside a block scope

    const season = "Spring";
    // const season = "Summer"; // SyntaxError because you cannot re-assign a constant once declared


    /* End of your code */
  })();