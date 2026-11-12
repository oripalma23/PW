import { ProductsPage } from '../pages/ProductsPage';
import { test, expect } from './fixtures';

test('Realizar una compra completa', async ({ loginPage, productsPage, cartPage, checkoutPage }) => {
  
  await loginPage.abrir();
  await loginPage.entrar('standard_user', 'secret_sauce');

  await productsPage.anadirAlCarrito('Sauce Labs Backpack');
  await productsPage.anadirAlCarrito('Sauce Labs Bike Light');
  await expect(productsPage.contador).toHaveText('2');

  await productsPage.irAlCarrito();
  await expect(cartPage.productos).toHaveCount(2);
  await cartPage.iralCheckout()
  await checkoutPage.rellenarDatos('Ana', 'Romero', '28001')
  await checkoutPage.finalizarCompra()
  await expect(checkoutPage.mensajefinal).toHaveText('Thank you for your order!')

});