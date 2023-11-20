import { readFile, writeFile } from 'node:fs/promises'

const resultsFile = new URL('../../results/results.json', import.meta.url).pathname
// console.info(`Opening ${resultsFile}`)
const report = JSON.parse(await readFile(resultsFile))
report.tests = []
let numPassed = 0
let total = 0
for (const suiteIndex in report.suites) {
  for (const specIndex in report.suites[suiteIndex].specs) {
    const spec = report.suites[suiteIndex].specs[specIndex]
    if (spec.ok === true) {
      numPassed += 1
      report.suites[suiteIndex].specs[specIndex].status = 'passed'
    } else {
      report.suites[suiteIndex].specs[specIndex].status = 'failed'
    }
    total += 1
    report.suites[suiteIndex].specs[specIndex].name = spec.title
    delete report.suites[suiteIndex].specs[specIndex].title
    if (spec.title === 'HTML is valid') {
      // print stderr to student view
    }
    report.tests.push(report.suites[suiteIndex].specs[specIndex])
  }
}
delete report.suites
report.score = 100 * numPassed / total
// console.info(`Writing back to ${resultsFile}`)
await writeFile(resultsFile, JSON.stringify(report, null, 2))
