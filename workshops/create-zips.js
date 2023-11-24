import AdmZip from 'adm-zip'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { yieldDirectories } from '#test-utils'

const packageJsonPath = 'package.json'
const playwrightConfigPath = 'playwright.config.js'
const setupSh = 'setup.sh'
const runAutograder = 'run_autograder'
const zipBase = 'workshops'
const allWorkshopsPath = fileURLToPath(new URL(import.meta.url)).replace('create-zips.js', '')


for await (const workshopPath of yieldDirectories(allWorkshopsPath)) {
  const zip = new AdmZip()
  zip.addLocalFile(packageJsonPath)
  zip.addLocalFile(playwrightConfigPath)
  zip.addLocalFile(setupSh)
  zip.addLocalFile(runAutograder)
  for await (const d of await fs.opendir(workshopPath)) {
    if (
      !d.name.includes('submissions')
      && !d.name.includes('template-repo')
      && !d.name.endsWith('.zip')
    ) {
      const localPath = path.join(workshopPath, d.name)
      if (d.isFile() && !d.name.startsWith('.')) {
        const zipPath = path.join(zipBase, 'workshop')
        zip.addLocalFile(localPath, zipPath)
      } else if (d.isDirectory()) {
        const zipPath = path.join(zipBase, 'workshop', d.name)
        zip.addLocalFolder(localPath, zipPath)
      }
    }
  }
  for await (const d of await fs.opendir(allWorkshopsPath)) {
    if (d.isFile() && !d.name.endsWith('create-zips.js') && !d.name.startsWith('.')) {
      const localPath = path.join(allWorkshopsPath, d.name)
      const zipPath = zipBase
      zip.addLocalFile(localPath, zipPath)
    }
  }
  const workshopName = workshopPath.split(path.sep).at('-2')
  const zipDir = path.join(workshopPath, `${workshopName}.zip`)
  zip.writeZip(zipDir)
  console.info('Zipped ' + zipDir)
}
