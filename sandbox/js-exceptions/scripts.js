https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements

(function(){
    "use strict";
    /* Start of your code */

    function getSeasonName(season) {
      const seasons = [
        'Fall', 'Winter', 'Spring', 'Summer'
      ];
      if (seasons[season]) {
        return seasons[season];
      } else {
        throw new Error('InvalidSeasonNo');
      }
    }

    let seasonNumber = 5;

    try {
      let seasonName = getSeasonName(seasonNumber);
      console.log(seasonName);
    } catch (e) {
      let seasonName = 'unknown';
      console.log(seasonName);
      console.log(e);
    }

    /* End of your code */
  })();  