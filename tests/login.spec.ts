import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login correcto', async ({ page }) => {
  const login = new LoginPage(page);
  await login.abrir();
  await login.entrar('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('un usuario bloqueado ve un error', async ({ page }) => {
  const login = new LoginPage(page);
  await login.abrir();
  await login.entrar('locked_out_user', 'secret_sauce');
  await expect(login.error).toContainText('locked out');
});

test('Usuario inicia sesion con password incorrecto', async ({ page }) => {
    const login = new LoginPage(page);
    await login.abrir();
    await login.entrar('standar_user', 'secret_wrong')
    await expect(login.error).toContainText('do not match any user')
})