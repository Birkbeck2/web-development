export const outline = [
  {
    text: 'Welcome and orientation',
    collapsed: true,
    link: '/lectures/welcome-orientation.html',
    items: [],
  },
  {
    text: 'Markdown and GitHub',
    collapsed: true,
    lecturer: 'Joseph Muller',
    items: [
      {
        text: 'Prep',
        link: '/lectures/markdown-and-github-prep.html',
      },
      {
        text: 'Live coding',
        link: '/lectures/markdown-live-coding.html',
      },
      {
        text: 'Workshop on Markdown and GitHub',
        link: '/workshops/markdown/index.html',
      }
    ]
  },
  {
    text: 'HTML',
    collapsed: true,
    lecturer: 'Joseph Muller',
    items: [
      {
        text: 'Prep',
        link: '/lectures/html-prep.html',
      },
      {
        text: 'Live coding',
        link: '/lectures/html-live-coding.html',
      },
      {
        text: 'Workshop on HTML',
        link: '/workshops/html/index.html',
      }
    ]
  },
  {
    text: 'Introduction to CSS',
    collapsed: true,
    lecturer: 'Helena Wee',
    // concepts: 'stylesheets, style and content, internal and external CSS, selector, declaration, property, value, cascade, fonts, box model, margins, padding, borders, alignment, hover, display',
    // code: '{ } . # ; " class id color background-color width height text-align text-decoration font-family margin padding border :hover display'
    items: [
      {
        text: 'Prep',
        link: '/lectures/intro-css.html',
      },
      {
        text: 'Workshop on Intro to CSS',
        link: '/workshops/intro-css/index.html',
      }
    ]
  },
  {
    text: 'Responsive CSS and flexbox',
    collapsed: true,
    lecturer: 'Helena Wee',
    // concepts: 'responsive design, media queries, flexible layouts, grid layouts',
    // code: 'media flex grid'
    items: [
      {
        text: 'Prep',
        link: '/lectures/responsive-css-flexbox.html',
      },
      {
        text: 'Workshop: Responsive CSS and flexbox',
        link: '/workshops/responsive/index.html',
      }
    ]
  },
  {
    text: 'Accessibility in HTML and CSS',
    collapsed: true,
    lecturer: 'Joseph Muller',
    items: [
      {
        text: 'Prep',
        link: '/lectures/accessibility-prep.html',
      },
      {
        text: 'Live coding',
        link: '/lectures/accessibility-live-coding.html',
      },
      // {
      //   text: 'Will it work? Using sandboxes to run code experiments',
      //   link: '/lectures/will-it-work-using-sandboxes-to-test-code.html',
      //   concepts: 'sandboxes'
      // },
      // {
      //   text: 'Accessibility',
      //   link: '/lectures/accessibility.html',
      //   concepts: 'digital accessibility, disability, mainstream and assistive technology, standards',
      //   code: ':focus outline header nav main section footer aria-label aria-labelledby'
      // },
      // {
      //   text: 'Forms',
      //   link: '/lectures/html-forms.html',
      //   concepts: 'HTTP request methods, front end and back end',
      //   code: 'form method action type label for input textarea name button'
      // },
      {
        text: 'Workshop: Accessiblity',
        link: '/workshops/accessibility/index.html',
      }
    ]
  },
  {
  text: 'Grids and other CSS concepts',
  collapsed: true,
  lecturer: 'Helena Wee',
  //   // concepts: 'grids, positioning, z-index, navigation',
  //   // code: 'grids positioning navigation'
  items: [
      {
        text: 'Prep',
        link: '/lectures/grids-other-css-concepts.html',
      },
      {
        text: 'Workshop: Grids and other CSS concepts',
        link: '/workshops/grid/index.html',
        
      }
    ]
  },
  {
    text: 'Advanced work with images',
    collapsed: false,
    lecturer: 'Helena Wee',
    //   // concepts: 'grids, positioning, z-index, navigation',
    //   // code: 'grids positioning navigation'
    items: [
        {
          text: 'Prep',
          link: '/lectures/advanced-images.html',
        },
        {
          text: 'Workshop: Advanced work with images',
          link: '/workshops/advanced-images/index.html',
        },
    //    {
    //      text: 'Workshop: Grids and other CSS concepts',
    //      link: '/workshops/grid/index.html',
    //    }
    ]
  },
  {
    text: 'Organizing your CSS',
    collapsed: false,
    lecturer: 'Joseph Muller',
    items: [
      {
        text: 'Prep',
        link: '/lectures/organizing-css-prep.html',
      },
      {
        text: 'Live coding',
        link: '/lectures/organizing-css-live-coding.html',
      },
      {
        text: 'Workshop: Organizing your CSS',
        link: '/workshops/organizing-css/index.html',
      }
    ]
  },
  // {
  //   text: 'Command line, Git and GitHub',
  //   collapsed: true,
  //   lecturer: 'Joseph Muller',
  //   items: [
  //     {
  //       text: 'The command line',
  //       link: '/lectures/command-line.html',
  //       concepts: 'command line interface, Unix shell',
  //       code: 'pwd ls cat touch mkdir mv cp rm ""'
  //     },
  //     {
  //       text: 'Git',
  //       link: '/lectures/git.html',
  //       concepts: 'distributed version control, free and open source software, remote repository, local repository, staging area, working directory',
  //       code: 'clone status add commit -m Esc+:wq push diff fetch pull merge rebase branch switch -u origin'
  //     },
  //     {
  //       text: 'GitHub',
  //       link: '/lectures/github.html',
  //       concepts: 'GitHub, pull request, code review, merge, conflict, GitHub Pages',
  //     },
  //     {
  //       text: 'Workshop on Git and GitHub',
  //       link: '/workshops/git/index.html',
  //     },
  //   ]
  // },
  // {
  //   text: 'Intro to JavaScript',
  //   collapsed: true,
  //   lecturer: 'Joseph Muller',
  //   items: [
  //     {
  //       text: 'Introduction',
  //       link: '/lectures/intro-javascript.html',
  //       concepts: 'programming language, JavaScript history, running JavaScript code, comments',
  //       code: 'script node console.log() // /* */'
  //     },
  //     {
  //       text: 'Values',
  //       link: '/lectures/javascript-values.html',
  //       concepts: 'values, data types, strings, escaping',
  //       code: '" \\ numbers booleans true false undefined null typeof'
  //     },
  //     {
  //       text: 'Operators',
  //       link: '/lectures/javascript-operators.html',
  //       concepts: 'operators',
  //       code: '+ == != < > - / *'
  //     },
  //     {
  //       text: 'Variables',
  //       link: '/lectures/javascript-variables.html',
  //       concepts: 'statements, constants, variables',
  //       code: 'let const var = ;'
  //     },
  //     {
  //       text: 'Workshop: Intro JavaScript',
  //       link: '/workshops/intro-javascript/index.html',
  //     },
  //   ]
  // },
  // {
  //   text: 'Conditions and functions',
  //   collapsed: true,
  //   lecturer: 'Helena Wee',
  //   items: [
  //     {
  //       text: 'Conditionals and Functions: Pre-sessional activities',
  //       link: '/lectures/conditionals-and-functions.html',
  //     },
  //     {
  //       text: 'Conditionals',
  //       link: '/lectures/conditionals.html',
  //       concepts: 'conditionals, block scope',
  //       code: 'if else while {}'
  //     },
  //     {
  //       text: 'Functions',
  //       link: '/lectures/functions.html',
  //       concepts: 'functions, function scope',
  //       code: 'function return {}'
  //     },
  //     {
  //      text: 'Workshop: Conditionals and Functions',
  //      link: '/workshops/conditionals-functions/index.html',
  //     },
  //   ]
  // },
  // {
  //   text: 'Objects, loops, and files',
  //   collapsed: true,
  //   lecturer: 'Joseph Muller',
  //   items: [
  //     {
  //       text: 'Prep',
  //       link: '/lectures/objects-loops-files.html',
  //     },
  //     {
  //       text: 'Live coding',
  //       link: '/lectures/objects-loops-files-live-coding.html',
  //     },
  //     {
  //       text: 'Workshop',
  //       link: '/workshops/objects/index.html',
  //     },
  //   ]
  // },
  // {
  //   text: 'JavaScript in the browser',
  //   collapsed: true,
  //   lecturer: 'Joseph Muller',
  //   items: [
  //     {
  //       text: 'Prep',
  //       link: '/lectures/events.html',
  //     },
  //     {
  //       text: 'Live coding',
  //       link: '/lectures/events-live-coding.html',
  //     },
  //     {
  //       text: 'Workshop',
  //       link: '/workshops/events/index.html',
  //     },
  //   ]
  // },
  // {
  //   text: 'Visualising Data with JavaScript',
  //   collapsed: true,
  //   lecturer: 'Helena Wee',
  //   items: [
  //     {
  //       text: 'Visualising Data with JavaScript: Pre-sessional activities',
  //       link: '/lectures/visualising-data-js.html',
  //     },
  //     {
  //       text: 'Visualising Data with JavaScript',
  //       link: '/lectures/visualising-data-js-1.html',
  //     },
  //     {
  //       text: 'APIs and Fetching Data',
  //       link: '/lectures/visualising-data-js-2.html',
  //     },
  //     {
  //       text: 'Drawing shapes and text',
  //       link: '/lectures/visualising-data-js-3.html',
  //     },
  //     {
  //       text: 'Workshop',
  //       link: '/workshops/data-vis/index.html',
  //     },
  //   ]
  // },
  // {
  //   text: 'Timeouts, Debugging and Packages',
  //   lecturer: 'Helena Wee and Joseph Muller',
  //   items: [
  //     {
  //       text: 'Prep',
  //       link: '/lectures/debugging.html',
  //     },
  //     {
  //       text: 'Live Coding',
  //       link: '/lectures/debugging-live-coding.html',
  //     },
  //     {
  //       text: 'Workshop',
  //       link: '/workshops/web-project-prep/index.html',
  //     },
  //   ]
  // },
  // {
  //   text: 'Getting started with Vue.js',
  //   lecturer: 'Helena Wee',
  //   items: [
  //     {
  //       text: 'Prep',
  //       link: '/lectures/vue-intro.html',
  //     },
  //   ]
  // },
  // {
  //   text: 'Going further with Vue.js',
  //   lecturer: 'Joseph Muller',
  //   items: [
  //     {
  //       text: 'Prep',
  //       link: '/lectures/vue-components.html',
  //     },
  //   ]
  // },
]

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
