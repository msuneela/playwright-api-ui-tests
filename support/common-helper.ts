import { expect, Locator, Page } from '@playwright/test';
import { URLs } from '../configs/config';
import { HomePage } from '../page-objects/home-page';

export class CommonHelper{
    readonly page: Page;
    readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
    }

    readonly breadCrumbs = (breadcrumbName: string) => this.page.locator('.breadcrumb-item',{hasText: breadcrumbName});
    async navigateToHomepage() {
        await this.page.goto(URLs.homepage);
        this.clickIfPresent(this.homePage.acceptAll());
    }
     async  clickIfPresent( locator: Locator) {
        if (await locator.isVisible()) {
            await locator.click();
        }
    }
    async verifyPageTitle(title: string){
            await expect(this.page).toHaveTitle(title);
        
    }
   
}