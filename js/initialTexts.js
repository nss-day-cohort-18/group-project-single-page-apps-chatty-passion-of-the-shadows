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
	var preMessageValues = Object.values(preMessages[0]);

	//===============================//
	//===========FUNCTIONS===========//
	//===============================//
	
	//Generic functionality to return messages
	initialTexts.returnMessage = function(index ){
		var message = preMessageValues[index];
		// console.log('returnMessage output ', message);
		
		return message;
	};

	//Generic function to create new message Card
	initialTexts.loadElement = function(index ){

		var messageCard;
		initialHtmlElements.messageDisplay.innerHTML += newCard;
		var messageCards = document.getElementsByClassName("message-card");
		var targetCard = messageCards[messageCards.length-1];
		targetCard.setAttribute("id", ` message${index}`);
		// console.log('targetCard = ', targetCard);
		
		return targetCard;	
	};


	//Prints a message to a specific message card
	initialTexts.printMessage = function(messageElement, message ){
		
		var cardChildren = messageElement.childNodes;
		console.log(cardChildren);
		// console.log(message);
		cardChildren.forEach(function(value, index, array){
			
			// console.log(value, array[index]);
			if (value.nodeName === 'P') {
				value.innerHTML = message;
			}
		});

		console.log('Printed: ', message);
	};

	//Combine the previous three functions to print to screen

	initialTexts.loadPreMessages = function(messageObject ){

		for (var i = 0; i < preMessageKeys.length; i++) {
			var message = Chatty.returnMessage(i);
			var target = Chatty.loadElement(i);

			Chatty.printMessage(target, message);
		};
	};

	//============================//
	//===========RETURN===========//
	//============================//

	return initialTexts;

})(Chatty || {});


