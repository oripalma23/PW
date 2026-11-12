import { type Page, type Locator } from '@playwright/test';


export class LoginPage {
  readonly page: Page;
  readonly usuario: Locator;
  readonly password: Locator;
  readonly botonLogin: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usuario = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.botonLogin = page.getByRole('button', { name: 'Login' });
    this.error = page.getByTestId('error');
  }

  async abrir() {
    await this.page.goto('/');
  }

  async entrar(usuario: string, password: string) {
    await this.usuario.fill(usuario);
    await this.password.fill(password);
    await this.botonLogin.click();
  }
}