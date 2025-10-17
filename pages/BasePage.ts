import { type Page, expect } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async assertPageTitle(expectedTitle: string | RegExp) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async assertPageUrl(expectedUrl: string | RegExp) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}