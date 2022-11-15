(function(){
    "use strict";
    /* Start of your code */

    var falsy_variable;

    falsy_variable = false;
    console.log(falsy_variable);
    console.log(Boolean(falsy_variable));

    falsy_variable = undefined;
    console.log(falsy_variable);
    console.log(Boolean(falsy_variable));
    
    falsy_variable = null;
    console.log(falsy_variable);
    console.log(Boolean(falsy_variable));
    
    falsy_variable = 0;
    console.log(falsy_variable);
    console.log(Boolean(falsy_variable));
    
    falsy_variable = NaN;
    console.log(falsy_variable);
    console.log(Boolean(falsy_variable));
    
    falsy_variable = '';
    console.log(falsy_variable);
    console.log(Boolean(falsy_variable));

    /* End of your code */
  })();