'use strict';

//SEE README.md UNDER MODULAR CODE FOR MORE DETAILS
//This function is to create text cards and
//append them to the DOM.
//Also holds all created texts within an Array

var Chatty = (function(createTexts) {

	//===============================//
	//===========VARIABLES===========//
	//===============================//

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

	createTexts.toggleDeleteButtonVisibility = function() {
		//Re-applying visuals to delete-all button
		//This function is ONLY being called when a new text is being
		//created. The clear-all button already has a class of hide at this point
		var wrapper = createHtmlElements.messageDisplayWrapper;
		createHtmlElements.deleteButton.classList.remove("hide");
	};

	var idCounter = 0;
	var theLogo = document.getElementById("logo-image");
	var changeLogoBack = function() {
		theLogo.src = "images/Chatty.png";
	};

	var myUser;

	//Function to create Text Cards
	createTexts.createTextMessages = function() {
		//1. Check if user presses enter key
		//2. Store userMessage in createdTexts array
		//3. Create elements and append them
		//	 to createHtmlElements.messageDisplayWrapper
		if (event.key == "Enter") {
			event.preventDefault();
			if (createHtmlElements.userInput.value === "") {
				$('#modal1').modal('open');
				createHtmlElements.userInput.value = "";
			} else {
				var textCard = {};
				//Pushing the entered text into the create
				textCard.textInput = createHtmlElements.userInput.value;
				textCard.cardId = "card--" + idCounter;
				createdTexts.push(textCard);
				var text = createHtmlElements.userInput.value;
				//Establishing layout of the new card

				var	newCard =  `<article id="card--${idCounter}" class="message-card">
								<button class="delete-button waves-effect waves-teal">Delete</button>
								<p class="text-message align-right">${text}<br>-User</p>
								</article>`; 
					
				if (myUser === "Employer") {
					newCard = `<article id="card--${idCounter}" class="message-card">
						<p class="text-message align-left">${text}<br>-Employer</p>
						<button class="delete-button waves-effect waves-teal">Delete</button>
						</article>`;
				}



				//Appending the layout to the wrapper
				createHtmlElements.messageDisplayWrapper.innerHTML += newCard;
				//Re-esablishing the text input value to nothing
				createHtmlElements.userInput.value = "";
				//Bring back visibility to clear-all button
				createTexts.toggleDeleteButtonVisibility();
				//Adding to the counter to keep a unique ID flowing
				idCounter++;
				//Toggling the logo
				theLogo.src = "images/Chatty.gif";
				setTimeout(changeLogoBack, 1500);
				console.log(createdTexts);

				//From here we are determining wether or not the theme has large text
				//or the dark grey background.
				//Grabbing the dark-themed and large-text checkbox
				var darkThemeCheckbox = document.getElementsByClassName("checkbox")[0].getElementsByTagName("input")[0];
				var largeTextCheckbox = document.getElementsByClassName("checkbox")[1].getElementsByTagName("input")[0];

				//grabbing the newly-created text-card
				var newArticle = createHtmlElements.messageDisplayWrapper.lastChild;
				//if dark themed is checked, target the message card and delete button and update classes
				if (darkThemeCheckbox.checked) {
					newArticle.classList.add("message-card-dark");
					newArticle.getElementsByTagName("button")[0].classList.add("delete-button-dark");
				}
				//if large textbox is checked, target the paragraph within text-card and update class
				if (largeTextCheckbox.checked) {
					newArticle.getElementsByTagName("p")[0].classList.add("large-text");
				}
			}
		}
	};

	//This function reads texts back to you from createdTexts array
	createTexts.readTextMessages = function(text) {
		//To test: Chatty.readTextMessages("id1");
		return createdTexts[0][text];
	};

	createTexts.returnPrivateArray = function() {
		return createdTexts;
	};

	createTexts.userToggle = function() {
		myUser = event.target.innerHTML;
	};

	//============================//
	//===========RETURN===========//
	//============================//

	return createTexts;

})(Chatty || {});









