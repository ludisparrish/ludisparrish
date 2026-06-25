const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Global timeout per test
  timeout: 90000,

  // Timeout for expect() assertions
  expect: { timeout: 15000 },

  // Run tests sequentially — important for shared state (cart, login)
  fullyParallel: false,

  // Retry once on failure — handles flaky network/popup issues
  retries: 1,

  // Reporter: list in terminal + HTML report
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: 'https://automationexercise.com',
    headless: true,
    viewport: { width: 1280, height: 720 },

    // Timeout for each action (click, fill, etc.)
    actionTimeout: 15000,

    // Timeout for page navigations
    navigationTimeout: 30000,

    // Screenshot only when test fails
    screenshot: 'only-on-failure',

    // Video only when test fails
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
