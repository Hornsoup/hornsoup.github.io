import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('./index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Portfolio/);
});

test('get started link', async ({ page }) => {
  await page.goto('./PlaywrightTestSite');
  await page.fill('#inputName', 'Diver Dave');
  await page.click('button[data-test="submitName"]');
  await expect(page.locator('#result')).toHaveText('Hello, Diver Dave!');
});
