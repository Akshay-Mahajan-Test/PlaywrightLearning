import {test, expect} from '@playwright/test';

test('Test using GetbyRole', async ({ page }) => {
    await page.goto('https://app.vwo.com/#/login');

    let userName = await page.getByRole("textbox", {name: "username"}).fill("adnjshd jkcn");
    let userPass = await page.getByRole('textbox', {name: "password"}).fill("dfoisdahncSH");
    let signBtn = await page.locator('#js-login-btn').click();
    let errorMsg = page.locator(':text-is("Your email, password, IP address or location did not match")');

    expect(errorMsg).toBeVisible();
    expect(errorMsg).toHaveText("Your email, password, IP address or location did not match");
});