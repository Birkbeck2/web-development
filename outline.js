export const outline = [
  {
    text: 'Basic HTML',
    lecturer: 'Helena Wee',
    items: [
      {
        text: 'Workshop on basic HTML',
        link: '/workshops/basic-html/index.html',
      }
    ]
  },
  {
    text: 'Semantic HTML',
    lecturer: 'Joseph Muller',
    items: [
      {
        text: 'HTML attributes',
        link: '/lectures/html-attributes.html',
        concepts: 'variable, attribute, attribute name, attribute value',
        code: '= " lang id class a href'
      },
      {
        text: 'Images and other files in HTML',
        link: '/lectures/images-and-other-files-in-html.html',
        concepts: 'alt text, absolute and relative paths, files',
        code: 'img src alt width height index.html'
      },
      {
        text: 'Meaning and presentation in HTML',
        link: '/lectures/meaning-and-presentation-in-html.html',
        concepts: 'meaning, presentation, semantic HTML, HTML history',
        code: 'table br p strong b em i figure img figcaption ul ol li div span header nav main aside article section footer'
      },
      {
        text: 'Workshop on semantic HTML',
        link: '/workshops/semantic-html/index.html',
      }
    ]
  },
  {
    text: 'Intro to CSS',
    lecturer: 'Helena Wee',
    // concepts: 'stylesheets, style and content, internal and external CSS, selector, declaration, property, value, cascade, fonts, box model, margins, padding, borders, alignment, hover, display',
    // code: '{ } . # ; " class id color background-color width height text-align text-decoration font-family margin padding border :hover display'
    items: [
      {
        text: 'Workshop on Intro CSS',
        link: '/workshops/intro-css/index.html',
      }
    ]
  },
  {
    text: 'Responsive CSS',
    lecturer: 'Helena Wee',
    // concepts: 'responsive design, media queries, flexible layouts, grid layouts',
    // code: 'media flex grid'
    items: [
      {
        text: 'Workshop: Responsive CSS',
        link: '/workshops/responsive/index.html',
      }
    ]
  },
  {
    text: 'Accessibility',
    lecturer: 'Joseph Muller',
    items: [
      {
        text: 'Will it work? Using sandboxes to run code experiments',
        link: '/lectures/will-it-work-using-sandboxes-to-test-code.html',
        concepts: 'sandboxes'
      },
      {
        text: 'Accessibility',
        link: '/lectures/accessibility.html',
        concepts: 'digital accessibility, disability, mainstream and assistive technology, standards',
        code: ':focus outline header nav main section footer aria-label aria-labelledby'
      },
      {
        text: 'Forms',
        link: '/lectures/html-forms.html',
        concepts: 'HTTP request methods, front end and back end',
        code: 'form method action type label for input textarea name button'
      },
      {
        text: 'Workshop: Accessiblity',
        link: '/workshops/accessibility/index.html',
      }
    ]
  },
  {
    text: 'Advanced CSS',
    // concepts: 'positioning, z-index, float, navigation bar, dropdown menu, breadcumb menu',
    // code: 'positioning navigation dropdown'
    items: [
      {
        text: 'Workshop: Advanced CSS',
        link: '/workshops/advanced/index.html',
        lecturer: 'Helena Wee',
      }
    ]
  },
  {
    text: 'Unix shell, Git and GitHub',
    lecturer: 'Joseph Muller',
    items: [
    //   {
    //     text: 'Using the command line',
    //     link: '/lectures/command-line-interface.html',
    //     concepts: 'command line interface, Unix shell',
    //     code: 'pwd ls cat touch mkdir mv cp rm'
    //   },
    //   {
    //     text: 'Understanding and Using Git',
    //     link: '/lectures/git.html',
    //     concepts: 'command line interface, Unix shell',
    //     code: 'pwd ls cat touch mkdir mv cp rm'
    //   },
    ]
  },
  {
    text: 'Introduction to programming with JavaScript',
    lecturer: 'Joseph Muller',
    items: [
    //   {
    //     text: 'Setup',
    //     link: '/lectures/javascript-setup.html',
    //     concepts: 'programming language, running JavaScript code, comments',
    //     code: 'script node console.log // /* */'
    //   },
    //   {
    //     text: 'Values and data types',
    //     link: '/lectures/javascript-values-and-data-types.html',
    //     concepts: 'values, data types, strings, escaping',
    //     code: '" \\ numbers booleans true false undefined null typeof'
    //   },
    //   {
    //     text: 'Evaluation with operators',
    //     link: '/lectures/javascript-evaluation-with-operators.html',
    //     concepts: 'operators',
    //     code: '+ == != < > - / *'
    //   },
    //   {
    //     text: 'Workshop: Intro JavaScript',
    //     link: 'https://github.com/Birkbeck2/wdux2223-workshop-js-values',
    //   },
    ]
  },
  {
    text: 'JavaScript conditionals and functions',
    lecturer: 'Joseph Muller and Helena Wee',
    items: [
    //   {
    //     text: 'Variables',
    //     link: '/lectures/javascript-variables.html',
    //     concepts: 'statements, variables',
    //     code: '; = let const var'
    //   },
    //   {
    //     text: 'Conditionals',
    //     link: '/lectures/javascript-conditionals.html',
    //     concepts: 'conditionals, block scope',
    //     code: 'if else while {}'
    //   },
    //   {
    //     text: 'Functions',
    //     link: '/lectures/javascript-functions.html',
    //     concepts: 'functions, function scope',
    //     code: 'function return {}'
    //   },
    ]
  }
]

// {
//   text: 'Behind-the-scenes HTML',
//   link: '/lectures/behind-the-scenes-html.html',
//   lecturer: 'Joseph Muller',
//   concepts: 'social media cards, web search indexing, code comments, character encoding',
//   code: 'head meta name content title description og:image twitter:image charset utf-8 style src link rel href script defer <!-- --> hidden'
// },

export function filterClassMeeting (meetings, pathStart) {
  const filteredItems = []
  meetings.forEach(meeting => {
    meeting.items = meeting.items.filter(lecturePart => {
      return lecturePart.link.startsWith(pathStart)
    })
    if (meeting.items.length) filteredItems.push(meeting)
  })
  return filteredItems
}
