export const outline = [
  {
    text: 'Semantic HTML',
    items: [
      {
        text: 'HTML attributes',
        link: '/lectures/html-attributes.html',
        lecturer: 'Joseph Muller',
        concepts: 'variable, attribute, attribute name, attribute value',
        code: '= " lang'
      },
      {
        text: 'HTML links, images, and file organization',
        link: '/lectures/html-links-images-and-file-organization.html',
        lecturer: 'Joseph Muller',
        concepts: 'images, links, URLs, absolute and relative paths, file organization',
        code: 'a href img src alt width height index.html'
      },
      {
        text: 'Behind-the-scenes HTML',
        link: '/lectures/behind-the-scenes-html.html',
        lecturer: 'Joseph Muller',
        concepts: 'social media cards, web search indexing, code comments, character encoding',
        code: 'head meta name content title description og:image twitter:image charset utf-8 style src link rel href script defer <!-- --> hidden'
      },
      {
        text: 'Meaning and presentation in HTML',
        link: '/lectures/meaning-and-presentation-in-html.html',
        lecturer: 'Joseph Muller',
        concepts: 'meaning, presentation, semantic HTML, HTML history',
        code: 'table br p strong b em i figure img figcaption ul ol li div span header nav main aside article section footer'
      },
      {
        text: 'Workshop on semantic HTML',
        link: '/workshops/workshop-2.html',
        lecturer: 'Joseph Muller'
      },
      {
        text: 'Will it work? Using sandboxes to run code experiments',
        link: '/lectures/will-it-work-using-sandboxes-to-test-code.html',
        lecturer: 'Joseph Muller',
        concepts: 'sandboxes'
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
