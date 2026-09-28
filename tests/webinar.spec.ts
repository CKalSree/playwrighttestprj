import test from '@playwright/test';
import { WebinarPage } from '../pages/WebinarPage';

test( 'Validate Webinars -> Playwright Navigation', async ({ page })=> {

    const webinarPage = new WebinarPage(page);

    // Open Home Page
    await webinarPage.openHomePage();

    // Click Webinars Menu
    await webinarPage.clickWebinarsMenu();

    //click Playwright Submenu
    await webinarPage.clickPlaywrightSubMenu();

    // Validate redirected page
    await webinarPage.validateWebinarPage();
} 

)