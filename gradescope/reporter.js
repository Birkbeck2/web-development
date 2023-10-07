import { JsonReporter } from 'vitest/reporters'

export default class GradescopeReporter extends JsonReporter {
  async addGradescopeProperties (reportString) {
    const report = JSON.parse(reportString)
    report.tests = []
    let numPassed = 0
    let total = 0
    for (const resultSet in report.testResults) {
      for (const test in report.testResults[resultSet].assertionResults) {
        const result = report.testResults[resultSet].assertionResults[test]
        if (result.status === 'passed') numPassed += 1
        total += 1
        report.testResults[resultSet].assertionResults[test].name = result.fullName
        delete report.testResults[resultSet].assertionResults[test].fullName
        report.tests.push(report.testResults[resultSet].assertionResults[test])
      }
    }
    report.score = 100 * numPassed / total
    delete report.testResults
    return JSON.stringify(report, null, 2)
  }

  async writeReport (reportString) {
    super.writeReport(await this.addGradescopeProperties(reportString))
  }
}
