const { test, expect } = require('@playwright/test');

// Helper — close cookie popup if it appears
async function closeCookiePopup(page) {
  try {
    const acceptBtn = page.locator('button.fc-button.fc-cta-consent');
    if (await acceptBtn.isVisible({ timeout: 3000 })) {
      await acceptBtn.click();
    }
  } catch {
    // popup did not appear — continue
  }
}

test.describe('Registration', () => {

  test('Successful registration with valid data', async ({ page }) => {
    const email = `testuser${Date.now()}@test.com`;

    await page.goto('https://automationexercise.com');
    await closeCookiePopup(page);

    await page.click('a[href="/login"]');
    await closeCookiePopup(page);

    // Fill signup form
    await page.fill('input[data-qa="signup-name"]', 'PlaywrightUser');
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');

    // Account info form
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
    await expect(page.locator('h2[data-qa="account-created"]')).toBeVisible();
  });

  test('Registration with already registered email shows error', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await closeCookiePopup(page);

    await page.fill('input[data-qa="signup-name"]', 'TestUser');
    await page.fill('input[data-qa="signup-email"]', 'testuser01@test.com');
    await page.click('button[data-qa="signup-button"]');

    await expect(page.locator('p:has-text("Email Address already exist!")')).toBeVisible();
  });

});
