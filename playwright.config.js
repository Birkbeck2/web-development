import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './workshops',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['json', { outputFile: './results/results.json' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://127.0.0.1:5173/workshops/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      use: {
        browserName: 'chromium',
      }
    }
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm exec vite',
    url: 'http://127.0.0.1:5173/workshops/test-server-landing.html',
    reuseExistingServer: !process.env.CI,
  },
  globalSetup: './workshops/prepare-tests.js',
  // Was not waiting for report to be written
  // globalTeardown: './workshops/modify-results.js',
})
