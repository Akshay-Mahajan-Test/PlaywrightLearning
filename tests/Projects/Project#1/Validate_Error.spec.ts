import { test, expect } from '@playwright/test';

test('Check the Error msg', async ({ page }) => {
    await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');

    await page.locator('#free-trial-step1-email').fill('abc123@gmail.com');

    await page.keyboard.press('Tab');

    const errorMsg = page.getByText(
        "gmail.com doesn't look like a business domain. Please use your business email."
    );

    // let errorMsg = page.locator("//div[contains(text(), 'gmail.com doesn't')]");
    await expect(errorMsg).toHaveText("gmail.com doesn't look like a business domain. Please use your business email.");

})