import AdmZip from 'adm-zip'
import { cwd } from 'node:process'
import { opendir } from 'node:fs/promises'
import { join } from 'node:path'

const workshopsDir = join(cwd(), 'workshops')
const testUtilsPath = join(cwd(), 'workshops', 'test-utils.js')
const packageJsonPath = join(cwd(), 'package.json')
const gradescopeDir = join(cwd(), 'gradescope')

for await (const workshop of await opendir(workshopsDir)) {
  if (workshop.isDirectory()) {
    const zip = new AdmZip()
    const workshopDir = join(workshopsDir, workshop.name)
    for await (const f of await opendir(workshopDir)) {
      if (!f.name.includes('submission') && !f.name.endsWith('.zip')) {
        const absPath = join(workshopDir, f.name)
        if (f.isFile()) zip.addLocalFile(absPath, workshop.name)
        else if (f.isDirectory()) zip.addLocalFolder(absPath, join(workshop.name, f.name))
      }
      zip.addLocalFile(testUtilsPath)
      zip.addLocalFile(packageJsonPath)
      for await (const f of await opendir(gradescopeDir)) {
        if (!f.name.endsWith('create-zips.js') && !f.name.endsWith('results.json')) {
          const absPath = join(gradescopeDir, f.name)
          if (f.isFile()) zip.addLocalFile(absPath)
        }
      }
    }
    const zipDir = join(workshopDir, `${workshop.name}.zip`)
    zip.writeZip(zipDir)
    console.info('Zipped ' + zipDir)
  }
}
