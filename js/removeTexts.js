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
		textCards: document.getElementsByClassName("message-card"),
		//Message wrapper
		messageWrapper: document.getElementById("message-display")
	};


	//===============================//
	//===========FUNCTIONS===========//
	//===============================//


	removeTexts.makeSureItWorks3 = function() {
		console.log(myText3, " Location: removeTexts.js");
	};

	removeTexts.deleteClick = function () {
		//Grabbing target
		var elementClicked = event.target;
		//Grabbing wrapper to remove elements from
		var wrapper = document.getElementById("message-display");
		//If it is a delete button within a text..
		if (elementClicked.classList.contains("delete-button")) {
			//remove the entire card
			elementClicked.parentElement.remove();
			//if there are no more cards.. 
			if (wrapper.children.length === 0) {
				//Give the clear all button a class of hide
				document.getElementById("clear-button").classList.add("hide");
			}
		//If the event.target is the clear all button
		} else if (elementClicked.id ==="clear-button") {
			//If the wrapper element has children
			if (wrapper.hasChildNodes()) {
				//add the class of hide to clear-all button 
	            elementClicked.classList.add("hide");
	            //While there are text-cards, remove them
	            while (wrapper.firstChild) {
	                wrapper.removeChild(wrapper.firstChild);
	            }
	        }
		}
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

