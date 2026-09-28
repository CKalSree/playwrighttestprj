import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: 'html',

  use: {
    // Launch locally installed Google Chrome
    channel: 'chrome',

    // Launch the browser in visible mode
    headless: false,

    // Capture screenshot when a test fails
    screenshot: 'only-on-failure',

    // Record trace when retrying a failed test
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
      },
    },
  ],
});