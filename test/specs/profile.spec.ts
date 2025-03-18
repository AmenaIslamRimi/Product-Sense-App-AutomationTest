import profilePage from "../pageobjects/profile.page";

describe ('Profile', () => {
    it ('should show the profile page title', async () => {
        expect(await profilePage.completeTaskTxtIsVisible()).toHaveAttr('সম্পন্ন কাজের রেকর্ড');
    });

    it ('should logout', async () => {
        await profilePage.logout();
    });

    it ('should show the login page title', async () => {
        expect(await profilePage.logoutConfirm()).toHaveAttr('আপনার অ্যাকাউন্ট এ লগিন করুন');
    });
});