import { cwd } from 'node:process'
import { opendir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { readFileSync } from 'node:fs'

const showValidationErrors = true

async function * walk (dir) {
  for await (const d of await opendir(dir)) {
    if (!d.name.startsWith('.')) {
      const entry = join(dir, d.name)
      if (d.isDirectory()) yield * walk(entry)
      else if (d.isFile()) yield entry
    }
  }
}

export async function * findAnswers (workshopName, answerFile) {
  const answerDir = join(cwd(), 'workshops', workshopName, 'answers')
  for await (const submission of walk(answerDir)) {
    const coder = dirname(submission).split('-').pop()
    if (submission.endsWith(answerFile)) yield [coder, submission]
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
      error.answerFile = filePath
      console.error(error)
    }
  }
}
