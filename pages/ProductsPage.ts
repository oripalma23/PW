import { type Page, type Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly titulo: Locator;
  readonly carrito: Locator;
  readonly contador: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titulo = page.getByTestId('title');
    this.carrito = page.getByTestId('shopping-cart-link');
    this.contador = page.getByTestId('shopping-cart-badge');
  }

  async anadirAlCarrito(nombreProducto: string) {
    await this.page
      .getByTestId('inventory-item')
      .filter({ hasText: nombreProducto })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async irAlCarrito() {
    await this.carrito.click();
  }
}