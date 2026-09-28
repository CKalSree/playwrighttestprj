import { test, expect } from '@playwright/test';

test.describe('Automation Testing Tools page validation', () => {

  test('Launch Chrome, open the URL, and validate the page is opened', async ({
    page,
  }) => {
    const targetUrl =
      'https://testguild.com/automation-testing-tools/';

    // Step 1: Open the webpage
    const response = await page.goto(targetUrl, {
      waitUntil: 'domcontentloaded',
    });

    // Step 2: Validate that the server returned a successful response
    expect(response, 'No response was received from the page').not.toBeNull();
    expect(
      response?.ok(),
      `Page returned HTTP status ${response?.status()}`
    ).toBeTruthy();

    // Step 3: Validate the final URL
    await expect(page).toHaveURL(targetUrl);

    // Step 4: Validate that the page body is displayed
    await expect(page.locator('body')).toBeVisible();

    // Step 5: Validate that the page has a non-empty title
    const pageTitle = await page.title();

    console.log(`Page title: ${pageTitle}`);
    console.log(`Current URL: ${page.url()}`);

    expect(pageTitle.trim().length).toBeGreaterThan(0);
  });

});