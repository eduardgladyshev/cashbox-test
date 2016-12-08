'use strict';

class Order {
	get container() { return $('.Order__container___24WrG'); }

	get canselOrder () { return $('.Order__column___1NSDp button'); }

	get confirmCancelOrder() { return $('button=Да'); }

}

module.exports = new Order();