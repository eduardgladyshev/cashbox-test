'use strict';

let Page = require('./page');

console.log(`require: ${Page}`);


let LoginPage = Object.create(Page, {
	userName: {
		get: function(){
			return $('[data-type="email"]');
		}
	},

	userCard: {
		get: function(){
			return $('.Card__item___3D5fR');
		}
	},

	password: {
		get: function(){
			return $('[type="password"]');
		}
	},

	submit: {
		get: function(){
			return $('.keyboard-submit-button');
		}
	}

});


console.log("LoginPage");

module.exports = LoginPage;