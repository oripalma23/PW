import { test, expect } from './fixtures';

test('añado dos productos al carrito', async ({ loginPage, productsPage, cartPage }) => {


  await loginPage.abrir();
  await loginPage.entrar('standard_user', 'secret_sauce');

  await productsPage.anadirAlCarrito('Sauce Labs Backpack');
  await productsPage.anadirAlCarrito('Sauce Labs Bike Light');
  await expect(productsPage.contador).toHaveText('2');

  await productsPage.irAlCarrito();
  await expect(cartPage.productos).toHaveCount(2);
});