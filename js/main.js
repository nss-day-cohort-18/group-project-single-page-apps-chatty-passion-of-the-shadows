function addTimeStamp() {
	var now = new Date();
	console.log(now);

	var year = now.getFullYear();
	var month = now.getMonth();
	var date = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();

	return [year, month, date, hour, minute, second];

}

addTimeStamp();

function romanize(timeArray) {
	var one = 'I';
	var five = 'V';
	var ten = 'X';
	var fifty = 'L';
	var hundred = 'C';
	var fiveHundred = 'D';
	var thousand = 'M';

	var remainder = 0;

  // reduce time units to strings of Roman numerals
  // 
  for (var i = 0; i < timeArray.length; i++){
  	//A Date Aspect is a unit of time i.e. current year, month,
  	//hour, minutes, etc. We pull these one by one from the
  	//timeArray parameter passed into this function.
  	//
  	var thisDateAspect = timeArray[i];
	
	// We find the number of digits in the current Date Aspect
	// by dividing by a power of ten until the operation returns a
	// fraction. A separate function, getDigits(), solves this problem
	// for us.
	// 
  	var lengthOf_Q = getDigits();

  	for (var q = 0; q < lengthOf_Q; q++);
  		//We want to divide the entire number by the exponent of the number's
  		//most significant digit. For example, in the number 2012, its most 
  		//significant digit would be the 2 in the thousands place. Thus we
  		//start by dividing 2012 by 10 to the power of 4. The number of digits
  		//our number has was determined by getDigits(), which result we applied to 
  		//the variable lengthOf_Q.
  		//
  		

  }
  
function getDigits() {





}

  // coinPurse.quarters = Math.floor(skrill / 25);
  // remainder = skrill % 25;
  // console.log(Math.floor(skrill/25));
  // coinPurse.dimes = Math.floor(remainder / 10);
  // console.log(Math.floor(skrill/10))
  // remainder %= 10;
  // console.log(remainder);
  // coinPurse.nickels = Math.floor(remainder / 5);
  // console.log(Math.floor(skrill/5))
  // remainder %= 5;
  // console.log(remainder);
  // coinPurse.pennies = remainder;
}
