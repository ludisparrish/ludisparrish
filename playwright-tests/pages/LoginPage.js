class LoginPage {
  constructor(page) {
    this.page = page;

    // Signup section
    this.signupName = page.locator('input[data-qa="signup-name"]');
    this.signupEmail = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.emailExistsError = page.locator('p:has-text("Email Address already exist!")');

    // Login section
    this.loginEmail = page.locator('input[data-qa="login-email"]');
    this.loginPassword = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loginError = page.locator('p:has-text("Your email or password is incorrect!")');

    // Nav
    this.loggedInAs = page.locator('li:has-text("Logged in as")');
    this.logoutLink = page.locator('a[href="/logout"]');

    // Cookie popup
    this.cookieConsent = page.locator('button.fc-button.fc-cta-consent');
  }

  async goto() {
    await this.page.goto('/login', { waitUntil: 'domcontentloaded' });
    await this.dismissCookiePopup();
  }

  async dismissCookiePopup() {
    try {
      await this.cookieConsent.waitFor({ state: 'visible', timeout: 8000 });
      await this.cookieConsent.click();
    } catch {
      // no popup — continue
    }
  }

  async login(email, password) {
    await this.loginEmail.waitFor();
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  async signup(name, email) {
    await this.signupName.waitFor();
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}

module.exports = { LoginPage };