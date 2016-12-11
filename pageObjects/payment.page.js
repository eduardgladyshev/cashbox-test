'use strict';

class Payment {
	get exact() {return $('button=Ровно'); }

	get acceptPay() { return $('button*=Принять'); }

	get cardPay() { return $('button*=картой'); }
}

module.exports = new Payment();