'use strict';

let Page = require('./page');

class ReturnTicket extends Page {
	get container() 		{ return $('.ReturnTicket__container___pxSrt'); }
	get search() 			{ return $('input'); }
}

module.exports = new ReturnTicket();