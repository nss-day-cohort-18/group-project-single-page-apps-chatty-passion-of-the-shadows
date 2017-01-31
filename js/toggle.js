"use strict";


function toggleStyles(){
	toggleMessageCard();
	toggleDeleteButton();
	toggleTextArea();
	toggleMessageDisplay();
	toggleMessageWrapper();
	toggleClearButton();
	toggleNav();
}

//// Functions to toggle each Element to dark Theme
function toggleMessageCard() {
	var messageCardElements = document.getElementsByClassName("message-card");
	for (var i = 0; i < messageCardElements.length; i++) {
		if (event.target.checked === false){
			messageCardElements.item(i).classList.remove("message-card-dark");
		} else {	
			messageCardElements.item(i).classList.add("message-card-dark");
		}
	}
}


function toggleDeleteButton() {
	var deleteButtonElements = document.getElementsByClassName("delete-button");
	for (var i = 0; i < deleteButtonElements.length; i++) {
		if (event.target.checked === false){
			deleteButtonElements.item(i).classList.remove("delete-button-dark");
		} else {
			deleteButtonElements.item(i).classList.add("delete-button-dark");
		}
	}
}

function toggleTextArea() {
	var textAreaElements = document.getElementsByClassName("materialize-textarea");
	for (var i = 0; i < textAreaElements.length; i++) {
		if (event.target.checked === false){
			textAreaElements.item(i).classList.remove("materialize-textarea-dark");
		} else {
			textAreaElements.item(i).classList.add("materialize-textarea-dark");
		}
	}
}

function toggleMessageDisplay() {
	var messageDisplayElement = document.getElementById("message-display");
	if (event.target.checked === false){
		messageDisplayElement.classList.remove("message-display-dark");
	} else {
		messageDisplayElement.classList.add("message-display-dark");
	}
}

function toggleMessageWrapper() {
	var messageWrapperElement = document.getElementById("message-wrapper");
	if (event.target.checked === false){
		messageWrapperElement.classList.remove("message-wrapper-dark");
	} else {
		messageWrapperElement.classList.add("message-wrapper-dark");
	}
}

function toggleClearButton() {
	var clearButtonElement = document.getElementById("clear-button");
	if (event.target.checked === false){
		clearButtonElement.classList.remove("clear-button-dark");
	} else {
		clearButtonElement.classList.add("clear-button-dark");
	}
}

function toggleNav() {
	var navElement = document.getElementsByTagName("nav");
	for (var i = 0; i < navElement.length; i++) {
		if (event.target.checked === false){
			navElement.item(i).classList.remove("nav-dark");
		} else {
			navElement.item(i).classList.add("nav-dark");
		}
	}
}





///Large Text Toggle

function toggleLargeText() {
	var textMessageElements = document.getElementsByClassName("text-message");
	for (var i = 0; i < textMessageElements.length; i++) {
		if (event.target.checked === false){
			textMessageElements.item(i).classList.remove("large-text");
		} else {
			textMessageElements.item(i).classList.add("large-text");
		}
	}
}

