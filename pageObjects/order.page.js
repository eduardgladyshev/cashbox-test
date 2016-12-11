'use strict';

class Order {
	get container() 			{ return $('.Order__container___24WrG'); }
	get cancelOrder () 			{ return $('.Order__column___1NSDp button'); }
	get confirmCancelOrder() 	{ return $('button=Да'); }
	get today() 				{ return $('button=Сегодня'); }
	get tomorrow() 				{ return $('button=Завтра'); }

	

}

module.exports = new Order();