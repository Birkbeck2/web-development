import { opendir } from 'node:fs/promises'
import path from 'node:path'
import { existsSync, readFileSync } from 'node:fs'
import { rename, copyFile } from 'node:fs/promises'
import { JSDOM } from 'jsdom'
import yaml from 'yaml'
import AdmZip from 'adm-zip'
import validator from 'html-validator'
import playwrightConfig from '../playwright.config.js'

const showValidationErrors = true

async function extractZipAt (dir) {
  for await (const d of await opendir(dir)) {
    if (!d.name.startsWith('.') && d.name.endsWith('.zip')) {
      const zip = new AdmZip(path.join(dir, d.name))
      zip.extractAllTo(dir, true)
    }
  }
}

export async function * yieldDirectories (dir) {
  for await (const d of await opendir(dir)) {
    if (!d.name.startsWith('.')) {
      const entry = path.join(dir, d.name, '/')
      if (d.isDirectory()) {
        yield entry
      }
    }
  }
}

export async function * yieldFiles (dir) {
  for await (const d of await opendir(dir)) {
    if (!d.name.startsWith('.')) {
      const entry = path.join(dir, d.name)
      if (d.isFile()) {
        yield entry
      }
    }
  }
}

export async function * walk (dir) {
  for await (const d of await opendir(dir)) {
    if (!d.name.startsWith('.')) {
      const entry = path.join(dir, d.name)
      if (d.isDirectory()) yield * walk(entry)
      else if (d.isFile()) yield entry
    }
  }
}

function loadGradescopeMetadata (submissionDir) {
  const metadataFilename = path.join(submissionDir, 'submission_metadata.yml')
  if (existsSync(metadataFilename)) {
    const yamlMetadata = readFileSync(metadataFilename, 'utf8')
    const metadata = yaml.parse(yamlMetadata)
    return metadata
  } else {
    console.info('No Gradescope metadata file')
  }
}

function identifyCoder (submission, metadata) {
  const folder = submission.split(path.sep).pop()
  // console.info(folder)
  if (metadata && metadata[folder]) {
    // console.info(metadata[folder])
    return metadata[folder][':submitters'][0][':name']
  } else {
    if (folder.includes('-')) {
      return folder.split('-').pop()
    } else if (folder.includes('_')) {
      return folder.split('_').pop()
    }
  }
}

export async function loadDoc (submission) {
  try {
    const options = {
      resources: 'usable'
    }
    return await JSDOM.fromFile(submission, options).then(dom => dom.window.document)
  } catch (error) {
    const dom = new JSDOM('')
    return dom.window.document
  }
}

export async function validateHtml (filePath) {
  // console.info(filePath)
  const options = {
    validator: 'WHATWG',
    format: 'text',
    data: readFileSync(filePath, 'utf8')
  }
  try {
    const result = await validator(options)
    logValidationErrors(result, filePath)
    return result
  } catch (error) {
    console.info(error)
  }
}

function logValidationErrors (result, filePath) {
  if (!result.isValid && showValidationErrors) {
    for (const error of result.errors) {
      error.submissionFile = filePath
      console.error(JSON.stringify(error))
    }
  }
}

export async function propagateTestsToSubmissions () {
  const workshopsPath = path.parse(new URL(import.meta.url).pathname).dir
  for await (const workshopPath of yieldDirectories(workshopsPath)) {
    for await (const filePath of yieldFiles(workshopPath)) {
      if (filePath.endsWith('.grade.js')) {
        const gradePath = filePath
        // console.log(`Found test source ${gradePath}`)
        const testFile = path.parse(gradePath).base.replace('.grade.js', '.test.js')
        const submissionDir = path.join(workshopPath, 'submissions/')
        if (existsSync(submissionDir)) {
          for await (const submission of yieldDirectories(submissionDir)) {
            const testPath = path.join(submission, testFile)
            try {
              await copyFile(gradePath, testPath)
              if (existsSync(testPath)) {
                // console.log(`Updated ${testPath}`)
              } else {
                // console.log(`Copied to ${testPath}`)
              }
            } catch {
              console.error(`Could not copy ${gradePath} to ${testPath}`)
            }
          }
        }
      }
    }
  }
}

export async function renameSubmissionsByCoder () {
  // const workshopsPath = path.parse(new URL(import.meta.url).pathname).dir
  // for await (const workshopPath of yieldDirectories(workshopsPath)) {
  //   const submissionDir = await determineSubmissionDir(workshopPath)
  //   const metadata = loadGradescopeMetadata(submissionDir)
  //   if (existsSync(submissionDir) && metadata) {
  //     for await (const submission of yieldSubmissions('submissions')) {
  //       const coder = identifyCoder(submission, metadata)
  //       if (coder && metadata[coder]) {
  //         const namedFolder = coder.replaceAll(' ', '-')
  //         const numberedFolder = submission.split(path.sep).pop()
  //         const namedSubmission = submission.replace(numberedFolder, namedFolder)
  //         await rename(submission, namedSubmission)
  //       }
  //     }
  //   }
  // }
}

export function determineBaseURL (testURL) {
  const testFile = path.parse(testURL).base
  const submissionPath = testURL.split('/workshops/')[1].replace(testFile, '')
  return new URL(submissionPath, playwrightConfig.use.baseURL)
}
