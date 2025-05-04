import { test, expect } from '@playwright/test'

test('sign in sucessfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('johndoe@exemple.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para o seu e-mail.'
  )

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('teste@exemple.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText('Credenciais inválidas.')

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  await expect(page.url()).toContain('/sign-up')
})
