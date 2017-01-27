'use strict';

//SEE README.md UNDER MODULAR CODE FOR MORE DETAILS
//This function takes JSON file (holds preset messages)
//and returns the value


var Chatty = (function(initialTexts) {

	//===============================//
	//===========VARIABLES===========//
	//===============================//
	
	var newCard =  `<article class="message-card">
	                    <p class="text-message"></p>
	                    <button class="delete-button">Delete</button>
	                </article>` 

	//Start-up to make sure it works
	var myText1 = "It's working.";

	//Object that  contains all HTML elements needed 
	//for this IIFE
	//Chatty.returnInitialHTMLElements("textMessages");
	var initialHtmlElements = {
		textMessages: document.getElementsByClassName("text-message"),
		messageDisplay: document.getElementById("message-display")
	};

	//JSON format that holds all of our pre-messages.
	//Chatty.returnPreMessages`messagei`);
	var preMessages = [
		{
			message1: "Pre-message-1",
			message2: "Pre-message-2",
			message3: "Pre-message-3",
			message4: "Pre-message-4",
			message5: "Pre-message-5",
		}
	];

	var preMessageKeys = Object.keys(preMessages[0]);
	var preMessageValues = Object.keys(preMessages[0]);

	//===============================//
	//===========FUNCTIONS===========//
	//===============================//

	//Generic function to create new message Card
	initialTexts.loadElement = function(index ){
		var messageCount = undefined;
		initialHtmlElements.messageDisplay += newCard;
		messageCount = document.getElementsByClassName("message-card");
		messageCount[messageCount.length-1].setAttribute("id", `message${index}`);

		return messageCount;	
	};

	//Generic functionality to return messages
	initialTexts.returnMessage = function(key ){
		var message = preMessages[key];
	
		return message;
	};

	//Prints a message to a specific message card
	initialTexts.printMessage = function(messageElement, message ){
		var cardChildren = messageElement.childNodes;

		cardChildren.forEach(function(value, index, array){
			if (array[index].hasAttribute('class="text-message"')) {
				array[index].innerHTML += message;
			}
		});

		console.log('Printed: ', message);

	};

	//Combine the previous three functions to print to screen
	initialTexts.loadPreMessages = function( ){
		for (var i = 0; i < preMessageKeys.length; i++) {
			var message = Chatty.returnMessage(preMessageKeys[i]);
			console.log(message)
			var target = Chatty.loadElement();
			Chatty.printMessage(target, message);
		};
	};

	//============================//
	//===========RETURN===========//
	//============================//

	return initialTexts;

})(Chatty || {});


