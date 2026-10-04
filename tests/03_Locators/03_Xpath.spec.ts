import {test, expect} from '@playwright/test';

test('Test the xpath Loctors', async ({ page }) => {
    await page.goto('https://app.vwo.com/#/login');

    let emailID = await page.locator("xpath = //input[@id='login-username']").fill("ABCDWENFjdkv");
    let passWord = await page.locator("xpath = //input[@name='password']").fill("usihsfnsuvu");
    let signButton = await page.locator("xpath = (//button/span[text()='Sign in'])[1]").click();
    let errorMsg = page.locator("xpath = //div[@id='js-notification-box-msg']");
    expect(errorMsg.isVisible());
})