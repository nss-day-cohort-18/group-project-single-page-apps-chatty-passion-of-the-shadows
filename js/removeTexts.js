'use strict';

var Chatty = (function(removeTexts) {

	var myText3 = "It's working.";

	removeTexts.makeSureItWorks3 = function() {
		console.log(myText3);
	};

	return removeTexts;


})(Chatty || {});

