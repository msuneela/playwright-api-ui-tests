import { Locator, Page } from '@playwright/test';
import { CommonHelper } from '../support/common-helper';
import { BasePage } from './base-page';
import { URLs, Text } from '../configs/config';


export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  readonly menu = (menuname: string) => this.page.locator('button', { hasText: menuname })
  readonly subMenu = (menuname: string) => this.page.locator('a', { hasText: menuname })
  readonly acceptAll = () => this.page.locator(`button:has-text("${Text.AcceptAll}")`)
  readonly logo = () => this.page.locator('a.logo').first();


  async selectMenuAndSubMenu(menuText: string, submenuText: string) {
    const menuLocator = this.menu(menuText);
    const subMenuLocator = this.subMenu(submenuText);
    await this.clickElement(menuLocator);
    await this.clickElement(subMenuLocator)
  }


}