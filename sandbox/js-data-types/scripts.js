// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_structures_and_types

(function(){
    "use strict";
    /* Start of your code */

    // string
    let season = "Autumn";
    console.log(typeof season);

    // number
    let number_of_seasons = 4;
    console.log(typeof number_of_seasons);
    let number_of_leaves = 26912;
    console.log(typeof number_of_leaves);

    // boolean
    let falling = true;
    console.log(typeof falling);
    let growing = false;
    console.log(typeof growing);
    
    // null (logs in the console as "object")
    let snow = null;
    console.log(typeof snow);

    // undefined
    let how_i_feel;
    console.log(typeof how_i_feel);

    // object
    const the_situation = {
      "when_is_it": season,
      "leaves_are_falling": falling,
      "how_many_leaves": number_of_leaves, 
    };
    console.log(typeof the_situation);

    /* End of your code */
  })();