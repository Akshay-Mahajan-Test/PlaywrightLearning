import { Page ,expect } from '@playwright/test';

export class TransferFunds {
    constructor(private page: Page) { }
    async transferFunds() {
        const accountID = this.page.locator('#accountTable tbody tr').first().locator('a');
        const accountNumber = (await accountID.innerText()).trim();
        console.log(`Account Number: ${accountNumber}`);
        await this.page.getByRole('link', {name: 'Transfer Funds'}).click();
        await this.page.locator('//input["#amount" and @name="input"]').fill("125.46");
        await this.page.getByRole('link', { name: 'Transfer Funds' }).click();
        expect(this.page.getByText(`${'125.46'} has been transferred from account #15120 to account #15120.
`))
        await this.page.getByRole('link', {name: 'Accounts Overview' }).click();
    }
}