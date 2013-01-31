//alert("JavaScript works!");
// Steven Roseman II
// Project 4

// String Functions
// Does a striing follow a 123-456-7890 pattern like a phone number?

function numberString( phoneNumber ){
	
	var areaCode, firstThree, secondThree;
	
	if (phoneNumber.length == 12){
		if ((phoneNumber.indexOf("-")==3)&&(phoneNumber.indexOf("-",4)==7)){
			if (  !isNaN(phoneNumber.substring(0,3)) && !isNaN(phoneNumber.substring(4,7)) && !isNaN(phoneNumber.substring(8))   ){
				return true; // returns true if correct phone# format
			}else {
				return false; // returns false if any set of set of numbers contains something that is not a number
			}
		}
		else {
			return false; // dash are wrong
		}
	
	}else {
		return false; // number wrong size
	}
}
numberString("704-569-4225");