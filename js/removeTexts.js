'use strict';

//SEE README.md UNDER MODULAR CODE FOR MORE DETAILS
//This function is to remove text cards from 
//the DOM.
//It also removes created messages from array in 
//createTexts.js when deleted

var Chatty = (function(removeTexts) {

	//===============================//
	//===========VARIABLES===========//
	//===============================//

	//Start-up to make sure it works
	var myText3 = "It's working.";

	//All HTML elements needed for this removeTexts function
	var removeHtmlElements = {
		//To delete 
		textCards: document.getElementsByClassName("message-card")
	};


	//===============================//
	//===========FUNCTIONS===========//
	//===============================//

	removeTexts.makeSureItWorks3 = function() {
		console.log(myText3, " Location: removeTexts.js");
	};

	removeTexts.removeTextCard = function(textCardId) {
		//This gets connected via Event Listener to 
		//each delete button created on text card
		//.addEventListener("click", Chatty.removeTextCard(textCardId));
		var makeSureItsConnected = "removeTextCard() works. Location: removeTexts.js";
		console.log(makeSureItsConnected);
	};
		
	removeTexts.removeMessageFromArray = function() {
		//This function removes private message from createdTexts array 
		//within createTexts.js
		var thisWorks = "removeMessageFromArray() works. Location: removeTexts.js";
		console.log(thisWorks);
	};

	//============================//
	//===========RETURN===========//
	//============================//

	return removeTexts;


})(Chatty || {});

