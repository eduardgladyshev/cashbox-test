'use strict';

let dashboard = require('../pageObjects/dashboard.page');
let orderPage = require('../pageObjects/order.page');
let hallPage = require('../pageObjects/hall.page');
let assert = require("assert");
require('../helpers/loginHelpers');

describe('Buy ticket: \n', ()=>{

	it('open new order', ()=>{
		dashboard.container.waitForVisible(5000);
		dashboard.newOrder.click();
		orderPage.container.waitForVisible(5000);
	});

	it('choose release', ()=>{
		$('.ReleasesListItem__seance___2Lk_6').click();
		let releaseTitle = $('.ReleaseSeances__title___1-VTe').getText();
		console.log(releaseTitle);
		$('.SeancesListItem__seance___2GT0C').click();
	});

	it('choose a seat', ()=> {
		hallPage.container.waitForVisible(5000);
		hallPage.back();
	});

	it('close newOrder', ()=>{
		orderPage.cancelOrder.click();
		orderPage.confirmCancelOrder.click();
	});

});


