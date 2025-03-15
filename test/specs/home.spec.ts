import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page';
// import loginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page'

describe('Home', () => {
    
    it('should check for check-in text and start session if visible', async () => {
        // Check if the text is displayed
        if (await homePage.checkInTextIsVisible()) {
            // Click the start session button
            await homePage.startSession();
        }

        else {
            expect(await homePage.checkInGetTitle()).toHaveAttr('চেক ইনের সময়');
        }
          
    });
    

});

