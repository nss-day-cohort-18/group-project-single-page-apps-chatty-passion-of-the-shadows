'use strict';

//SEE README.md UNDER MODULAR CODE FOR MORE DETAILS
//This function takes JSON file (holds preset messages)
//and returns the value
//
//
//
var Chatty = (function(initialTexts) {

	//===============================//
	//===========VARIABLES===========//
	//===============================//

	//Card html elements for messages
	//

	var newCard =  `<article class="message-card">
	                    <p class="text-message"></p>
	                    <button class="delete-button">Delete</button>
	                </article>`;


	//data request object and error/completion messages.
	//(shamelessly cribbed from the 'brendalong')
	//
	var dataRequest = new XMLHttpRequest();

	dataRequest.addEventListener('load', dataRequestComplete);
	dataRequest.addEventListener('error', dataRequestFailed);

	dataRequest.open('GET', 'message.json');
	dataRequest.send();


	//Object that  contains all HTML elements needed
	//for this IIFE
	//
 	var initialHtmlElements = {
		messageDisplay: document.getElementById("message-display")
	};



	//===============================//
	//===========FUNCTIONS===========//
	//===============================//

	//Parse JSON data and send results to loadPreMessages()
	//
	function dataRequestComplete(event){
		console.log('Transfer from json file complete');
		var data = JSON.parse(event.target.responseText);
		console.log(data);
		Chatty.loadPreMessages(data);
	}

	//Failure notification for XHR
	//
	function dataRequestFailed(event){
		console.log('An error occured while transferring the file');
		console.log('Seeing as this is a local data transfer, this is surely Zak\'s fault');
	}

	//Generic functionality to return messages
	//
	initialTexts.returnMessage = function(messageObject, index ){
		var message = messageObject[index].message;
		// console.log('returnMessage output ', message);

		return message;
	};

	//Generic function to create new message Card
	//
	initialTexts.loadElement = function(index ){
		initialHtmlElements.messageDisplay.innerHTML += newCard;
		var messageCards = document.getElementsByClassName("message-card");
		var targetCard = messageCards[messageCards.length-1];
		targetCard.setAttribute("id", ` message${index}`);
		// console.log('targetCard = ', targetCard);

		return targetCard;
	};

	//Prints a message to a specific message card
	//
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
	//
	initialTexts.loadPreMessages = function(messageObject ){

		for (var i = 0; i < messageObject.length; i++) {
			var message = Chatty.returnMessage(messageObject, i);
			var target = Chatty.loadElement(i);

			Chatty.printMessage(target, message);
		}
	};



	//============================//
	//===========RETURN===========//
	//============================//

	return initialTexts;

})(Chatty || {});


