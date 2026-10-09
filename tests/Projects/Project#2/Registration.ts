import { Page } from 'playwright';

export class Registration {
    constructor(private page: Page) { }

    async fillRegistrationForm(data: any) {
        await this.page.locator('[id="customer.firstName"]').fill(data.firstName);
        await this.page.locator('[id="customer.lastName"]').fill(data.lastName);
        await this.page.locator('[id="customer.address.street"]').fill(data.address);
        await this.page.locator('[id="customer.address.city"]').fill(data.city);
        await this.page.locator('[id="customer.address.state"]').fill(data.state);
        await this.page.locator('[id="customer.address.zipCode"]').fill(data.zipCode);
        await this.page.locator('[id="customer.phoneNumber"]').fill(data.phone);
        await this.page.locator('[id="customer.ssn"]').fill(data.ssn);
        await this.page.locator('[id="customer.username"]').fill(data.username);
        await this.page.locator('[id="customer.password"]').fill(data.password);
        await this.page.locator('[id="repeatedPassword"]').fill(data.confirmPassword);       
    }
}