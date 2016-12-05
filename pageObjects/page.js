function Page () {
	//console.log('Инициализация обьекта Page');
}

Page.prototype.open = function (path) {
	browser.url('/' + path);
}

module.exports = new Page();




//ES6
// 'use strict';

// class Page {
// 	constructor () {
// 		console.log('Инициализация обьекта Page');
// 	}

// 	open (path) {
// 		browser.url('/' + path);
// 	}
// }

// module.exports = Page;