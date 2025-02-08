
import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/home-page';
import { CommonHelper } from '../../support/common-helper';
import { Text } from '../../configs/config';
type mainMenu = 'About' | 'Media' | 'Utilities';
type subMenu = 'About Arqiva' | 'Our Media Services' | 'Our utilities services';


test.describe('Arqiva website tests', async () => {
  let homePage: HomePage;
  let commonHelper: CommonHelper;
  
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    commonHelper = new CommonHelper(page);
    await commonHelper.navigateToHomepage(); // Await the navigation
  });
  test('Should able to navigate to main page and verify title and check breadcrumbs not present', async ({ page }) => {
    await expect(homePage.logo()).toBeVisible();
    await commonHelper.verifyPageTitle('Arqiva - TV, Radio, Satellite Data Communications & Smart Metering');
    await expect(commonHelper.breadCrumbs(Text.About)).not.toBeVisible();
  });

  test('Should able to Navigate to main page and select About ,Utilities, media and respective submenus validate breadcrumbs', async ({ page }) => {
    const tabs = [
      { menu: 'About', subMenu: 'About Arqiva' },
      { menu: 'Utilities',subMenu: 'Our utilities services' },
      { menu: 'Media', subMenu: 'Our Media Services' },
  ];

  // Navigate through each menu and perform check
  for (const tab of tabs) {

    await homePage.selectMenuAndSubMenu(tab.menu, tab.subMenu);
    await commonHelper.verifyPageTitle(tab.subMenu);
    
    
     

  }
});
  test('Should able to Navigate main page select News and validate breadcrumbs', async ({ page }) => {
   

    await homePage.clickElement(homePage.subMenu('News & Views'));
    await commonHelper.verifyPageTitle('News & Views');
    await expect(commonHelper.breadCrumbs('News & Views')).toBeVisible();
  });
})
