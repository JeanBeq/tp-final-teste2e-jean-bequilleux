import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('test daddition', async ({ page }) => {
  await page.click('button[id="1"]');
  await page.click('button:has-text("sum")');
  await page.click('button[id="2"]');
  await page.click('.btnEqual');
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('3');
});

test('test de soustraction', async ({ page }) => {
  await page.click('button[id="5"]');
  await page.click('button:has-text("soustraction")');
  await page.click('button[id="3"]');
  await page.click('.btnEqual');
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('2');
});

test('test de multiplication', async ({ page }) => {
  await page.click('button[id="2"]');
  await page.click('button:has-text("multiplication")');
  await page.click('button[id="3"]');
  await page.click('.btnEqual');
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('6');
});

test('test déchange de chiffres', async ({ page }) => {
  await page.click('button[id="5"]');
  const result1 = await page.locator('.screen').innerText();
  expect(result1).toContain('3');
  await page.click('button[id="3"]');
  const result2 = await page.locator('.screen').innerText();
  expect(result2).toContain('5');
});

test('test de laffichage initial', async ({ page }) => {
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('0');
});

test('test de réinitialisation de laffichage après calcul', async ({ page }) => {
  await page.click('button[id="4"]');
  await page.click('button:has-text("multiplication")');
  await page.click('button[id="2"]');
  await page.click('.btnEqual');
  let result = await page.locator('.screen').innerText();
  expect(result).toBe('8');
  await page.reload();
  result = await page.locator('.screen').innerText();
  expect(result).toBe('0');
});

test('test de multiples opérations', async ({ page }) => {
  await page.click('button[id="2"]');
  await page.click('button:has-text("sum")');
  await page.click('button[id="3"]');
  await page.click('.btnEqual');
  let result = await page.locator('.screen').innerText();
  expect(result).toBe('5');
  await page.click('button:has-text("multiplication")');
  await page.click('button[id="4"]');
  await page.click('.btnEqual');
  result = await page.locator('.screen').innerText();
  expect(result).toBe('20');
});

test('test dopérations en chaîne', async ({ page }) => {
  await page.click('button[id="5"]');
  await page.click('button:has-text("sum")');
  await page.click('button[id="5"]');
  await page.click('button:has-text("multiplication")');
  await page.click('button[id="2"]');
  await page.click('.btnEqual');
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('20');
});

test('test de gestion du zéro', async ({ page }) => {
  await page.click('button[id="0"]');
  await page.click('button:has-text("sum")');
  await page.click('button[id="5"]');
  await page.click('.btnEqual');
  const result = await page.locator('.screen').innerText();
  expect(result).toBe('5');
});

test('test dentrée de nombres longs', async ({ page }) => {
  for (let i = 0; i < 10; i++) {
    await page.click(`button[id="${i % 10}"]`);
  }
  const result = await page.locator('.screen').innerText();
  expect(result.length).toBeGreaterThan(9);
});

test('test du bouton de réinitialisation', async ({ page }) => {
  await page.click('button[id="3"]');
  const result1 = await page.locator('.screen').innerText();
  expect(result1).toContain('3');
  await page.click('button:has-text("C")');
  const result2 = await page.locator('.screen').innerText();
  expect(result2).toBe('0');
});