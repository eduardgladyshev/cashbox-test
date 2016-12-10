'use strict';

class Page {
	constructor () {
		console.log('Инициализация обьекта Page');
	}

	open (path) {
		browser.url(`/${path? path: ''}`);
	}

	back() {
		$('button=Назад').click();
	}
}

module.exports = Page;