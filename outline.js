export const outline = [
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
        text: 'HTML forms',
        link: '/lectures/html-forms.html',
        lecturer: 'Joseph Muller',
        concepts: 'HTTP request methods, front end and back end',
        code: 'form, method, action, type, label, for, input, name, button'
      },
      // {
      //   text: 'Workshop on semantic HTML',
      //   link: '/workshops/workshop-2/workshop-2.html',
      //   lecturer: 'Joseph Muller'
      // },
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
