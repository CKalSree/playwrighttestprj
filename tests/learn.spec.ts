import { test } from '@playwright/test';
import { LearnPage } from '../pages/LearnPage';

test(
    'Validate Learn -> Join Community Navigation',
    async ({ page }) => {

        const learnPage =
            new LearnPage(page);

        // Open Home Page
        await learnPage.openHomePage();

        // Click Learn Menu
        await learnPage.clickLearnMenu();

        // Click Join Community Submenu
        await learnPage.clickJoinCommunity();

        // Validate redirected page
        await learnPage.validateJoinCommunityPage();
    }
);