import { fileURLToPath } from 'node:url'
import { yieldDirectories, yieldFiles } from '#test-utils'
import path from 'node:path'
import { mkdir, access, copyFile } from 'node:fs/promises'

const allWorkshopsPath = fileURLToPath(new URL(import.meta.url)).replace('prepare-tests.js', '')

export default async function propagateGradeFileToTestFiles () {
  for await (const workshopPath of yieldDirectories(allWorkshopsPath)) {
    for await (const filePath of yieldFiles(workshopPath)) {
      if (filePath.endsWith('.grade.js')) {
        const gradePath = filePath
        console.log(`Found test source ${gradePath}`)
        const testFile = path.parse(gradePath).base.replace('.grade.js', '.test.js')
        const submissionDir = path.join(workshopPath, 'submissions', '/')
        try {
          await access(submissionDir)
        } catch {
          await mkdir(submissionDir)
          console.log(`Created ${submissionDir}`)
        }
        for await (const submission of yieldDirectories(submissionDir)) {
          const testPath = path.join(submission, testFile)
          try {
            await copyFile(gradePath, testPath)
            console.log(`Copied to ${testPath}`)
          } catch {
            console.error(`Could not copy ${gradePath} to ${testPath}`)
          }
        }
      }
    }
  }
}
