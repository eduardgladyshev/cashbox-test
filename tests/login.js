'use strict';

let loginPage = require('../pageObjects/login.page');
let bobbinsPage = require('../pageObjects/bobbins.page'); 
let dashboard = require('../pageObjects/dashboard.page');
let orderPage = require('../pageObjects/order.page');
let assert = require("assert");

describe('login to cashbox', ()=>{
	it('open login page', ()=>{
		loginPage.open();
		assert(browser.getTitle(), 'Кинокасса');
	});

	it('select user', ()=>{
		loginPage.userName.setValue('тест');
		loginPage.userCard.waitForVisible(5000);
		loginPage.userCard.click();
		loginPage.password.waitForVisible(5000);
	});

	it('insert password and login', ()=>{
		loginPage.password.setValue('Shpluha42');
		loginPage.submit.click();
	});

	it('select bobin', ()=>{
		bobbinsPage.bobbinItem.waitForVisible(5000);
		bobbinsPage.bobbinItem.click();
		bobbinsPage.submit.click();
	});

	it('open new order', ()=>{
		dashboard.container.waitForVisible(5000);
		dashboard.newOrder.click();
		orderPage.container.waitForVisible(5000);
	});

	it('close newOrder', ()=>{
		console.log(orderPage.cancelOrder);
		orderPage.cancelOrder.click();
		orderPage.confirmCancelOrder.click();
	});

	it('logout with session end', ()=>{
		dashboard.container.waitForVisible(5000);
		dashboard.exitPopupBtn.click();
		dashboard.sessionEnd.click();
	});

});


