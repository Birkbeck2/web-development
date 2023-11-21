import { test, expect } from '@playwright/test'
import { validateHtml, determineBaseURL } from '#test-utils'
import { AxeBuilder } from '@axe-core/playwright'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})

const targetFile = 'index.html'
const targetURL = new URL(targetFile, baseURL).href

test(`found '${targetFile}' ok`, async ({ page }) => {
  const response = await page.request.get(targetURL)
  await expect(response).toBeOK()
})
test('HTML is valid', async () => {
  const targetFilePath = new URL(targetFile, import.meta.url).pathname
  const result = await validateHtml(targetFilePath)
  expect(result.isValid).toBeTruthy()
})
test('Axe finds no WCAG 2.1 AA violations (50%)', async ({ page }, testInfo) => {
  await page.goto(targetURL)
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()
  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults.violations),
    contentType: 'application/json'
  })
  expect(accessibilityScanResults.violations).toEqual([])
})
test('form has method', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('form')).toHaveAttribute('method')
})
test('inputs for name', async ({ page }) => {
  await page.goto(targetURL)
  const locators = await page.locator('form input[type="text"]').all()
  expect(locators.length).toBeGreaterThanOrEqual(2)
})
test('input for email', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('form input[type="email"]')
  await expect(locator).toBeAttached()
})
test('input for message', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('form textarea')
  await expect(locator).toBeAttached()
})
test('appropriate names on each input', async ({ page }) => {
  await page.goto(targetURL)
  const names = []
  const locators = await page.locator('input[name], textarea[name]').all()
  expect(locators.length).toBeGreaterThanOrEqual(4)
  for (const locator of locators) {
    const name = await locator.getAttribute('name')
    expect(name).toMatch(/.+/)
    expect(names).not.toContain(name)
    names.push(name)
  }
})
test('button properly marked up', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('form button')
  await expect(locator).toHaveAttribute('type', 'submit')
  expect(await locator.textContent()).toMatch(/.+/)
})
