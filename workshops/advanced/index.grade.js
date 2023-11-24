import { test, expect } from '@playwright/test'
import { determineBaseURL } from '#test-utils'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})   // required because of nesting

const targetFile = 'index.html'  // the submission file to target
const targetURL = new URL(targetFile, baseURL).href

test('header contains h1', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('header')
  await expect(locator).toHaveText('h1');
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
  const locator = page.locator('ul.topnav li')
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

test('.dropdown-content set to display none', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.dropdown-content')
  await expect(locator).toHaveCSS('display', 'none');
})

test('.dropdown:hover set to display block', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.dropdown:hover')
  await expect(locator).toHaveCSS('display', 'block');
})

test('list class breadcrumb set to display inline', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.breadcrumb')
  await expect(locator).toHaveCSS('display', 'inline');
})

test('catsitting id image is positioned absolutely', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.catsitting')
  await expect(locator).toHaveCSS('position', 'absolute');
})

test('catsitting id image is positioned to right', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.catsitting')
  await expect(locator).toHaveCSS('right', '0px');
})

test('catFace id image is 300px', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.catsitting')
  await expect(locator).toHaveCSS('width', '300px');
})

test('catFace id image positioning', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.catsitting')
  await expect(locator).toHaveCSS('position', 'fixed');
})

test('ball of wool image width 600px', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.ballwool')
  await expect(locator).toHaveCSS('width', '600px');
})

test('ball of wool image relative positioning', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.ballwool')
  await expect(locator).toHaveCSS('position', 'relative');
})

test('butterfly image has z-index more than 0', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('.butterfly')
  await expect(locator).toHaveText('z-index');
})

test('div with mouse image has float', async ({ page }) => {
  await page.goto(targetURL)
  const locator = page.locator('div')
  await expect(locator).toHaveCSS('float', 'left');
})


