import { test, expect } from '@playwright/test'
import { determineBaseURL } from '#test-utils'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})

const targetFile = 'road-users.html'
const targetURL = new URL(targetFile, baseURL).href

test(`found '${targetFile}' ok`, async ({ page }) => {
  const response = await page.request.get(targetURL)
  await expect(response).toBeOK()
})
test('title includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page).toHaveTitle(/road|Road|Code|code/)
})
test('h1 used', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('body h1')).toBeAttached()
})
test('h1 includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('body h1')).toContainText(/road|Road/)
})
test('h2 used', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('body h1')).toBeAttached()
})
test('h2 includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('body h2')).toContainText(/rule|Rule/)
})
test('p used', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('body p').first()).toBeAttached()
})
test('one p includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(
    page.locator('body p').filter({ hasText: 'considerate'})
  ).toBeAttached()
})
