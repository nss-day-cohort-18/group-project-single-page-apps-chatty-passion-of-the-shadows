function getTimeStamp(a) {
	var now = new Date();
	console.log(now);

	var year = now.getFullYear();
	var month = now.getMonth();
	var date = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	
	if (a === 1) {
		return [year, month, date, hour, minute, second];
	}
	
	else {
		return now;
	}
}

function romanizeTimeStamp(timeArray) {
	var one = 'I';
	var five = 'V';
	var ten = 'X';
	var fifty = 'L';
	var hundred = 'C';
	var fiveHundred = 'D';
	var thousand = 'M';


  // reduce time units to strings of Roman numerals
  // 
  for (var i = 0; i < timeArray.length; i++){
  	//A Date Aspect is a unit of time i.e. current year, month,
  	//hour, minutes, etc. We pull these one by one from the
  	//timeArray parameter passed into this function.
  	//
  	var dateAspect = timeArray[i];
	
	var workingNumber = dateAspect.toString();

  	var numDigits = getDigits();

	  	for (var q = 0; q < numDigits; q++){

	  	}
	}
}


function getDigits() {
	return Math.floor(Math.log(number) / Math.LN10 + 1);
}

// function vanillaTimeStamp(timeArray){
// 	var timeString = '';
// 	console.log(timeArray, timeArray[0]);

// 	for(var i = 0; i, timeArray.length; i++){
		
// 		timeString += timeArray[i].toString() + '.';
// 	}
// 	return timeString;

// };
