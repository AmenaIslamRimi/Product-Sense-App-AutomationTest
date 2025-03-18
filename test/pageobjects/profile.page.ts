class profilePage {
    get completeTaskTxt() {
        return $('//android.widget.TextView[@text="সম্পন্ন কাজের রেকর্ড"]');
    }

    async completeTaskTxtIsVisible() {
        const completeTaskTxt = await this.completeTaskTxt;
        return await completeTaskTxt.getText();
    }

    async logout() {
        const logoutButton = await $('//android.widget.TextView[@text="লগ আউট"]');
        await logoutButton.click();
    }

    async logoutConfirm() {
        const loginpageTitle = await $('(//android.widget.TextView[@text="আপনার অ্যাকাউন্ট এ লগিন করুন"])[1]');
        return await loginpageTitle.getText();
    }

}
 export default new profilePage();