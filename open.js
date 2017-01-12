'use strict'

const webdriver = require('webdriverio');

let options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    logLevel: "command"
};

//let client = webdriver.remote(options).init();
//console.log(client.then());

describe('open cashbox', function(){

	this.timeout(999999999);
	let client;

    before(function(){
        client = webdriver.remote(options);
        return client.init();
    });

	it('something', function(){
		client
			.url('http://demo.cashbox.kinoplan24.ru/')
			.then(result => console.log(result));
	});

    after(function() {
        return client.end();
    });
});