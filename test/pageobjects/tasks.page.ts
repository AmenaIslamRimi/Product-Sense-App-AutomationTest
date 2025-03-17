class tasksPage {
    get tasksTitle() {
        return $('//android.widget.TextView[@text="টাস্কস"]');
    }
    
    get searchOption() {
        return $('android.widget.EditText');
    }
    
    get tasksList() {
        return $('//android.widget.ScrollView/android.view.ViewGroup');
    }
    
    // get taskListItems() {
    //     return $$('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]');
    // }
    
    async getTitle() {
        const title = await this.tasksTitle;
        return await title.getText();
    }

    async getshopName() {
        const shopName = await this.tasksList;
        return await shopName.getText();
    }

    async searchTask(searchText: string) {
        await this.searchOption.click();
        await this.searchOption.setValue(searchText);
        await driver.keys('Enter'); 
    }

    async clearSearch() {
        await this.searchOption.clearValue();
    }
}

export default new tasksPage();
