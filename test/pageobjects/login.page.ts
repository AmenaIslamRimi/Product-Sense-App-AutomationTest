// import { $ } from '@wdio/globals'
// import Page from './home.page';

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     public get inputUsername () {
//         return $('#username');
//     }

//     public get inputPassword () {
//         return $('#password');
//     }

//     public get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     public async login (username: string, password: string) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     public open () {
//         return super.open('login');
//     }
// }

// export default new LoginPage();
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
