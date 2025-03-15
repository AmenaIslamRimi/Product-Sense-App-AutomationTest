import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class HomePage {

    get checkInText() {
        return $('//android.widget.TextView[@text="চেক ইন করতে চান?"]');
    }

    get startSessionButton() {
        return $('//android.widget.TextView[@text="সেশন শুরু করুন"]');
    }

    get checkInTitle() {
        return $('//android.widget.TextView[@text="চেক ইনের সময়"]');
    }

    async getTitle() {
        const selector = 'new UiSelector().text("হ্যালো ping pong testy!")';
        const title = await $(`android=${selector}`);
        return await title.getText();

        await browser.pause(5000);
    }

    async checkInTextIsVisible() {
        const checkInText = await this.checkInText;
        return await checkInText.getText();
    }

    async startSession() {
        const startSessionButton = await this.startSessionButton;
        await startSessionButton.click();
    }

    async checkInGetTitle() {
        const checkInTitle = await this.checkInTitle;
        return await checkInTitle.getText();
    }

}

export default new HomePage();


