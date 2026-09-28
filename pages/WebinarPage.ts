import { Page ,expect} from 'playwright/test';
import { WebinarLocators } from '../locators/WebinarLocators';

export class WebinarPage {

    readonly page: Page; 


constructor(page: Page) {
    this.page = page;
}

async openHomePage() { 

    await this.page.goto('https://testguild.com/automation-testing-tools/');
}

async clickWebinarsMenu() {

    await this.page.locator(
        WebinarLocators.webinarsMenu).click();
} 
async clickPlaywrightSubMenu() {
    await this.page.locator(
        WebinarLocators.playwrightSubMenu).click();
    }

async validateWebinarPage() {

    await expect(
        this.page.locator('body')
    ).toContainText(
        WebinarLocators.webinarValidationText
    )
}    
}