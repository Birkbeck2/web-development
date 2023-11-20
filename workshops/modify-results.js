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
    if (spec.title === 'HTML is valid') {
      const validationError = JSON.parse(spec.tests[0].results[0].stderr[0].text)
      test.output = `
        ${validationError.message}

        Line: ${validationError.line}

        Read about this rule:

        ${validationError.ruleUrl}
      `
    }
    report.tests.push(test)
  }
}
delete report.suites
report.score = 100 * numPassed / total
// console.info(`Writing back to ${resultsFile}`)
await writeFile(resultsFile, JSON.stringify(report, null, 2))
