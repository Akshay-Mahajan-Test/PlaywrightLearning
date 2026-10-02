import { test, expect } from '@playwright/test';

test('has Title', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await expect(page).toHaveTitle('YouTube');
});

test.skip('skipped the Test', async ({ page }) => {
  console.log(await page.title());
});

test.fail('failed test case', async({ page }) => {
  console.log("this is failed test case");
});

// test.slow('slower test', async({ page }) => {
//   console.log("this is slow test case");
// });

