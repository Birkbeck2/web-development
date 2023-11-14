export const outline = [
  {
    text: 'Basic HTML',
    items: [
      {
        text: 'Workshop on basic HTML',
        link: '/workshops/basic-html/index.html',
        lecturer: 'Helena Wee'
      }
    ]
  },
  {
    text: 'Semantic HTML',
    items: [
      {
        text: 'HTML attributes',
        link: '/lectures/html-attributes.html',
        lecturer: 'Joseph Muller',
        concepts: 'variable, attribute, attribute name, attribute value',
        code: '= " lang id class a href'
      },
      {
        text: 'Images and other files in HTML',
        link: '/lectures/images-and-other-files-in-html.html',
        lecturer: 'Joseph Muller',
        concepts: 'alt text, absolute and relative paths, files',
        code: 'img src alt width height index.html'
      },
      {
        text: 'Meaning and presentation in HTML',
        link: '/lectures/meaning-and-presentation-in-html.html',
        lecturer: 'Joseph Muller',
        concepts: 'meaning, presentation, semantic HTML, HTML history',
        code: 'table br p strong b em i figure img figcaption ul ol li div span header nav main aside article section footer'
      },
      {
        text: 'Forms',
        link: '/lectures/html-forms.html',
        lecturer: 'Joseph Muller',
        concepts: 'HTTP request methods, front end and back end',
        code: 'form method action type label for input textarea name button'
      },
      {
        text: 'Workshop on semantic HTML',
        link: '/workshops/semantic-html/index.html',
        lecturer: 'Joseph Muller'
      }
    ]
  },
  {
    text: 'Intro to CSS',
    // concepts: 'stylesheets, style and content, internal and external CSS, selector, declaration, property, value, cascade, fonts, box model, margins, padding, borders, alignment, hover, display',
    // code: '{ } . # ; " class id color background-color width height text-align text-decoration font-family margin padding border :hover display'
    items: [
      {
        text: 'Workshop on Intro CSS',
        link: '/workshops/intro-css/index.html',
        lecturer: 'Helena Wee',
      }
    ]
  },
  {
    text: 'Responsive CSS',
    // concepts: 'responsive design, media queries, flexible layouts, grid layouts',
    // code: 'media flex grid'
    items: [
      {
        text: 'Workshop: Responsive CSS',
        link: '/workshops/responsive/index.html',
        lecturer: 'Helena Wee',
      }
    ]
  }
]

export function filterClassMeeting (meetings, pathStart) {
  const filteredItems = []
  meetings.forEach(meeting => {
    meeting.items = meeting.items.filter(lecturePart => {
      return lecturePart.link.startsWith(pathStart)
    })
    if (meeting.items) filteredItems.push(meeting)
  })
  return filteredItems
}

// {
//   text: 'Will it work? Using sandboxes to run code experiments',
//   link: '/lectures/will-it-work-using-sandboxes-to-test-code.html',
//   lecturer: 'Joseph Muller',
//   concepts: 'sandboxes'
// },
// {
//   text: 'Behind-the-scenes HTML',
//   link: '/lectures/behind-the-scenes-html.html',
//   lecturer: 'Joseph Muller',
//   concepts: 'social media cards, web search indexing, code comments, character encoding',
//   code: 'head meta name content title description og:image twitter:image charset utf-8 style src link rel href script defer <!-- --> hidden'
// },

