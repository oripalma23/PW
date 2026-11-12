import { type Page, type Locator } from '@playwright/test';

export class CheckoutPage {
  readonly nombre: Locator;
  readonly apellido: Locator;
  readonly codigopostal: Locator;
  readonly continuar: Locator;
  readonly finalizar:Locator;
  readonly mensajefinal: Locator

  


  constructor(page: Page) {
    this.nombre= page.getByTestId('firstName')
    this.apellido=page.getByTestId('lastName')
    this.codigopostal=page.getByTestId('postalCode')
    this.continuar=page.getByTestId('continue')
    this.finalizar=page.getByTestId('finish')
    this.mensajefinal=page.getByTestId('complete-header')
  }

 

async rellenarDatos(nombre: string, apellido: string, codigopostal: string) {
  await this.nombre.fill(nombre);
  await this.apellido.fill(apellido)
  await this.codigopostal.fill(codigopostal)
  await this.continuar.click()

 }

 async finalizarCompra() {
  await this.finalizar.click();
}

 }
