import { type Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  // --- Locators ---
  private readonly pageTitle: Locator = this.page.locator('.title');
  private readonly shoppingCartLink: Locator = this.page.locator('.shopping_cart_link');

  /**
   * Verifica se os elementos chave da página de produtos estão visíveis,
   * confirmando um login bem-sucedido.
   */
  async assertPageLoaded() {
    // Valida se a URL é a de inventário
    await this.assertPageUrl(/.*\/inventory.html/);
    
    // Valida se o título "Products" e o carrinho de compras estão visíveis
    await expect(this.pageTitle).toHaveText('Products');
    await expect(this.shoppingCartLink).toBeVisible();
  }
}