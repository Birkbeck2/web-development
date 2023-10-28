// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { findSubmissions, validateHtml, loadDoc, hasUniqueAttribute } from '../test-utils.js'
import path from 'node:path'
import { readFileSync } from 'node:fs'
import url from 'node:url'
import { createHash } from 'node:crypto'
import sizeOf from 'image-size'

const submissionFile = 'trading-places.html'

describe(submissionFile, async () => {
  for await (const [coder, submission] of findSubmissions(__dirname, submissionFile)) {
    describe(coder, async () => {
      test(`file named '${submissionFile}'`, () => expect(submission).toBeTruthy())
      const doc = await loadDoc(submission)
      test('HTML is valid', async () => {
        const result = await validateHtml(submission)
        expect(result.isValid).toBeTruthy()
      })
      test('title includes correct text', () => {
        const title = doc.querySelector('head title')
        expect(title.textContent.toLowerCase()).toContain('trading')
      })
      test('top page region uses semantic element', () => {
        const header = doc.querySelector('body header')
        const nav = doc.querySelector('body nav')
        const headerAndNav = header.textContent + nav.textContent
        expect(headerAndNav.toLowerCase()).toContain('collections')
      })
      test('middle page region uses semantic element', () => {
        const main = doc.querySelector('body main')
        expect(main.textContent.toLowerCase()).toContain('gallery')
        expect(main.textContent.toLowerCase()).toContain('restaurant')
      })
      test('bottom page region uses semantic element', () => {
        const footer = doc.querySelector('body footer')
        expect(footer.textContent.toLowerCase()).toContain('expertise')
      })
      const imgs = Array.from(doc.querySelectorAll('img'))
      test('images load', async () => {
        expect(imgs.length).toBeGreaterThan(0)
        Array.from(imgs).forEach(img => {
          const imgUrl = new url.URL(img.src)
          expect(() => readFileSync(imgUrl.pathname)).not.toThrowError()
        })
      })
      test('image files are correct', async () => {
        expect(imgs.length).toBeGreaterThan(0)
        const checksums = [
          '090147bda9b96bebacaf595bbcb0f142',
          '471ca16ecfc4c339ad699a6a618a233c',
          'f4e0ea63e8cb0823577481ebd59d0d43'
        ]
        Array.from(imgs).forEach(img => {
          const imgUrl = new url.URL(img.src)
          expect(() => readFileSync(imgUrl.pathname)).not.toThrowError()
          const content = readFileSync(imgUrl.pathname)
          const hash = createHash('md5').update(content).digest('hex')
          expect(checksums).toContain(hash)
        })
      })
      const imgsWithAlt = Array.from(doc.querySelectorAll('img[alt]'))
      test('images have alt text', () => {
        expect(imgsWithAlt).toHaveLength(3)
        imgsWithAlt.forEach(img => {
          expect(hasUniqueAttribute(img, 'alt', imgsWithAlt)).toBeTruthy()
        })
      })
      const imgsWithHeightAndWidth = Array.from(
        doc.querySelectorAll('img[height][width]')
      )
      test('images have dimensions', () => {
        expect(imgsWithHeightAndWidth).toHaveLength(3)
      })
      test('images have correct dimensions', () => {
        imgsWithHeightAndWidth.forEach(img => {
          const imgUrl = new url.URL(img.src)
          const dimensions = sizeOf(imgUrl.pathname)
          expect(img.width).toBe(dimensions.width)
          expect(img.height).toBe(dimensions.height)
        })
      })
      test('images are in subfolder', () => {
        expect(imgs.length).toBeGreaterThan(0)
        imgs.forEach(img => {
          const pathObj = path.parse(img.getAttribute('src'))
          expect(pathObj.dir.length).toBeGreaterThan(1)
        })
      })
      test('image filepaths are relative', () => {
        expect(imgs.length).toBeGreaterThan(0)
        imgs.forEach(img => {
          expect(path.isAbsolute(img.getAttribute('src'))).toBeFalsy()
        })
      })
      test('links and filepaths are well formed', () => {
        expect(imgs.length).toBeGreaterThan(0)
        imgs.forEach(img => {
          expect(img.getAttribute('src')).not.toMatch(/ |_/)
        })
        const as = Array.from(doc.querySelectorAll('a'))
        expect(as.length).toBeGreaterThan(0)
        as.forEach(a => {
          const href = a.getAttribute('href')
          expect(href.length).toBeGreaterThan(0)
        })
      })
      test('links in the top region of the page', () => {
        const navAs = doc.querySelectorAll('nav a')
        expect(Array.from(navAs).length).toBeGreaterThanOrEqual(5)
      })
      test('links in the middle region of the page', () => {
        const galleryAs = doc.querySelectorAll('main a')
        expect(Array.from(galleryAs).length).toBeGreaterThanOrEqual(3)
      })
      test('some other semantic elements used', () => {
        expect(
          (
            doc.querySelector('nav ul')
          ) || (
            doc.querySelector('main h2')
          ) || (
            doc.querySelector('main section')
          ) || (
            doc.querySelector('main article')
          ) || (
            doc.querySelector('main figure')
          ) || (
            doc.querySelector('main caption')
          )
        ).toBeTruthy()
      })
    })
  }
})
