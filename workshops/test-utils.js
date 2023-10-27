import { opendir } from 'node:fs/promises'
import path from 'node:path'
import { readFileSync } from 'node:fs'
import { JSDOM } from 'jsdom'
import yaml from 'yaml'

const showValidationErrors = true

async function * getDirectories (dir) {
  for await (const d of await opendir(dir)) {
    if (!d.name.startsWith('.')) {
      const entry = path.join(dir, d.name)
      if (d.isDirectory()) yield entry
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

async function determineSubmissionDir (workshopDir) {
  try {
    await opendir('submission')
    return 'submission'
  } catch (error) {
    return path.join(workshopDir, 'submission')
  }
}

function loadGradescopeMetadata (submissionDir) {
  const metadataFilename = path.join(submissionDir, 'submission_metadata.yml')
  try {
    const yamlMetadata = readFileSync(metadataFilename, 'utf8')
    const metadata = yaml.parse(yamlMetadata)
    return metadata
  } catch (error) {
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

export async function * findSubmissions (workshopDir, submissionFile) {
  const submissionDir = await determineSubmissionDir(workshopDir)
  // console.info(submissionDir)
  const metadata = loadGradescopeMetadata(submissionDir)
  for await (const submission of getDirectories(submissionDir)) {
    const coder = identifyCoder(submission, metadata)
    let fileFound = false
    for await (const filename of walk(submission)) {
      const base = path.parse(filename).base
      if (base === submissionFile) {
        // console.info(filename)
        fileFound = true
        yield [coder, filename]
      }
    }
    if (!fileFound) yield [coder, '']
  }
}

export async function validateHtml (filePath) {
  const validator = require('html-validator')
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
      console.error(error)
    }
  }
}
