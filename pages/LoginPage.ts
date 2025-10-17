import { type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // --- Locators ---
  private readonly usernameInput: Locator = this.page.locator('[data-test="username"]');
  private readonly passwordInput: Locator = this.page.locator('[data-test="password"]');
  private readonly loginButton: Locator = this.page.locator('[data-test="login-button"]');

  // --- Ações ---
  async goto() {
    await this.page.goto('/');
  }

  /**
   * Executa o fluxo de login de etapa única do Sauce Demo.
   * @param username - O nome de usuário.
   * @param password - A senha.
   */
  async doLogin(username: string, password_val: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password_val);
    await this.loginButton.click();
  }
}