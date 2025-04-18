import {expect} from '@wdio/globals';
import tasksPage from '../pageobjects/tasks.page';

describe('Tasks', () => {

    it('should show the tasks page title', async () => {
        expect(await tasksPage.getTitle()).toHaveAttr('টাস্কস');
    });

    // it('should search for a task', async () => {
    //     await tasksPage.getshopName().then(async (shopName) => {
    //     console.log(`Searching for: ${shopName}`);
    //     await tasksPage.searchTask(shopName);
    //     console.log(`Searching for: ${shopName}`);
    //     });
    // });

    it('should search for a task', async () => {
        await tasksPage.searchTask('Test 100');
        // clear the search field
        await tasksPage.clearSearch();
        
    });

    it('should scroll the task list', async () => {
        // const taskList = await tasksPage.taskListElem();
        await tasksPage.taskScroll.scrollIntoView({
            direction: 'down',
            maxScrolls: 5,
            scrollableElement: $('#scrollable')
        });

    });


});

