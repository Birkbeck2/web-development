import path from 'node:path'

export default {
  watch: ['./public/sandbox/**/index.html'],
  load(watchedFiles) {
    return watchedFiles.map((filepath) => {
      const parsedPath = path.parse(filepath)
      const sandboxName = parsedPath.dir.split(path.sep).pop()
      const renderedPath = `./sandbox/${sandboxName}/index.html`
      const codePath = `https://github.com/Birkbeck2/web-development/tree/main/public/sandbox/${sandboxName}`
      return {
        text: sandboxName,
        link: renderedPath,
        codePath: codePath,
      }
    })
  }
}
