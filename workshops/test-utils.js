import { opendir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { readFileSync } from 'node:fs'

const showValidationErrors = true

export async function * walk (dir) {
  for await (const d of await opendir(dir)) {
    if (!d.name.startsWith('.')) {
      const entry = join(dir, d.name)
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
    return join(workshopDir, 'submission')
  }
}

export async function * findSubmissions (workshopDir, submissionFile) {
  const submissionDir = await determineSubmissionDir(workshopDir)
  console.info(submissionDir)
  for await (const submission of walk(submissionDir)) {
    const coder = dirname(submission).split('-').pop()
    if (submission.endsWith(submissionFile)) yield [coder, submission]
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
    console.error(error)
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
