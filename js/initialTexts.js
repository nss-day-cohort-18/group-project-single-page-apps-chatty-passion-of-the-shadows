'use strict';

var myMessage = "Hi World";
console.log(myMessage);

var Chatty = (function(initialTexts) {

	var myText1 = "It's working.";

	initialTexts.makeSureItWorks = function() {
		console.log(myText1);
	};

	return initialTexts;


})(Chatty || {});

