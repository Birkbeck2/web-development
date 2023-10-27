// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { findSubmissions, validateHtml, loadDoc } from '../test-utils.js'

const submissionFile = 'road-users.html'

describe(submissionFile, async () => {
  for await (const [coder, submission] of findSubmissions(__dirname, submissionFile)) {
    describe(coder, async () => {
      test(`file named '${submissionFile}'`, () => expect(submission).toBeTruthy())
      const doc = await loadDoc(submission)
      // Turning this test off as it's week one
      // but students don't know about the lang attribute yet
      // test('HTML is valid', async () => {
      //   const result = await validateHtml(submission)
      //   expect(result.isValid).toBeTruthy()
      // })
      test('title includes correct text', () => {
        const title = doc.querySelector('head title')
        expect(title.textContent.toLowerCase()).toMatch(/road|code/)
      })
      test('h1 used', () => expect(doc.querySelector('body h1')).toBeTruthy())
      test('h1 includes correct text', () => {
        const h1 = doc.querySelector('body h1')
        expect(h1.textContent.toLowerCase()).toContain('road')
      })
      test('h2 used', () => expect(doc.querySelector('body h2')).toBeTruthy())
      test('h2 includes correct text', () => {
        const h2 = doc.querySelector('body h2')
        expect(h2.textContent.toLowerCase()).toContain('rule')
      })
      test('p used', () => expect(doc.querySelector('body p')).toBeTruthy())
      test('one p includes correct text', () => {
        const ps = doc.querySelectorAll('body p')
        const psWithConsiderate = Array.from(ps).filter(p => {
          return p.textContent.toLowerCase().includes('considerate')
        })
        expect(psWithConsiderate).toHaveLength(1)
      })
    })
  }
})
