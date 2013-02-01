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


// Does a string follow an aaa@bbb.ccc pattern like an email address?

function emailString( emailAddress) {
        
    var atPosition = emailAddress.indexOf("@");
    var dotPosition = emailAddress.lastIndexOf(".");
    
    
    
    if (( atPosition == 3) && ( dotPosition == 7 )) {
        console.log("1st part");
        for (i = 0; i <= atPosition; i++) {
        console.log("2nd part");
        }
        for (j = 0; j <= dotPosition; j++) {
        console.log("3rd part");
        }
            if ((emailAddress.substring(0,4)==3) || (emailAddress.substring(5,8))) {
                console.log("4th part");
                return true;  // returns true if @ is in the third position
            }else {
                return false;  // returns false if "." is in wrong position
                }
               } else {
                    return false;  // substring pulls from 0-4 and 5-8, if "@" or "." is not in substring, returns false
    }   
}
emailString("dee@see.com");


// Number Function

function moveDecimal(num,decimalPosition){
 return  (Math.round(num  * Math.pow(10,decimalPosition)) / Math.pow(10, decimalPosition)).toFixed(decimalPosition); // returned decimal after third place
}
moveDecimal(3.14159,3);









var things = new Array (1, "pickles", 3, "onions", 5, "10", 6, "SDI");

function totalThings(thingArray) {

var total = 0;


for (i = 0; i < thingArray.length; i++) {
    console.log("is it here");
    if (typeof(things[i])=="number") {
    console.log("what about here");
    total += thingArray[i];
    }
    }
    return total;
} 
totalThings(things);

// String Function

function numberStringrConvert(num) {
    return Number(num);
}
Number("62");

// Array Function: Smallest value in an array




var multiNum = new Array (1, 4, 7, 9, 10, 14, 15);

function allNum(lowNum, secNum ) {
var nextHighNum = 0;


    for (i = 0; i < allNum.length; i++) {
        if (multiNum[i] > multiNum ) {
            nextHighNum = multiNum;
        }
    }
    return nextHighNum;
}
allNum(multiNum, 12);






