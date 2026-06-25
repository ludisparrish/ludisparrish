const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { TEST_USER } = require('./test-data');

test.describe('Login & Logout', () => {

  test('Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(TEST_USER.email, TEST_USER.password);

    await expect(loginPage.loggedInAs).toBeVisible({ timeout: 15000 });
  });

  test('Login with incorrect password shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(TEST_USER.email, 'WrongPassword999');

    await expect(loginPage.loginError).toBeVisible({ timeout: 10000 });
  });

  test('Successful logout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(TEST_USER.email, TEST_USER.password);

    await expect(loginPage.loggedInAs).toBeVisible({ timeout: 15000 });

    await loginPage.logout();

    await expect(page).toHaveURL(/.*login/, { timeout: 10000 });
  });

});