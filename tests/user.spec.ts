import { test, expect } from '@playwright/test';

// Before starting tests make sure at least 1 room is existing

async function passUserData(page, Firstname = 'Eduard', Lastname = 'Zemlyanskyi', Email = 'zimae.9525@gmail.com', Phone = '+380688553284') {
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill(Firstname);
  
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill(Lastname);
  
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill(Email);
  
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill(Phone);
}

test('TC001', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await passUserData(page)
  await page.getByRole('cell', { name: '01' }).hover();
  await page.mouse.down();
  await page.getByRole('cell', { name: '31' }).hover();
  await page.mouse.up();
  await page.getByRole('button', { name: 'Book', exact: true }).click();
});

test('TC002', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div.rbc-event-content', { hasText: 'Unavailable' }).first().waitFor({ state: 'visible' });
});

test('TC003', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Eduard');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Zemlyanskyi');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('zimae.9525@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('+380688553284');
  await page.getByRole('cell', { name: '1' }).first().hover();
  await page.mouse.down();
  await page.waitForTimeout(1000);
  await page.getByRole('cell', { name: '29' }).nth(1).hover();
  await page.mouse.up();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  const errorMessage = page.locator('p', { hasText: 'An error occurred while submitting your booking' });
  await expect(errorMessage).toBeVisible();
});

test('TC004', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Zemlyanskyi');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('zimae.9525@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('+380688553284');
  await page.getByRole('cell', { name: '01' }).hover();
  await page.mouse.down();
  await page.getByRole('cell', { name: '31' }).hover();
  await page.mouse.up();
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  const errorMessage = page.locator('p', { hasText: 'Firstname should not be blank' });
  await expect(errorMessage).toBeVisible();
});

test('TC005', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Eduard');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('zimae.9525@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('+380688553284');
  await page.getByRole('cell', { name: '01' }).hover();
  await page.mouse.down();
  await page.getByRole('cell', { name: '31' }).hover();
  await page.mouse.up();
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  const errorMessage = page.locator('p', { hasText: 'Lastname should not be blank' });
  await expect(errorMessage).toBeVisible();
});

test('TC006', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Eduard');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Zemlyanskyi');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('+380688553284');
  await page.getByRole('cell', { name: '01' }).hover();
  await page.mouse.down();
  await page.getByRole('cell', { name: '31' }).hover();
  await page.mouse.up();
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  const errorMessage = page.locator('p', { hasText: 'must not be empty' });
  await expect(errorMessage).toBeVisible();
});

test('TC007', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Eduard');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Zemlyanskyi');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('zimae.9525@gmail.com');
  await page.getByRole('cell', { name: '01' }).hover();
  await page.mouse.down();
  await page.getByRole('cell', { name: '31' }).hover();
  await page.mouse.up();
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  const errorMessage = page.locator('p', { hasText: 'must not be empty' });
  await expect(errorMessage).toBeVisible();
});

test('TC008', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Eduard');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Zemlyanskyi');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('zimae.9525@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('12421');
  await page.getByRole('cell', { name: '01' }).hover();
  await page.mouse.down();
  await page.getByRole('cell', { name: '31' }).hover();
  await page.mouse.up();
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  const errorMessage = page.locator('p', { hasText: 'size must be between 11 and 21' });
  await expect(errorMessage).toBeVisible();
});

test('TC009', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Ed');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Zemlyanskyi');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('zimae.9525@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('12421');
  await page.getByRole('cell', { name: '01' }).hover();
  await page.mouse.down();
  await page.getByRole('cell', { name: '31' }).hover();
  await page.mouse.up();
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  const errorMessage = page.locator('p', { hasText: 'size must be between 3 and 18' });
  await expect(errorMessage).toBeVisible();
});

test('TC010', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Book this room' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Eduard');
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Zemlyanskyi');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('zimae.9525');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('12421');
  await page.getByRole('cell', { name: '01' }).hover();
  await page.mouse.down();
  await page.getByRole('cell', { name: '31' }).hover();
  await page.mouse.up();
  await page.getByRole('button', { name: 'Book', exact: true }).click();
  const errorMessage = page.locator('p', { hasText: 'must be a well-formed email address' });
  await expect(errorMessage).toBeVisible();
});

// test('drag_and_drop', async ({ page }) => {
//   await page.goto('https://commitquality.com/practice-drag-and-drop');
//   await page.getByTestId('small-box').hover();
//   await page.mouse.down();
//   await page.getByTestId('large-box').hover();
//   await page.mouse.up();
//   await page.pause();
// });