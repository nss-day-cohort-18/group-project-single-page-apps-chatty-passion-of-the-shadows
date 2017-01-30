


function toggleStyles(){

	var elementsToToggle = [
	 		 document.getElementsByClassName("message-card"),
	 		 document.getElementsByClassName("delete-button"),
	 		 document.getElementById("message-display"),
	 		 document.getElementById("message-wrapper"),
	 		 document.getElementById("nav"),
	 		 document.getElementById("clear-button"),
	 	     document.getElementById("new-message"),
	 	     document.getElementById("text-"),
	];

	for (var i = 0; i < elementsToToggle.length; i++) {
		var currentElement = elementsToToggle[i];
		if (i < 2) {
			for (var q = 0; q < currentElement.length; q++) {
				var className = currentElement.item(q).className;
				console.log(className);
				currentElement.item(q).classList.toggle(`${className}-dark`);
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
};








function toggleLargeText() {
	var textMessageElements = document.getElementsByClassName("text-message");
	for (var i = 0; i < textMessageElements.length; i++) {
		if (event.target.checked === false){
			textMessageElements.item(i).classList.remove("large-text");
		} else {
			textMessageElements.item(i).classList.add("large-text");
		}
	};
};
