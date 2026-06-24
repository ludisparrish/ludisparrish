const { test, expect } = require('@playwright/test');

async function dismissPopups(page) {
  // Cookie consent
  try {
    const consentBtn = page.locator('button.fc-button.fc-cta-consent');
    await consentBtn.waitFor({ state: 'visible', timeout: 8000 });
    await consentBtn.click();
    await page.waitForTimeout(1000);
  } catch {
    // no popup
  }

  // Any modal overlay
  try {
    const overlay = page.locator('.modal-open .close, #dismiss-button');
    if (await overlay.isVisible({ timeout: 2000 })) {
      await overlay.click();
      await page.waitForTimeout(500);
    }
  } catch {
    // no overlay
  }
}

test.describe('Registration', () => {

  test('Successful registration with valid data', async ({ page }) => {
    const email = `testuser${Date.now()}@test.com`;

    // Go directly to login page
    await page.goto('/login', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);
    await dismissPopups(page);
    await page.waitForTimeout(1000);

    // Screenshot for debugging
    await page.screenshot({ path: 'test-results/debug-login-page.png' });

    // Wait for signup form
    await page.waitForSelector('input[data-qa="signup-name"]', { timeout: 30000 });

    await page.fill('input[data-qa="signup-name"]', 'PlaywrightUser');
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');

    // Account info form
    await page.waitForSelector('#id_gender1', { timeout: 30000 });
    await page.click('#id_gender1');
    await page.fill('input[data-qa="password"]', 'Test1234!');
    await page.selectOption('select[data-qa="days"]', '1');
    await page.selectOption('select[data-qa="months"]', 'January');
    await page.selectOption('select[data-qa="years"]', '1990');

    await page.fill('input[data-qa="first_name"]', 'John');
    await page.fill('input[data-qa="last_name"]', 'Doe');
    await page.fill('input[data-qa="address"]', '123 Main St');
    await page.selectOption('select[data-qa="country"]', 'United States');
    await page.fill('input[data-qa="state"]', 'California');
    await page.fill('input[data-qa="city"]', 'Los Angeles');
    await page.fill('input[data-qa="zipcode"]', '90001');
    await page.fill('input[data-qa="mobile_number"]', '1234567890');

    await page.click('button[data-qa="create-account"]');

    await expect(
      page.locator('h2[data-qa="account-created"]')
    ).toBeVisible({ timeout: 30000 });
  });

  test('Registration with already registered email shows error', async ({ page }) => {
    await page.goto('/login', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);
    await dismissPopups(page);
    await page.waitForTimeout(1000);

    await page.waitForSelector('input[data-qa="signup-name"]', { timeout: 30000 });

    await page.fill('input[data-qa="signup-name"]', 'TestUser');
    await page.fill('input[data-qa="signup-email"]', 'testuser01@test.com');
    await page.click('button[data-qa="signup-button"]');

    await expect(
      page.locator('p:has-text("Email Address already exist!")')
    ).toBeVisible({ timeout: 15000 });
  });

});