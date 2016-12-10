'use strict';

let loginPage = require('../pageObjects/login.page');
let dashboard = require('../pageObjects/dashboard.page');
let bobbinsPage = require('../pageObjects/bobbins.page'); 

before('login to cashbox', ()=> {

	loginPage.open();

	loginPage.userName.setValue('тест');
	loginPage.userCard.waitForVisible(5000);
	loginPage.userCard.click();
	loginPage.password.waitForVisible(5000);

	loginPage.password.setValue('Shpluha42');
	loginPage.submit.click();

	bobbinsPage.bobbinItem.waitForVisible(5000);
	bobbinsPage.bobbinItem.click();
	bobbinsPage.submit.click();

});

after('logout from cashbox', () => {
	dashboard.container.waitForVisible(5000);
	dashboard.exitPopupBtn.click();
	dashboard.sessionEnd.click();
});
