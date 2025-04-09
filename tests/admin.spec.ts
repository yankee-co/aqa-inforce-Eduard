import { test, expect } from '@playwright/test';

// Before start tests delete all rooms

// login as admin
async function loginToAdmin(page) {
    await page.goto('https://automationintesting.online/admin');
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
  }

// Create a Room using the Admin page(API) and check that the room was created
// on the User page(API)

test('TC001', async ({ page }) => {
  await loginToAdmin(page)
  await page.getByTestId('roomName').click();
  await page.getByTestId('roomName').fill('102');
  await page.locator('#type').selectOption('Double');
  await page.locator('#accessible').selectOption('true');
  await page.locator('#roomPrice').click();
  await page.locator('#roomPrice').fill('200');
  await page.getByRole('checkbox', { name: 'WiFi' }).check();
  await page.getByRole('checkbox', { name: 'Safe' }).check();
  await page.getByRole('checkbox', { name: 'Radio' }).check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('link', { name: 'Restful Booker Platform Demo' }).click();
  await page.waitForLoadState('networkidle');
  const Room = page.getByRole('img', { name: 'Preview image of room 102' }).first();
  await expect(Room).toBeVisible();
});

// Book the room using the User page(API), and then check that the room is
// booked on the Admin page(API)

test('TC002', async ({ page }) => {
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
    await page.getByRole('cell', { name: '01' }).hover();
    await page.mouse.down();
    await page.getByRole('cell', { name: '26' }).hover();
    await page.mouse.up();
    await page.getByRole('button', { name: 'Book', exact: true }).click();
    await loginToAdmin(page)
    await page.getByRole('link', { name: 'Report' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Eduard Zemlyanskyi - Room:').first()).toBeVisible();
});

// Edit Room in the Admin page (Rooms) menu using API and check changes in
// the User page(API)

test('TC003', async ({ page }) => {
  // create room
  await loginToAdmin(page);
  await page.getByTestId('roomName').fill('199');
  await page.locator('#type').selectOption('Double');
  await page.locator('#accessible').selectOption('true');
  await page.locator('#roomPrice').click();
  await page.locator('#roomPrice').fill('200');
  await page.getByRole('checkbox', { name: 'WiFi' }).check();
  await page.getByRole('checkbox', { name: 'Safe' }).check();
  await page.getByRole('checkbox', { name: 'Radio' }).check();
  await page.getByRole('button', { name: 'Create' }).click();
  // edit room
  await page.locator('#roomName199').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.locator('#roomName').fill('100');
  await page.getByRole('button', { name: 'Update' }).click();
  // go to main page
  await page.getByRole('link', { name: 'Restful Booker Platform Demo' }).click();
  await page.waitForLoadState('networkidle');
  // check edited
  await expect(page.getByRole('img', { name: 'Preview image of room 100' })).toBeVisible();
});

// Delete the Room using the Admin page(API) and check that the room was
// deleted in the User page(API)

test('TC004', async ({ page }) => {
    // create room
  await loginToAdmin(page)
  await page.getByTestId('roomName').click();
  await page.getByTestId('roomName').fill('102');
  await page.locator('#type').selectOption('Double');
  await page.locator('#accessible').selectOption('true');
  await page.locator('#roomPrice').click();
  await page.locator('#roomPrice').fill('200');
  await page.getByRole('checkbox', { name: 'WiFi' }).check();
  await page.getByRole('checkbox', { name: 'Safe' }).check();
  await page.getByRole('checkbox', { name: 'Radio' }).check();
  await page.getByRole('button', { name: 'Create' }).click();
  // delete room
  await page.locator('.roomDelete').nth(0).click();
  await page.getByRole('link', { name: 'Restful Booker Platform Demo' }).click();
  await expect(
    page.getByRole('img', { name: 'Preview image of room 102' })
  ).not.toBeVisible();
});