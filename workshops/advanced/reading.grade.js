import { test, expect } from '@playwright/test'
import { determineBaseURL } from '#test-utils'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})   // required because of nesting

const targetFile = 'reading.html'  // the submission file to target
const targetURL = new URL(targetFile, baseURL).href

test('header contains h1', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('header > h1')
  await expect(locator).toContainText('website', {ignoreCase: true});
})

test('nav contains ul with class topnav', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('nav ul.topnav')
  await expect(locator).toHaveCSS('list-style-type', 'none');
})

// Example test
test('ul display set to inline', async ({ page }) => {
  // Go to the page in Chrome (there’s a real browser running in the background)
  await page.goto(targetURL)

  // Define a CSS locator
  const locator = page.locator('ul.topnav > li').nth(1)
  // Each locator is a Promise that is resolved either with
  // await or with a method like `toContainText` below

  // Tell playwright you expect the h1 to have case-insensitive 'veg'
  await expect(locator).toHaveCSS('display', 'inline');
})

test('.dropdown set to display inline-block', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.dropdown')
  await expect(locator).toHaveCSS('display', 'inline-block');
})

test('.dropdown-content set to display none', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.dropdown-content')
  await expect(locator).toHaveCSS('display', 'none');
})

test('list class breadcrumb list item set to display inline', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('ul.breadcrumb > li')
  await expect(locator).toHaveCSS('display', 'inline');
})