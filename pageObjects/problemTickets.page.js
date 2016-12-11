'use strict';

let Page = require('./page');

class ProblemTickets extends Page {
	
	get container() { return $('.ProblemTickets__container___3VY7R'); }

	get search() { return $('input'); }
}

module.exports = new ProblemTickets();