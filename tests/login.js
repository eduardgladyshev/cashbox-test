'use strict';

let loginPage = require('../pageObjects/login.page');
let assert = require("assert");

describe('login to cashbox', ()=>{
	it('open login page', ()=>{
		loginPage.open();
		assert(browser.getTitle(), 'Кинокасса');
	});

	it('select user', ()=>{
		loginPage.userName.setValue('тест');
		loginPage.userCard.waitForVisible(10000);
		loginPage.userCard.click();
		loginPage.password.waitForVisible(5000);
	});

	it('insert password and login', ()=>{
		loginPage.password.setValue('Shpluha42');
		loginPage.submit.click();
		browser.waitForVisible('.Bobbins__container___1-4Pu', 5000);
	});

	it('select bobin', ()=>{
		browser.click('.Bobbins__bobbinListItem___1XhZg');
		$('button*=Начать').click();

		browser.waitForVisible('.Dashboard__columnContainer___3wFpR', 5000);
	});
	

});





// });
