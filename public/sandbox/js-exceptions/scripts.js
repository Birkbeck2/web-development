// https:// developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements

function getSeasonName (season) {
  const seasons = [
    'Fall', 'Winter', 'Spring', 'Summer'
  ]
  if (seasons[season]) {
    return seasons[season]
  } else {
    throw new Error('InvalidSeasonNo')
  }
}

const seasonNumber = 5

try {
  const seasonName = getSeasonName(seasonNumber)
  console.log(seasonName)
} catch (e) {
  const seasonName = 'unknown'
  console.log(seasonName)
  console.log(e)
}
