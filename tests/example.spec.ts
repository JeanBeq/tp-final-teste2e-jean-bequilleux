import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('test', async ({ page }) => {
  const button = page.locator('text=count is ');
  const buttonText = await button.innerText();
  console.log(buttonText);
  expect(buttonText).toBe('count is 0');
  await button.dblclick();
  expect(await button.innerText()).toBe('count is 2');
});