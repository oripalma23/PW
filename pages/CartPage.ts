import { type Page, type Locator } from '@playwright/test';

export class CartPage {
  readonly productos: Locator;
  readonly botonCheckout: Locator;

  constructor(page: Page) {
    this.productos = page.getByTestId('inventory-item');
    this.botonCheckout = page.getByTestId('checkout');
  }
   async iralCheckout(){
    await this.botonCheckout.click();
  }
}