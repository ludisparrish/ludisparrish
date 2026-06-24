const { test, expect } = require('@playwright/test');

// Helper — dismiss any overlay or popup blocking the page
async function dismissPopups(page) {
  // Cookie consent popup
  try {
    const consentBtn = page.locator('button.fc-button.fc-cta-consent');
    await consentBtn.waitFor({ state: 'visible', timeout: 5000 });
    await consentBtn.click();
    await page.waitForTimeout(500);
  } catch {
    // no popup — continue
  }

  // Ad overlay — click outside or close button
  try {
    const adClose = page.locator('#dismiss-button, .adsbygoogle-noablate');
    if (await adClose.isVisible({ timeout: 2000 })) {
      await adClose.click();
    }
  } catch {
    // no ad — continue
  }
}

test.describe('Registration', () => {

  test('Successful registration with valid data', async ({ page }) => {
    const email = `testuser${Date.now()}@test.com`;

    await page.goto('/');
    await dismissPopups(page);

    // Navigate to login page directly to avoid popup issues
    await page.goto('/login');
    await dismissPopups(page);

    // Wait for signup form to be ready
    await page.waitForSelector('input[data-qa="signup-name"]', { timeout: 15000 });

    // Fill signup form
    await page.fill('input[data-qa="signup-name"]', 'PlaywrightUser');
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');

    // Account info form
    await page.waitForSelector('#id_gender1', { timeout: 15000 });
    await page.click('#id_gender1');
    await page.fill('input[data-qa="password"]', 'Test1234!');
    await page.selectOption('select[data-qa="days"]', '1');
    await page.selectOption('select[data-qa="months"]', 'January');
    await page.selectOption('select[data-qa="years"]', '1990');

    // Address
    await page.fill('input[data-qa="first_name"]', 'John');
    await page.fill('input[data-qa="last_name"]', 'Doe');
    await page.fill('input[data-qa="address"]', '123 Main St');
    await page.selectOption('select[data-qa="country"]', 'United States');
    await page.fill('input[data-qa="state"]', 'California');
    await page.fill('input[data-qa="city"]', 'Los Angeles');
    await page.fill('input[data-qa="zipcode"]', '90001');
    await page.fill('input[data-qa="mobile_number"]', '1234567890');

    await page.click('button[data-qa="create-account"]');

    // Verify account created
    await expect(page.locator('h2[data-qa="account-created"]')).toBeVisible({ timeout: 15000 });
  });

  test('Registration with already registered email shows error', async ({ page }) => {
    await page.goto('/login');
    await dismissPopups(page);

    await page.waitForSelector('input[data-qa="signup-name"]', { timeout: 15000 });

    await page.fill('input[data-qa="signup-name"]', 'TestUser');
    await page.fill('input[data-qa="signup-email"]', 'testuser01@test.com');
    await page.click('button[data-qa="signup-button"]');

    await expect(
      page.locator('p:has-text("Email Address already exist!")')
    ).toBeVisible({ timeout: 10000 });
  });

});