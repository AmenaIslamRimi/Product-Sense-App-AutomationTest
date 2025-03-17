class tasksPage {
    get tasksTitle() {
        return $('//android.widget.TextView[@text="টাস্কস"]');
    }
    
    get searchOption() {
        return $('//android.widget.EditText[@text="দোকান খুঁজুন"]');
    }
    
    get tasksList() {
        return $('//android.widget.ScrollView/android.view.ViewGroup');
    }
    
    get taskListItems() {
        return $$('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]');
    }
    
    async getTitle() {
        const title = await this.tasksTitle;
        return await title.getText();
    }

    // async getshopName() {
    //     const shopName = await this.taskListItems[0];
    //     return await shopName.get
    // }

    async searchTask(searchText: string) {
        await this.searchOption.click();
        await this.searchOption.setValue(searchText);
    }
}

export default new tasksPage();
