'use strict';

let Page = require('./page');

class LoginPage extends Page{
	get userName() 		{ return $('[data-type="email"]'); }
	get userCard() 		{ return $('.Card__item___3D5fR'); }
	get password() 		{ return $('[type="password"]'); }
	get submit() 		{ return $('.keyboard-submit-button'); }
};

module.exports = new LoginPage();