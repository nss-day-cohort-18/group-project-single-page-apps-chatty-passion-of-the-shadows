'use strict';

//SEE README.md UNDER MODULAR CODE FOR MORE DETAILS
//This function is to create text cards and
//append them to the DOM.
//Also holds all created texts within an Array

var Chatty = (function(createTexts) {

	//===============================//
	//===========VARIABLES===========//
	//===============================//

	//Start-up to make sure it works
	var myText2 = "It's working.";

	//Array to hold ALL text messages created
	//Used in readTextMessages function
	var createdTexts = [];

	//Grabbing HTML elements needed for this function.
	var createHtmlElements = {
		//Delete All Button
		deleteButton: document.getElementById("clear-button"),
		//The box for id#new-message element
		userInput: document.getElementById("new-message"),
		//Parent Div to attach created messages to
		messageDisplayWrapper: document.getElementById("message-display"),
		//HTML Collection of all delete buttons created (IDK if we'll need this)
		textMessageDeleteButtons: document.getElementsByClassName("delete-button")
	};


	//===============================//
	//===========FUNCTIONS===========//
	//===============================//

	//Start-up function tomake sure it's connected.
	createTexts.makeSureItWorks2 = function() {
		console.log(myText2, " Location: createTexts.js");
	};

	createTexts.toggleDeleteButtonVisibility = function() {
		//Re-applying visuals to delete-all button
		//This function is ONLY being called when a new text is being 
		//created. The clear-all button already has a class of hide at this point
		var wrapper = createHtmlElements.messageDisplayWrapper;
		createHtmlElements.deleteButton.classList.remove("hide");
	};

	//Function to create Text Cards
	createTexts.createTextMessages = function() {
		//1. Check if user presses enter key
		//2. Store userMessage in createdTexts array
		//3. Create elements and append them
		//	 to createHtmlElements.messageDisplayWrapper
		if (event.key == "Enter") {
			if (createHtmlElements.userInput.value.length === 0) {
				alert("How 'bout ya say somethin dummy?");
			} else {
				//Pushing the entered text into the create
				createdTexts.push(createHtmlElements.userInput.value);
				var text = createHtmlElements.userInput.value;
				//Establishing layout of the new card
				var newCard = `<article class="message-card">
					<p class="text-message">${text}</p>
					<button class="delete-button">Delete</button>
					</article>`;

				//Appending the layout to the wrapper
				createHtmlElements.messageDisplayWrapper.innerHTML += newCard;
				//Re-esablishing the text input value to nothing
				createHtmlElements.userInput.value = "";
				//Bring back visibility to clear-all button
				createTexts.toggleDeleteButtonVisibility();
			}
		}
	};

	//This function reads texts back to you from createdTexts array
	createTexts.readTextMessages = function(text) {
		console.log("readTextMessages() works. Location: createTexts.js");
		//To test: Chatty.readTextMessages("id1");
		return createdTexts[0][text];
	};

	createTexts.deleteSingleText = function() {
		var toCheckIfWorks = "deleteSingleText() works. Location: createTexts.js";
		console.log(toCheckIfWorks);
	};


	//============================//
	//===========RETURN===========//
	//============================//

	return createTexts;

})(Chatty || {});


//=====================================//
//===========EVENT-LISTENERS===========//
//=====================================//








