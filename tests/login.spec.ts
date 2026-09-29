import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Validate Login Functionality", async ({ page }) => {

    const loginPage = new LoginPage(page);

    // open login page
    await loginPage.openLoginPage();

    //enter login credentials
    await loginPage.enterLoginCredentials("sree.sam@yopmail.com", "P@ssword12");
    // validate login
    await loginPage.validateLogin();

});