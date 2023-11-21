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
    const test = Object.assign({}, spec)
    if (spec.ok === true) {
      numPassed += 1
      test.status = 'passed'
    } else {
      test.status = 'failed'
    }
    total += 1
    test.name = spec.title
    delete test.title
    if (spec.title.includes('Axe')) {
      // Refactor this to make it more flexible per test
      total += 7
      if (spec.status === 'passed') {
        numPassed += 7
      }
      test.output = ''
      const a11yErrors = JSON.parse(atob(spec.tests[0].results[0].attachments[0].body))
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
    if (spec.title === 'HTML is valid') {
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
