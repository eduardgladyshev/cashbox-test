'use strict';

class Dashboard{

	get exitPopupBtn() { return $('.App__user___NTgyK button'); }

	get sessionEnd() { return $('button*=Закрыть'); }

	get exit() { return $('button*=Выйти'); }

	get wrapper() { return $('.Dashboard__columnContainer___3wFpR'); }

	get newOrder() { return $('button=Новый заказ'); }

	get discountCard() { return $('button=Скидочные карты'); }

	get problemTickets(){ return $('button=Проблемные билеты'); }

	get returnTicket() { return $('button=Возврат'); }

	get reservations() { return $('button*=Бронь'); }

	get bobbins() { return $('button=Управление бобинами'); }

	get reports() { return $('button=Отчеты'); }
}

module.exports = new Dashboard();