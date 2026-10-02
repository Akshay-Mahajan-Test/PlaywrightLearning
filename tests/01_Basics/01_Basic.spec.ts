import { test, expect } from '@playwright/test';

test('Verify the title of the page', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await expect(page).toHaveTitle('YouTube');
  console.log('This is title of Page', await page.title());
  await page.close();
});