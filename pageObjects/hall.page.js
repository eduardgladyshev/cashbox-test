'use strict';

let Page = require('./page');

class Hall extends Page {
	get container() { return $('.Halls__container___36FUz'); }
}

module.exports = new Hall();