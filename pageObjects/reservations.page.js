'use strict';

let Page = require('./page');

class Reservations extends Page {
	get container() 		{ return $('.Reservations__container___3Q6N8'); }
	get search() 			{ return $('input'); }
}

module.exports = new Reservations();