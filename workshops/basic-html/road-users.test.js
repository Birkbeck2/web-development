// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { JSDOM } from 'jsdom'
import { findAnswers, validateHtml } from './workshops/test-utils.js'

const workshopName = 'basic-html'
const answerFile = 'road-users.html'

describe(answerFile, async () => {
  for await (const [coder, submission] of findAnswers(workshopName, answerFile)) {
    describe(coder, async () => {
      const doc = await JSDOM.fromFile(submission).then(dom => dom.window.document)
      test('HTML is valid', async () => {
        const result = await validateHtml(submission)
        expect(result.isValid).toBeTruthy()
      })
      test('title includes "road"', () => {
        const title = doc.querySelector('head > title')
        expect(title.textContent.toLowerCase()).toContain('road')
      })
      test('h1', () => expect(doc.querySelector('body > h1')).toBeTruthy())
      test('h1 includes "road"', () => {
        const h1 = doc.querySelector('body > h1')
        expect(h1.textContent.toLowerCase()).toContain('road')
      })
      test('h2', () => expect(doc.querySelector('body > h2')).toBeTruthy())
      test('h2 includes "rule"', () => {
        const h2 = doc.querySelector('body > h2')
        expect(h2.textContent.toLowerCase()).toContain('rule')
      })
      test('p', () => expect(doc.querySelector('body > p')).toBeTruthy())
      test('one p includes "considerate"', () => {
        const ps = doc.querySelectorAll('body > p')
        const psWithConsiderate = Array.from(ps).filter(p => {
          return p.textContent.toLowerCase().includes('considerate')
        })
        expect(psWithConsiderate).toHaveLength(1)
      })
    })
  }
})
