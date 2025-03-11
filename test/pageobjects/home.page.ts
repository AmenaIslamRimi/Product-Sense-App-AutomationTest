// import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class HomePage {

    async getTitle() {
        const selector = 'new UiSelector().text("হ্যালো ping pong Testy!")';
        const title = await $(`android=${selector}`);
        return await title.getText();
    }

    // async getImgUploadTxt(){
    //     const selector = 'new UiSelector().text("ছবি আপলোড বাকি আছে:")';
    //     const imgUploadTxt = await $(`android=${selector}`);
    //     return await imgUploadTxt.getText();
    // }

    // async getRegShopList(){
    //     const selector = 'new UiSelector().text("আজকের নিবন্ধিত দোকান:")';
    //     const regShopList = await $(`android=${selector}`);
    //     return await regShopList.getText();
    // }

    // async getTitle() {
    //     const title = await $('android.widget.TextView');
    //     return title;
    // }
}

export default new HomePage();


