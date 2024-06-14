import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('addition test', async ({ page }) => {
  await page.click('button[id="1"]');
  await page.click('button:has-text("sum")');
  await page.click('button[id="2"]');
  await page.click('.btnEqual');
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('3');
});

test('soustraction test', async ({ page }) => {
  await page.click('button[id="5"]');
  await page.click('button:has-text("soustraction")');
  await page.click('button[id="3"]');
  await page.click('.btnEqual');
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('2');
});

test('multiplication test', async ({ page }) => {
  await page.click('button[id="2"]');
  await page.click('button:has-text("multiplication")');
  await page.click('button[id="3"]');
  await page.click('.btnEqual');
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('6');
});