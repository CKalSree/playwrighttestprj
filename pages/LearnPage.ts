import { Page, expect } from '@playwright/test';
import { LearnLocators } from '../locators/LearnLocators';

export class LearnPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openHomePage() {

        await this.page.goto(
            'https://testguild.com/automation-testing-tools/'
        );
    }

    async clickLearnMenu() {

    await this.page.locator(
        LearnLocators.learnMenu
    ).hover();
}

    

async clickJoinCommunity() {
 
await this.page.locator(
LearnLocators.joinCommunitySubMenu
).click();
}

    async validateJoinCommunityPage() {

        await expect(
            this.page.locator('body')
        ).toContainText(
            LearnLocators.joinCommunityValidationText
        );
    }
}