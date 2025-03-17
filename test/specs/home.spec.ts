import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page';

describe('Home', () => {
    
    it('should check for check-in text and start session if visible', async () => {
        const sessionStartText = await homePage.startSessionButtonTxt();
        // Check if the text is displayed
        if (sessionStartText === 'সেশন শুরু করুন') {
            // Click the start session button
            await homePage.startSession();
        }

        else {
            expect(await homePage.checkInGetTitle()).toHaveAttr('চেক ইনের সময়');
        }
          
    });
    

});

