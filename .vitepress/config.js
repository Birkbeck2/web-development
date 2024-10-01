import { defineConfig } from 'vitepress'
import outline from '../outline.data'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Web Development',
  lang: 'en-GB',
  lastUpdated: true,
  description: 'Course materials for Web Development and User Experience, a module in the Birkbeck School of Creative Arts, Culture and Communication',
  base: '/web-development/',
  srcExclude: ['**/*README.md', 'LICENSE.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lectures', link: '/lectures/index.html' },
      { text: 'Workshops', link: '/workshops/index.html' },
      { text: 'Sandboxes', link: '/sandboxes.html' },
      { text: 'Projects', link: '/projects.html' },
      { text: 'Moodle', link: 'https://moodle.bbk.ac.uk/my/' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: outline.load().data,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Birkbeck2/web-development'
      }
    ],
    footer: {
      message: 'Content CC BY 4.0 | Code AGPL 3.0',
      copyright: 'Copyright Birkbeck, University of London'
    }
  }
})
