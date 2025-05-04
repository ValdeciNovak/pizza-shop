import { test, expect } from '@playwright/test'

test('update profile sucessfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()

  await page.getByRole('textbox', { name: 'Nome' }).fill('PizzaShop')
  await page
    .getByRole('textbox', { name: 'Descição' })
    .fill('Another description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'PizzaShop' })).toBeVisible()
})
