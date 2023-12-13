import fs from 'node:fs/promises'
import { test, expect } from '@playwright/test'
import { determineBaseURL, validateHtml } from '#test-utils'
import git from 'isomorphic-git'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { exec } from 'node:child_process'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})

const targetFile = `intro.js`
const targetURL = new URL(targetFile, baseURL).href

const thisPath = fileURLToPath(new URL(import.meta.url))
const targetDir = thisPath.split(path.sep).slice(0, -1).join(path.sep)
const targetPath = path.join(targetDir, targetFile)

test(`found '${targetFile}' ok`, async ({ page }) => {
  expect(await fs.access(targetPath))
})
test('script runs with no errors', async ({ page }) => {
  const logTypes = []
  page.on('console', msg => logTypes.push(msg.type()));
  await page.addScriptTag({ url: targetURL })
  expect(logTypes.filter(logType => logType === 'error').length).toBeFalsy()
})
test('checker pattern', async ({ page }) => {
  const logs = []
  page.on('console', msg => logs.push(msg.text()));
  await page.addScriptTag({ url: targetURL })
  const checkerMultilineLogs = logs.filter(log => log.match(/□■\s■□/))
  if (checkerMultilineLogs.length) {
    expect(checkerMultilineLogs.length).toBeGreaterThanOrEqual(1)
  } else {
    const oddCheckerRows = logs.filter(log => log.match(/(^□■)|(^□ ■ )|(^# )|(^ # )/))
    expect(oddCheckerRows.length).toBeGreaterThanOrEqual(2)
    const evenCheckerRows = logs.filter(log => log.match(/(^■□)|(^ ■ □)|(^ #)|(^   #)/))
    expect(evenCheckerRows.length).toBeGreaterThanOrEqual(2)
  }
})
test('three data types logged', async ({ page }) => {
  const logs = []
  page.on('console', msg => logs.push(msg.text()));
  await page.addScriptTag({ url: targetURL })
  const typeLogs = logs.filter(log => log.match('string|number|boolean|null|undefined'))
  expect(typeLogs.length).toBeGreaterThanOrEqual(3)
})
test('two numbers logged', async ({ page }) => {
  const logs = []
  page.on('console', msg => logs.push(msg.text()));
  await page.addScriptTag({ url: targetURL })
  const numbersLogged = logs.filter(log => {
    return !isNaN(Number(log))
  })
  expect(numbersLogged.length).toBeGreaterThanOrEqual(2)
})
test('string with quote mark inside', async ({ page }) => {
  const logs = []
  page.on('console', msg => logs.push(msg.text()));
  await page.addScriptTag({ url: targetURL })
  const stringsWithQuote = logs.filter(log => {
    return log.includes('"') || log.includes("'")
  })
  expect(stringsWithQuote.length).toBeGreaterThanOrEqual(1)
})
test('string with back slash inside', async ({ page }) => {
  const logs = []
  page.on('console', msg => logs.push(msg.text()));
  await page.addScriptTag({ url: targetURL })
  const stringsWithBackslash = logs.filter(log => {
    return log.includes('\\')
  })
  expect(stringsWithBackslash.length).toBeGreaterThanOrEqual(1)
})
