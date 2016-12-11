'use strict';

let loginPage = require('../pageObjects/login.page');
let dashboard = require('../pageObjects/dashboard.page');
let bobbinsPage = require('../pageObjects/bobbins.page'); 

before('login to cashbox', ()=> {

	loginPage.open();

	loginPage.userName.setValue('тест');
	loginPage.userCard.waitForVisible();
	loginPage.userCard.click();
	loginPage.password.waitForVisible();

	loginPage.password.setValue('Shpluha42');
	loginPage.submit.click();

	bobbinsPage.bobbinItem.waitForVisible();
	bobbinsPage.bobbinItem.click();
	bobbinsPage.submit.click();
	dashboard.container.waitForVisible();
});

after('logout from cashbox', () => {
	dashboard.container.waitForVisible();
	dashboard.sessionEnd();
});
