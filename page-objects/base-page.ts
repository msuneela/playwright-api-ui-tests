import { Locator, Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickElement(locator: Locator) {
        await locator.click({ timeout: 5000 });
    }
}