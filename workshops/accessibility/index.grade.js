import { test, expect } from '@playwright/test'
import { validateHtml, determineBaseURL } from '#test-utils'
import { AxeBuilder } from '@axe-core/playwright'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})

const targetFile = 'index.html'
const targetURL = new URL(targetFile, baseURL).href

// test(`found '${targetFile}' ok`, async ({ page }) => {
//   const response = await page.request.get(targetURL)
//   await expect(response).toBeOK()
// })
// test('HTML is valid', async () => {
//   const targetFilePath = new URL(targetFile, import.meta.url).pathname
//   const result = await validateHtml(targetFilePath)
//   expect(result.isValid).toBeTruthy()
// })
test('Axe detects no WCAG 2.2 violations', async ({ page }, testInfo) => {
  await page.goto(targetURL)
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults.violations),
    contentType: 'text/plain'
  })
  expect(accessibilityScanResults.violations).toEqual([])
});
// test('Axe detects no accessibility issues', async ({ page }) => {
//   await page.goto(targetURL)
//   const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
//   expect(accessibilityScanResults.violations).toEqual([])
// });
// const form = doc.querySelector('body form')
// test('form has method', () => {
//   expect(form.getAttribute('method').toLowerCase()).toContain('post')
// })
// const nameInputs = doc.querySelectorAll('form input[type="text"]')
// test('inputs for name', () => {
//   expect(nameInputs.length).toBeGreaterThanOrEqual(2)
// })
// const emailInput = doc.querySelector('form input[type="email"]')
// test('input for email', () => {
//   expect(emailInput).toBeTruthy()
// })
// const textarea = doc.querySelector('form textarea')
// test('input for message', () => {
//   expect(textarea).toBeTruthy()
// })
// const inputsWithName = doc.querySelectorAll('input[name], textarea[name]')
// test('appropriate names on each input', () => {
//   expect(inputsWithName.length).toBeGreaterThanOrEqual(4)
//   Array.from(inputsWithName).forEach(input => {
//     expect(input.name).not.toMatch(/ /)
//     expect(hasUniqueAttribute(input, 'name', inputsWithName)).toBeTruthy()
//   })
// })
// const labels = doc.querySelectorAll('form label')
// const labelFors = Array.from(labels).map(label => label.getAttribute('for'))
// test('labels for each input', () => {
//   expect(labels.length).toBeGreaterThanOrEqual(4)
//   Array.from(labels).forEach(label => {
//     expect(label.textContent.length).toBeGreaterThan(0)
//   })
// })
// test('name inputs have labels', () => {
//   Array.from(nameInputs).forEach(input => {
//     expect(labelFors).toContain(input.getAttribute('id'))
//   })
// })
// test('email input has label', () => {
//   expect(labelFors).toContain(emailInput.getAttribute('id'))
// })
// test('message input has label', () => {
//   expect(labelFors).toContain(textarea.getAttribute('id'))
// })
// test('button properly marked up', () => {
//   const button = doc.querySelector('form button')
//   expect(button.type).toBe('submit')
//   expect(button.textContent.length).toBeGreaterThan(0)
// })
