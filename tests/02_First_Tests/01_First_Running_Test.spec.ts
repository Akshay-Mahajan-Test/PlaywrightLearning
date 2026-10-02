import {test, expect} from '@playwright/test';

test('first test', async ({ page }) => {
    await page.goto("https://www.youtube.com/");

    await expect(page).toHaveTitle('YouTube');

    await expect(page).toHaveURL("https://www.youtube.com");

})