// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { findSubmissions, validateHtml, loadDoc } from '../test-utils.js'

const submissionFile = 'fruit-and-veg.html'

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
        expect(title.textContent.toLowerCase()).toContain('veg')
      })
      test('h1 used', () => expect(doc.querySelector('body h1')).toBeTruthy())
      test('h1 includes correct text', () => {
        const h1 = doc.querySelector('body h1')
        expect(h1.textContent.toLowerCase()).toContain('veg')
      })
      test('p used', () => expect(doc.querySelector('body p')).toBeTruthy())
      test('one p includes correct text', () => {
        const ps = doc.querySelectorAll('body p')
        const psWithConsiderate = Array.from(ps).filter(p => {
          return p.textContent.toLowerCase().includes('mould')
        })
        expect(psWithConsiderate).toHaveLength(1)
      })
      test('strong or b used', () => {
        const strongOrB = doc.querySelector('body p strong, body p b')
        expect(strongOrB).toBeTruthy()
      })
      test('one strong or b includes correct text', () => {
        const strongOrBs = doc.querySelectorAll('body p strong, body p b')
        const strongOrBsWithLeafy = Array.from(strongOrB).filter(strong => {
          return strong.textContent.toLowerCase().includes('leafy')
        })
        expect(strongOrBsWithLeafy).toHaveLength(1)
      })
    })
  }
})
