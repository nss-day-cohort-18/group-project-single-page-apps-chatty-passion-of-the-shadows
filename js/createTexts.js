'use strict';

var Chatty = (function(createTexts) {

	var myText2 = "It's working.";

	createTexts.makeSureItWorks2 = function() {
		console.log(myText2);
	};

	return createTexts;


})(Chatty || {});

