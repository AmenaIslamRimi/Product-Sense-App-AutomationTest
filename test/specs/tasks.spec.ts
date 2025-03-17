import {expect} from '@wdio/globals';
import tasksPage from '../pageobjects/tasks.page';

describe('Tasks', () => {

    it('should show the tasks page title', async () => {
        expect(await tasksPage.getTitle()).toHaveAttr('টাস্কস');
    });

    // it('should search for a task', async () => {
    //     await tasksPage.
    // });
});

