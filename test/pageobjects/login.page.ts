class LoginPage {

    get inputPhoneNumber () {
    return $('//android.widget.EditText[@text="01XXXXXXXXX"]');
    }

    get inputOTP () {
        return $('//android.widget.EditText[@text="XXXXXX"]');
    }
        
    get btnSendOTP () {
    return $('//android.view.ViewGroup[@content-desc="OTP পাঠান"]');
    }

    get btnLogin () {
        return $('//android.widget.TextView[@text="লগ ইন"]');
    }

    get camPermission () {
        return $('//android.widget.TextView[@text="ক্যামেরা ব্যবহারে অনুমতি প্রয়োজন"]');
    }

    get locationPermission () {
        return $('//android.widget.TextView[@text="লোকেশন ব্যবহারে অনুমতি প্রয়োজন"]');
    }

    get allowBtn () {
        return $('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button');
    }

   

    // get allowTxt () {
    //     return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
    // }

    async loginTxt(){
        const loginTxt = await $('(//android.widget.TextView[@text="আপনার অ্যাকাউন্ট এ লগিন করুন"])[1]');
        return await loginTxt.getText();
    }

    async login (phoneNumber: string) {
        await this.inputPhoneNumber.setValue(phoneNumber);
        await this.btnSendOTP.click();

        await driver.pause(5000);
    }

    async errorMgs () {
        const errorMgs = await $('//android.widget.Toast[@text="This number is not registered in the system"]');
        return await errorMgs.getText();
    }

    async successMgs () {
        const successMgs = await $('//android.widget.Toast[@text="OTP sent successfully"]');
        return await successMgs.getText();
    }

    async otpTxt () {
        const otpSendTxt = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]');
        return await otpSendTxt.getText();
    }

    async camPermissionTxt() {
        const camPermission = await this.camPermission;
        return await camPermission.getText();
    }

    async locationPermissionTxt () {
        const locationPermission = await this.locationPermission;
        return await locationPermission.getText();
    }

    async allowBtnTxt () {
        const allowBtn = await this.allowBtn;
        return await allowBtn.getText();
    }

    // async inputOtpAfterValidTime (otp: string) {
    //     await driver.pause(1500);
    //     await this.inputOTP.setValue(otp);
    //     await this.btnLogin.click();
    // }

    async inputOtp (otp: string) {
        await this.inputOTP.setValue(otp);
        await this.btnLogin.click();
    }
    
}

export default new LoginPage();
