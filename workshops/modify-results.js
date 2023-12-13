import { readFile, writeFile } from 'node:fs/promises'

const resultsFile = new URL('results.json', import.meta.url).pathname
// console.info(`Opening ${resultsFile}`)
const report = JSON.parse(await readFile(resultsFile))
report.tests = []
let numPassed = 0
let total = 0

for (const suiteIndex in report.suites) {
  for (const specIndex in report.suites[suiteIndex].specs) {
    const spec = report.suites[suiteIndex].specs[specIndex]
    const attachments = spec.tests[0].results[0].attachments
    const customPoints = attachments.filter(att => att.name === 'autograder-points')?.pop()
    const points = customPoints ? JSON.parse(atob(customPoints.body)).points : 1
    const test = Object.assign({}, spec)
    if (spec.ok) {
      numPassed += points
      test.status = 'passed'
    } else {
      test.status = 'failed'
    }
    total += points
    test.name = spec.title

    if (spec.title.includes('Axe')) {
      test.output = ''
      const axeAttachment = attachments.filter(att => att.name === 'accessibility-scan-results')?.pop()
      if (axeAttachment) {
        const a11yErrors = JSON.parse(atob(axeAttachment.body))
        for (const error of a11yErrors) {
          test.output += `
            ${error.help}
            Impact: ${error.impact}
            Tags: ${error.tags.join(', ')}
            Description: ${error.description}
            More info:
            ${error.helpUrl}
          `
        }
      }
    }
    if (spec.title.includes('HTML is valid')) {
      test.output = ''
      const validationErrors = spec.tests[0].results[0].stderr
      for (const error of validationErrors) {
        const errorJSON = JSON.parse(error.text)
        test.output += `
          ${errorJSON.message}
          Line: ${errorJSON.line}
          More info:
          ${errorJSON.ruleUrl}
        `
      }
    }
    report.tests.push(test)
  }
}
delete report.suites
report.score = 100 * numPassed / total
// console.info(`Writing back to ${resultsFile}`)
await writeFile(resultsFile, JSON.stringify(report, null, 2))
