'use strict';

let Page = require('./page');

class DiscontCard extends Page {
	get container() 	{ return $('.DiscountCards__container___2syf5'); }
	get search() 		{ return $('input'); }
}

module.exports = new DiscontCard();