// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

(function(){
    "use strict";
    /* Start of your code */

    // Function declarations

    function turn_back_time(an_array) {
        return an_array.reverse();
    }

    const seasons = ["Leaves are falling", "Snow is freezing", "Leaves are growing", "It's hot"];
    const seasons_reversed = turn_back_time(seasons);

    console.log(seasons_reversed); // The array has been reversed in place.

    console.log(seasons); // The original variable points to the same, now reversed, array.

    // Function expressions
    // Functions can also be defined in expressions, either as anonymous functions:

    const turn_back_time = function (an_array) {
        return an_array.reverse();
    }

    // Or with names in case they need to reverse to themselves:

    const turn_back_time = function reverse(an_array) {
        return an_array.reverse();
    }

    /* End of your code */
  })();  
