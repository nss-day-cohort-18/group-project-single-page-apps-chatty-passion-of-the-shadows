'use strict';

//SEE README.md UNDER MODULAR CODE FOR MORE DETAILS
//This function takes JSON file (holds preset messages)
//and returns the value

var Chatty = (function(initialTexts) {

	//===============================//
	//===========VARIABLES===========//
	//===============================//

	//Start-up to make sure it works
	var myText1 = "It's working.";

	//Object that  contains all HTML elements needed 
	//for this IIFE
	//Chatty.returnInitialHTMLElements("textMessages");
	var initialHtmlElements = {
		textMessages: document.getElementsByClassName("text-message")
	};

	//JSON format that holds all of our pre-messages.
	//Chatty.returnPreMessages("message1");
	var preMessages = [
		{
			message1: "Pre-message-1",
			message2: "Pre-message-2",
			message3: "Pre-message-3",
			message4: "Pre-message-4",
			message5: "Pre-message-5",
		}
	];


	//===============================//
	//===========FUNCTIONS===========//
	//===============================//

	//Start-up function tomake sure it's connected.
	initialTexts.makeSureItWorks = function() {
		console.log(myText1, " Location: initialTexts.js");
	};

	//Test function to target id#text-message
	initialTexts.returnInitialHtmlElements = function(htmlElement) {
		console.log("returnInitialHtmlElements() works. Location: initialTexts.js");
		//To test: Chatty.returnInitialHtmlElements["textMessages"];
		return initialHtmlElements[htmlElement];
	};

	//Function that returns pre-saved messages
	//Goes inside first 5 "text-messages"
	initialTexts.returnPreMessages = function(word) {
		console.log("returnPreMessages() works. Location: initialTexts.js");
		//To test: Chatty.returnPreMessages("message1");
		return preMessages[0][word];
	};


	//============================//
	//===========RETURN===========//
	//============================//

	return initialTexts;

})(Chatty || {});
