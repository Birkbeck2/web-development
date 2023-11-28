import fs from 'node:fs/promises'
import { test, expect } from '@playwright/test'
import { validateHtml, determineBaseURL } from '#test-utils'
import git from 'isomorphic-git'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})

const readmeTargetFile = 'README.md'

const targetPath = fileURLToPath(new URL(import.meta.url))
const targetDir = targetPath.split(path.sep).slice(0, -1).join(path.sep)
const readme = path.join(targetDir, readmeTargetFile)

test('Git repository found', async () => {
  expect(await git.log({fs, dir: targetDir}))
})

for (const coder of ['a', 'b']) {
  const targetFile = `${coder}.html`
  const targetURL = new URL(targetFile, baseURL).href
  const targetPath = path.join(targetDir, targetFile)
  test(`found '${targetFile}' ok`, async ({ page }) => {
    const response = await page.request.get(targetURL)
    await expect(response).toBeOK()
  })
  test(`HTML is valid in ${targetFile}`, async () => {
    const result = await validateHtml(targetPath)
    expect(result.isValid).toBeTruthy()
  })
  test(`${targetFile} was modified by at least 2 people (worth x3 points)`, async ({}, testInfo) => {
    await testInfo.attach('autograder-points', {
      body: JSON.stringify({'points': 3}),
      contentType: 'application/json'
    })
    const commits = await git.log({fs, dir: targetDir, filepath: targetFile})
    const committers = new Set(commits.map(commit => commit.commit.committer.email))
    expect(committers.size).toBeGreaterThanOrEqual(2)
  })
  test(`${targetFile} has an email link`, async ({ page }) => {
    await page.goto(targetURL)
    const locator = page.locator('a[href^="mailto:"]')
    await expect(locator).toBeAttached()
  })
  test(`coder ${coder} made at least 2 local commits (worth x3 points)`, async ({ page }, testInfo) => {
    await testInfo.attach('autograder-points', {
      body: JSON.stringify({'points': 3}),
      contentType: 'application/json'
    })
    await page.goto(targetURL)
    const locator = page.locator('a[href^="mailto:"]')
    const email = await locator.getAttribute('href').then(attr => attr.replace('mailto:', ''))
    const commits = await git.log({fs, dir: targetDir})
    const coderCommits = commits.filter(commit => commit.commit.committer.email === email)
    expect(coderCommits.length).toBeGreaterThanOrEqual(2)
  })
  test(`${targetFile} has a GitHub Pages link`, async ({ page }) => {
    await page.goto(targetURL)
    const locator = page.locator('a[href*=".github.io"]')
    await expect(locator).toBeAttached()
  })
}

test('at least two merges (worth x6 points)', async ({}, testInfo) => {
  await testInfo.attach('autograder-points', {
    body: JSON.stringify({'points': 6}),
    contentType: 'application/json'
  })
  const commits = await git.log({fs, dir: targetDir})
  const merges = commits.filter(commit => commit.commit.parent.length > 1)
  expect(merges.length).toBeGreaterThanOrEqual(2)
})
test('at least two merges were done on GitHub', async () => {
  const commits = await git.log({fs, dir: targetDir})
  const merges = commits.filter(commit => commit.commit.committer.email.includes('github.com'))
  expect(merges.length).toBeGreaterThanOrEqual(2)
})
test('README.md file', async () => {
  expect(await fs.access(readme))
})
