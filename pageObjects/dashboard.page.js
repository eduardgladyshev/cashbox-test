'use strict';

class Dashboard{
	get exitPopupBtn() {
		return $('.App__user___NTgyK button');
	}

	get sessionEnd() {
		return $('button*=Закрыть');
	}

	get exit() {
		return $('button*=Выйти');
	}
	get wrapper() {
		return $('.Dashboard__columnContainer___3wFpR');
	}
}

module.exports = new Dashboard();