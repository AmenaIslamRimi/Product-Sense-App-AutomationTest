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
        const selector = 'new UiSelector().text("হ্যালো ping pong!")';
        const title = await $(`android=${selector}`);
        return await title.getText();
    }

    async checkInTextIsVisible() {
        const checkInText = await this.checkInText;
        return await checkInText.getText();
    }

    async startSessionButtonTxt() {
        return await this.startSessionButton.getText();
    }

    async startSession() {
        const startSessionButton = await this.startSessionButton;
        await startSessionButton.click();
    }

    async checkInGetTitle() {
        const checkInTxt = await this.checkInTitle;
        return await checkInTxt.getText();
    }

}

export default new HomePage();


