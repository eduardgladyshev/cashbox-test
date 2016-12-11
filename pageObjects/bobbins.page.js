'use strict';

class BobbinsPage {
	get bobbinItem() 	{ return $('.Bobbins__bobbinListItem___1XhZg'); }
	get submit() 		{ return $('button*=Начать'); }
}

module.exports = new BobbinsPage();