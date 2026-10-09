import { test, expect } from '@playwright/test';
import { Registration } from './Registration';
import { customerData } from './CustomerData';
import { TransferFunds } from './Transfer_Fund.spec';

test('Validate the Balance', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', { name: 'Register' }).click();
    const registrationForm = new Registration(page);
    await registrationForm.fillRegistrationForm(customerData);
    await page.locator("//input[@value='Register']").click();
    await expect(page.getByText(`Welcome ${customerData.username}`))
        .toHaveText(`Welcome ${customerData.username}`);

    const trFunds = new TransferFunds(page);
    await trFunds.transferFunds();
    

})