// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { findSubmissions, validateHtml, loadDoc, hasUniqueAttribute } from '../test-utils.js'

const submissionFile = 'email-form.html'

describe(submissionFile, async () => {
  for await (const [coder, submission] of findSubmissions(__dirname, submissionFile)) {
    describe(coder, async () => {
      test(`file named '${submissionFile}'`, () => expect(submission).toBeTruthy())
      const doc = await loadDoc(submission)
      test('HTML is valid', async () => {
        const result = await validateHtml(submission)
        expect(result.isValid).toBeTruthy()
      })
      const form = doc.querySelector('body form')
      test('form has method', () => {
        expect(form.getAttribute('method').toLowerCase()).toContain('post')
      })
      const nameInputs = doc.querySelectorAll('form input[type="text"]')
      test('inputs for name', () => {
        expect(nameInputs.length).toBeGreaterThanOrEqual(2)
      })
      const emailInput = doc.querySelector('form input[type="email"]')
      test('input for email', () => {
        expect(emailInput).toBeTruthy()
      })
      const textarea = doc.querySelector('form textarea')
      test('input for message', () => {
        expect(textarea).toBeTruthy()
      })
      const inputsWithName = doc.querySelectorAll('input[name], textarea[name]')
      test('appropriate names on each input', () => {
        expect(inputsWithName.length).toBeGreaterThanOrEqual(4)
        Array.from(inputsWithName).forEach(input => {
          expect(input.name).not.toMatch(/ /)
          expect(hasUniqueAttribute(input, 'name', inputsWithName)).toBeTruthy()
        })
      })
      const labels = doc.querySelectorAll('form label')
      const labelFors = Array.from(labels).map(label => label.getAttribute('for'))
      test('labels for each input', () => {
        expect(labels.length).toBeGreaterThanOrEqual(4)
        Array.from(labels).forEach(label => {
          expect(label.textContent.length).toBeGreaterThan(0)
        })
      })
      test('name inputs have labels', () => {
        Array.from(nameInputs).forEach(input => {
          expect(labelFors).toContain(input.getAttribute('id'))
        })
      })
      test('email input has label', () => {
        expect(labelFors).toContain(emailInput.getAttribute('id'))
      })
      test('message input has label', () => {
        expect(labelFors).toContain(textarea.getAttribute('id'))
      })
      test('button properly marked up', () => {
        const button = doc.querySelector('form button')
        expect(button.type).toBe('submit')
        expect(button.textContent.length).toBeGreaterThan(0)
      })
    })
  }
})
