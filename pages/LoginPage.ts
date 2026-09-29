import {Page , expect} from '@playwright/test';
import { LoginLocators } from '../Locators/LoginLocators';

export class LoginPage {
    
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async openLoginPage() {
        await this.page.goto('https://testguild.com/login/');
        await expect(this.page).toHaveURL('https://testguild.com/login/');
        }
        async enterLoginCredentials(username: string , password: string) {
            await this.page.locator(LoginLocators.LoginUserNameInput).fill(username);
            await this.page.locator(LoginLocators.LoginPasswordInput).fill(password);
            await this.page.locator(LoginLocators.LoginSignInButton).click();

        }
        async validateLogin() {
            await expect(
                this.page.locator('body')
            ).toContainText(
                LoginLocators.LoginValidationText
            );
        }
}



