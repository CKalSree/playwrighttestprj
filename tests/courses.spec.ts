import { test } from '@playwright/test';
import { CoursesPage } from '../pages/CoursesPage';

test('Validate Courses Navigation and See All Courses', async ({ page }) => {

    const coursesPage = new CoursesPage(page);

    // Open main page
    await coursesPage.openHomePage();

    // Click Courses
    await coursesPage.clickCoursesMenu();

    // Validate Courses page
    await coursesPage.validateMasterAutomationText();

    // Navigate down and click See All Courses
    await coursesPage.clickSeeAllCourses();

    // Validate text on resulting page
    await coursesPage.validateReliableTestsUsingAI();
});