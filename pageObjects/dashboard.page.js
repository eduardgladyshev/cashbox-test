'use strict';

class Dashboard{

	get exitButton()		{ return $('.App__user___NTgyK button'); }
	get closeButton() 		{ return $('button*=Закрыть'); }
	get exit() 				{ return $('button*=Выйти'); }
	get container() 		{ return $('.Dashboard__columnContainer___3wFpR'); }
	get newOrder() 			{ return $('button=Новый заказ'); }
	get discountCard() 		{ return $('button=Скидочные карты'); }
	get problemTickets()	{ return $('button=Проблемные билеты'); }
	get returnTicket() 		{ return $('button=Возврат'); }
	get reservations() 		{ return $('button*=Бронь'); }
	get bobbins() 			{ return $('button=Управление бобинами'); }
	get reports() 			{ return $('button=Отчеты'); }

	logout() {
		this.exitButton.click();
		this.exit.click();
	}

	sessionEnd() {
		this.exitButton.click();
		this.closeButton.click();
	}


}

module.exports = new Dashboard();