import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('./index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Erin — Portfolio/);
});

test('get started link', async ({ page }) => {
  await page.goto('./PlaywrightTestSite/index.html');
  await page.fill('#inputName', 'Erin');
  await page.click('button[data-test="submitName"]');
  await expect(page.locator('#result')).toHaveText('Hello, Erin!');
});
