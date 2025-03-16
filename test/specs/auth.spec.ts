import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page'

describe('Auth', () => {
    
    it('should show the login text', async () => {
        expect(await loginPage.loginTxt()).toHaveAttr('আপনার অ্যাকাউন্ট এ লগিন করুন');
    });

    // it('input unregistered phone number and get error message', async () => {
    //     await loginPage.login('01234567891');
    //     expect (await loginPage.errorMgs()).toHaveAttr('This number is not registered in the system');
    // });

    it('input registered phone number and click send OTP', async () => {
        await loginPage.login('01312896449');
        //expect (await loginPage.successMgs()).toHaveAttr('Your otp send successfully. Please check your mobile');
    });

    it ('should show the OTP text', async () => {
        expect(await loginPage.otpTxt()).toHaveAttr('আপনার মোবাইল নম্বরে পাঠানো ওটিপি নম্বর দিন');
    });

    it('input OTP and click login', async () => {
        await loginPage.inputOtp('111111');
    });

    it('should accept app cam permission', async () => {
        const camPermissionText = await loginPage.camPermissionTxt();
        if (camPermissionText === 'ক্যামেরা ব্যবহারে অনুমতি প্রয়োজন') {
            await loginPage.camPermission.click();
            
            const allowText = await loginPage.allowBtnTxt();
            expect(allowText).toBe('While using the app');
    
            await loginPage.allowBtn.click();
        }
    });
    
    it('should accept app location permission', async () => {
        const locationPermissionText = await loginPage.locationPermissionTxt();
        if (locationPermissionText === 'লোকেশন ব্যবহারে অনুমতি প্রয়োজন') {
            await loginPage.locationPermission.click();
            
            const allowText = await loginPage.allowBtnTxt();
            expect(allowText).toBe('While using the app');
    
            await loginPage.allowBtn.click();
        }
    });

    it('should show the home page title', async () => {
        expect(await homePage.getTitle()).toHaveAttr('হ্যালো ping pong testy!');
    });

});

