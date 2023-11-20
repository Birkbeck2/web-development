import { test, expect } from '@playwright/test'
import { validateHtml, determineBaseURL } from '#test-utils'
import path from 'node:path'
import { createHash } from 'node:crypto'
import sizeOf from 'image-size'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})

const targetFile = 'trading-places.html'
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
test('title includes correct text', async ({ page }) => {
  await page.goto(targetURL)
  await expect(page).toHaveTitle(/trading|Trading/)
})
test('top page region uses semantic element', async ({ page }) => {
  await page.goto(targetURL)
  await expect(
    page.locator('body header, body nav').filter({ hasText: 'collections'}).first()
  ).toBeAttached()
})
test('middle page region uses semantic element', async ({ page }) => {
  await page.goto(targetURL)
  await expect(
    page.locator('body main').filter({ hasText: 'gallery'})
  ).toBeAttached()
  await expect(
    page.locator('body main').filter({ hasText: 'restaurant'})
  ).toBeAttached()
})
test('bottom page region uses semantic element', async ({ page }) => {
  await page.goto(targetURL)
  await expect(
    page.locator('body footer').filter({ hasText: 'expertise'})
  ).toBeAttached()
})
test('images load', async ({ page }) => {
  await page.goto(targetURL)
  for (const locator of await page.locator('img').all()) {
    const response = await page.request.get(await locator.getAttribute('src'))
    await expect(response).toBeOK()
  }
})
test('image files are correct', async ({ page }) => {
  await page.goto(targetURL)
  const checksums = [
    '090147bda9b96bebacaf595bbcb0f142',
    '471ca16ecfc4c339ad699a6a618a233c',
    'f4e0ea63e8cb0823577481ebd59d0d43'
  ]
  for (const locator of await page.locator('img').all()) {
    const response = await page.request.get(await locator.getAttribute('src'))
    const hash = createHash('md5').update(await response.body()).digest('hex')
    expect(checksums).toContain(hash)
  }
})
test('images have alt text', async ({ page }) => {
  await page.goto(targetURL)
  const altTexts = []
  for (const locator of await page.locator('img').all()) {
    const alt = await locator.getAttribute('alt')
    expect(alt).toMatch(/.+/)
    expect(altTexts).not.toContain(alt)
    altTexts.push(alt)
  }
})
test('images have dimensions', async ({ page }) => {
  await page.goto(targetURL)
  for (const locator of await page.locator('img').all()) {
    expect(await locator.getAttribute('height')).toMatch(/.+/)
    expect(await locator.getAttribute('width')).toMatch(/.+/)
  }
})
test('images have correct dimensions', async ({ page }) => {
  await page.goto(targetURL)
  for (const locator of await page.locator('img').all()) {
    const response = await page.request.get(await locator.getAttribute('src'))
    const dimensions = sizeOf(await response.body())
    expect(await locator.getAttribute('height')).toBe(dimensions.height.toString())
    expect(await locator.getAttribute('width')).toBe(dimensions.width.toString())
  }
})
test('images are in subfolder', async ({ page }) => {
  await page.goto(targetURL)
  for (const locator of await page.locator('img').all()) {
    const pathObj = path.parse(await locator.getAttribute('src'))
    expect(pathObj.dir.length).toBeGreaterThan(1)
  }
})
test('image filepaths are relative', async ({ page }) => {
  await page.goto(targetURL)
  for (const locator of await page.locator('img').all()) {
    expect(path.isAbsolute(await locator.getAttribute('src'))).toBeFalsy()
  }
})
test('links and filepaths are well formed', async ({ page }) => {
  await page.goto(targetURL)
  for (const locator of await page.locator('img').all()) {
    expect(await locator.getAttribute('src')).not.toMatch(/ |_/)
  }
  for (const locator of await page.locator('a').all()) {
    expect(await locator.getAttribute('href')).toMatch(/.+/)
  }
})
test('links in the navigation bar', async ({ page }) => {
  await page.goto(targetURL)
  const as = await page.locator('nav a').all()
  expect(Array.from(as).length).toBeGreaterThanOrEqual(5)
})
test('links in the gallery', async ({ page }) => {
  await page.goto(targetURL)
  const as = await page.locator('main a').all()
  expect(Array.from(as).length).toBeGreaterThanOrEqual(3)
})
test('some other semantic elements used', async ({ page }) => {
  await page.goto(targetURL)
  await expect(
    page.locator('nav ul, main h2, main section, main article, main figure, main caption').first()
  ).toBeAttached()
})
