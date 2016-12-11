'use strict';

let loginPage = require('../pageObjects/login.page');
let dashboard = require('../pageObjects/dashboard.page');
require('../helpers/loginHelpers');

describe('logout without session end', ()=> {
	it('logout', ()=> {
		dashboard.logout();
		loginPage.userName.waitForVisible();
	});

	it('login', ()=> {
		loginPage.userName.setValue('тест');
		loginPage.userCard.waitForVisible();
		loginPage.userCard.click();
		loginPage.password.waitForVisible();

		loginPage.password.setValue('Shpluha42');
		loginPage.submit.click();
		dashboard.container.waitForVisible();
	});
});