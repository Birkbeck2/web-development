// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { findSubmissions, validateHtml, loadDoc } from '../test-utils.js'
import { parse, isAbsolute } from 'node:path'
import { readFileSync } from 'node:fs'
import url from 'node:url'
import { createHash } from 'node:crypto'
import sizeOf from 'image-size'

const submissionFile = 'trading-places.html'

describe(submissionFile, async () => {
  for await (const [coder, submission] of findSubmissions(__dirname, submissionFile)) {
    describe(coder, async () => {
      test('file named correctly', () => expect(submission).toBeTruthy())
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
        expect(header.textContent.toLowerCase()).toContain('collections')
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
      test('images have alt text', () => {
        const imgs = doc.querySelectorAll('img')
        const imgsWithAlt = Array.from(imgs).filter(img => img.alt)
        expect(imgsWithAlt).toHaveLength(3)
        imgsWithAlt.forEach(img => {
          imgsWithAlt.forEach(otherImg => {
            if (img !== otherImg) {
              expect(img.alt).not.toEqual(otherImg.alt)
            }
          })
        })
      })
      test('images have dimensions', () => {
        const imgs = doc.querySelectorAll('img')
        const imgsWithHeightAndWidth = Array.from(imgs).filter(img => {
          return img.height && img.width
        })
        expect(imgsWithHeightAndWidth).toHaveLength(3)
        imgsWithHeightAndWidth.forEach(img => {
          const imgUrl = new url.URL(img.src)
          const dimensions = sizeOf(imgUrl.pathname)
          expect(img.width).toEqual(dimensions.width)
          expect(img.height).toEqual(dimensions.height)
        })
      })
      test('images are in subfolder', () => {
        const imgs = doc.querySelectorAll('img')
        expect(Array.from(imgs).length).toBeGreaterThan(0)
        Array.from(imgs).forEach(img => {
          const pathObj = parse(img.getAttribute('src'))
          expect(pathObj.dir.length).toBeGreaterThan(1)
        })
      })
      test('image filepaths are relative', () => {
        const imgs = doc.querySelectorAll('img')
        expect(Array.from(imgs).length).toBeGreaterThan(0)
        Array.from(imgs).forEach(img => {
          expect(isAbsolute(img.getAttribute('src'))).toBeFalsy()
        })
      })
      test('links and filepaths are well formed', () => {
        const imgs = doc.querySelectorAll('img')
        expect(Array.from(imgs).length).toBeGreaterThan(0)
        Array.from(imgs).forEach(img => {
          expect(img.getAttribute('src')).not.toMatch(/ |_/)
        })
        const as = doc.querySelectorAll('a')
        expect(Array.from(as).length).toBeGreaterThan(0)
        Array.from(as).forEach(a => {
          const href = a.getAttribute('href')
          expect(href.length).toBeGreaterThan(0)
          console.log(href)
          console.log(href.length)
        })
      })
      test('images load correctly', async () => {
        const imgs = doc.querySelectorAll('img')
        expect(Array.from(imgs).length).toBeGreaterThan(0)
        const checksums = [
          '090147bda9b96bebacaf595bbcb0f142',
          '471ca16ecfc4c339ad699a6a618a233c',
          'f4e0ea63e8cb0823577481ebd59d0d43'
        ]
        Array.from(imgs).forEach(async img => {
          const imgUrl = new url.URL(img.src)
          const content = readFileSync(imgUrl.pathname)
          const hash = createHash('md5').update(content).digest('hex')
          expect(checksums).toContain(hash)
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
