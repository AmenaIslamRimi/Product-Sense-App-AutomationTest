import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page'

describe('SMR log in successfully and go to Home page', () => {
    
    it('should show the login text', async () => {
        expect(await loginPage.loginTxt()).toHaveAttr('আপনার অ্যাকাউন্ট এ লগিন করুন');
    });

    it('should input phone number and click send OTP', async () => {
        await loginPage.login('01312896449');
    });

    it ('should show the OTP text', async () => {
        expect(await loginPage.otpTxt()).toHaveAttr('আপনার মোবাইল নম্বরে পাঠানো ওটিপি নম্বর দিন');
    });

    it('should input OTP and click login', async () => {
        await loginPage.inputOtp('111111');
    });

    it('should show the home page title', async () => {
        expect(await homePage.getTitle()).toHaveAttr('হ্যালো ping pong Testy!');
    });

});

