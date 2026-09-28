import { Page, expect } from '@playwright/test';
import { CoursesLocators } from '../locators/CoursesLocators';

export class CoursesPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openHomePage() {

        await this.page.goto(
            'https://testguild.com/automation-testing-tools/'
        );
    }

    async clickCoursesMenu() {

        await this.page.locator(
            CoursesLocators.coursesMenu
        ).click();
    }

    async validateMasterAutomationText() {

        await expect(
            this.page.locator('body')
        ).toContainText(
            CoursesLocators.masterAutomationText
        );
    }

    async clickSeeAllCourses() {

        // Navigate down 2 screen heights

        await this.page.mouse.wheel(0, 1200);

        await this.page.waitForTimeout(1000);

        await this.page.mouse.wheel(0, 1200);

        await this.page.waitForTimeout(1000);

        const seeAllCoursesButton =
            this.page.locator(
                CoursesLocators.seeAllCoursesButton
            );

        await seeAllCoursesButton.scrollIntoViewIfNeeded();

        await seeAllCoursesButton.click();
    }

    async validateReliableTestsUsingAI() {

        await expect(
            this.page.locator('body')
        ).toContainText(
            CoursesLocators.reliableTestsUsingAIText
        );
    }
}