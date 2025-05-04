import { test, expect } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'customer1', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'customer10', exact: true })
  ).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()
  await expect(
    page.getByRole('cell', { name: 'customer11', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'customer20', exact: true })
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(
    page.getByRole('cell', { name: 'customer51', exact: true })
  ).toBeVisible()
  expect(
    page.getByRole('cell', { name: 'customer60', exact: true })
  ).toBeVisible()
  await page.getByRole('button', { name: 'Página anterior' }).click()
  await expect(
    page.getByRole('cell', { name: 'customer41', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'customer50', exact: true })
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()
  await expect(
    page.getByRole('cell', { name: 'customer1', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'customer10', exact: true })
  ).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('textbox', { name: 'ID do pedido' }).fill('order-11')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do cliente' })
    .fill('customer11')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'customer11' })).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()

  await page.getByRole('option', { name: 'Pendente' }).click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await page.waitForTimeout(2000)

  await expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10)
})
