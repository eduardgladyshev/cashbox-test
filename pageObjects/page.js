'use strict';

class Page {
	constructor () {
		console.log('Инициализация обьекта Page');
	}

	open (path) {
		browser.url('/' + path);
	}
}

module.exports = Page;