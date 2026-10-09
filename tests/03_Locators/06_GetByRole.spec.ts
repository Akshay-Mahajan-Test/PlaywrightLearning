import {test, expect} from '@playwright/test';

test('Test the Aria role step 1', async ({ page }) => {
    page.goto('https://app.vwo.com/#/login');
    const userName = await page.getByTestId('login-username').fill('Akshwat');
    const passWord = await page.getByRole('textbox', {name: "password"}).fill("2ye892rjdhw89");
    const signBtn = await page.getByLabel('Sign in').click();
});

test('Test with step 2', async ({ page }) => {
    page.goto('https://app.vwo.com/#/login');
    // const userName1 = await page.getAttribute(name: 'username')
})

