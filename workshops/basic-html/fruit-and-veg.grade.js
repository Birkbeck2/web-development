import { test, expect } from '@playwright/test'
import { determineBaseURL } from '#test-utils'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})

const targetFile = 'fruit-and-veg.html'
const targetURL = new URL(targetFile, baseURL).href

test(`found '${targetFile}' ok`, async ({ page }) => {
  const response = await page.request.get(targetURL)
  await expect(response).toBeOK()
})
test('title includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page).toHaveTitle(/veg|Veg/)
})
test('h1 used', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('body h1')).toBeAttached()
})
test('h1 includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('body h1')).toContainText(/veg|Veg/)
})
test('p used', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page.locator('body p').first()).toBeAttached()
})
test('one p includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(
    page.locator('body p').filter({ hasText: 'mould'})
  ).toBeAttached()
})
test('strong or b used', async ({ page }) => {
  await page.goto(targetURL)
  await expect(
    page.locator('body p strong, body p b').first()
  ).toBeAttached()
})
test('one strong or b includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(
    page.locator('body p strong, body p b').filter({ hasText: 'leafy'})
  ).toBeAttached()
})
