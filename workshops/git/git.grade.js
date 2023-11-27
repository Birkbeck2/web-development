import fs from 'node:fs/promises'
import { test, expect } from '@playwright/test'
import { validateHtml, determineBaseURL } from '#test-utils'
import git from 'isomorphic-git'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})

const aTargetFile = 'a.html'
const bTargetFile = 'b.html'
const readmeTargetFile = 'README.md'

const targetPath = fileURLToPath(new URL(import.meta.url))
const targetDir = targetPath.split(path.sep).slice(0, -1).join(path.sep)
const aTargetURL = new URL(aTargetFile, baseURL).href
const aTargetPath = path.join(targetDir, aTargetFile)
const bTargetURL = new URL(bTargetFile, baseURL).href
const bTargetPath = path.join(targetDir, bTargetFile)
const readme = path.join(targetDir, readmeTargetFile)

test('Git repository found', async () => {
  expect(await git.log({fs, dir: targetDir}))
})
test(`found '${aTargetFile}' ok`, async ({ page }) => {
  const response = await page.request.get(aTargetURL)
  await expect(response).toBeOK()
})
test(`HTML is valid in ${aTargetFile}`, async () => {
  const result = await validateHtml(aTargetPath)
  expect(result.isValid).toBeTruthy()
})
test(`${aTargetFile} was modified by at least 2 people`, async () => {
  const commits = await git.log({fs, dir: targetDir, filepath: aTargetFile})
  const committers = new Set(commits.map(commit => commit.commit.committer.email))
  expect(committers.size).toBeGreaterThanOrEqual(2)
})
test(`${aTargetFile} has an email link`, async ({ page }) => {
  await page.goto(aTargetURL)
  const locator = page.locator('a[href^="mailto:"]')
  await expect(locator).toBeAttached()
})
test('coder a made at least 2 local commits', async ({ page }) => {
  await page.goto(aTargetURL)
  const locator = page.locator('a[href^="mailto:"]')
  const email = await locator.getAttribute('href').then(attr => attr.replace('mailto:', ''))
  const commits = await git.log({fs, dir: targetDir})
  const coderCommits = commits.filter(commit => commit.commit.committer.email === email)
  expect(coderCommits.length).toBeGreaterThanOrEqual(2)
})
test(`${aTargetFile} has a GitHub Pages link`, async ({ page }) => {
  await page.goto(aTargetURL)
  const locator = page.locator('a[href*=".github.io"]')
  await expect(locator).toBeAttached()
})

test(`found '${bTargetFile}' ok`, async ({ page }) => {
  const response = await page.request.get(bTargetURL)
  await expect(response).toBeOK()
})
test(`HTML is valid in ${bTargetFile}`, async () => {
  const result = await validateHtml(bTargetPath)
  expect(result.isValid).toBeTruthy()
})
test(`${bTargetFile} was modified by at least 2 people`, async () => {
  const commits = await git.log({fs, dir: targetDir, filepath: bTargetFile})
  const committers = new Set(commits.map(commit => commit.commit.committer.email))
  expect(committers.size).toBeGreaterThanOrEqual(2)
})
test(`${bTargetFile} has an email link`, async ({ page }) => {
  await page.goto(bTargetURL)
  const locator = page.locator('a[href^="mailto:"]')
  await expect(locator).toBeAttached()
})
test('coder b made at least 2 local commits', async ({ page }) => {
  await page.goto(bTargetURL)
  const locator = page.locator('a[href^="mailto:"]')
  const email = await locator.getAttribute('href').then(attr => attr.replace('mailto:', ''))
  const commits = await git.log({fs, dir: targetDir})
  const coderCommits = commits.filter(commit => commit.commit.committer.email === email)
  expect(coderCommits.length).toBeGreaterThanOrEqual(2)
})
test(`${bTargetFile} has a GitHub Pages link`, async ({ page }) => {
  await page.goto(bTargetURL)
  const locator = page.locator('a[href*=".github.io"]')
  await expect(locator).toBeAttached()
})
test('at least two merges', async () => {
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
