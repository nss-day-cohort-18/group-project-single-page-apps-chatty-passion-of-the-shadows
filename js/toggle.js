


function toggleStyles(){
	var elementsToToggle = {

	 	messageCard		: document.getElementsByClassName("message-card"),
	 	deleteButton	: document.getElementsByClassName("delete-button"),
	 	messageDisplay	: document.getElementById("message-display"),
	 	messageWrapper	: document.getElementById("message-wrapper"),
	 	navElement		: document.getElementById("nav-element"),
	 	clearButton		: document.getElementById("clear-button"),
	 	newMessage      : document.getElementById("new-message"),
	 	// largeText		: document.getElementsByClassName("text-message")
	};

	for (element in elementsToToggle) {
		var currentElement = elementsToToggle[element];
		console.log('current element in loop:', currentElement)
		console.log('is array?', Array.isArray(currentElement));
		if (!Array.isArray(currentElement)) {
			for (var i = 0; i < currentElement.length; i++) {
				var className = currentElement.item(i).className;
				console.log(className)
				currentElement.item(i).classList.toggle(`${className}-dark`);
			} 
		} else {
		// We grab the id, because we're gonna use it in each
		// class name for the dark theme.
		//
		console.log('--stuff in our loop--');
		console.log('Toggling Elements:', elementsToToggle);
		var id = currentElement.id;
		console.log(id);

		// Now we toggle the theme from light to dark.
		// 
		console.log(currentElement.classList);
		currentElement.classList.toggle(`${id}-dark`);
		}
	console.log(elementsToToggle)
	}
}
