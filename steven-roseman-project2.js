//alert("JavaScript works!");

// Steven Roseman II
// SDI 1301
// Project 2
// Flow Chart


// My Variables
var sonExpression = "smile"
var tankLevel = "empty";
var tripDestination = "Pizza Hut";
var buyGallonsGas = 10; 
var foodIdeas = ["steak", "fish", "chicken", "potates", "rice"]; // available food
var servingSize = 5;
var walletFull = true;


//  Procedure
// Take son to park and see if he has a good time
function haveFun(reaction) {
    if (reaction == "smile") {
        console.log("had fun");
    } else {
        console.log("did not have fun");
    };
};

var park = haveFun(sonExpression);


//Boolean Function

function needGas (fuelLevel, hasMoney){
    
	//need gas if tank empty and I have money to pay for it
	if ((fuelLevel =="empty")&&(hasMoney)){
		return true ;
	} else {
                return false;
		
	}
};

var buyGas = needGas(tankLevel, walletFull); 

console.log(buyGas);


// String

function checkCar (fuelLevel, destination){
	
	if (fuelLevel =="full"){
		return "You can take the car to " + destination;
	}else 
	if (fuelLevel =="halfway"){
		return "You may have enough gas to make it to the " + destination;
	}else{
		return "Man, I don't have any gas; we'll have to walk to the " + destination + " in this heat";
	}
}

var transportation = checkCar (tankLevel, tripDestination);

console.log(transportation);


// Number function

function getGas(totalGallons) {
    var pricePerGallon = 3.75;
    var total = 0;
    
// rounding price of gas to nearest dollar
while (totalGallons > 0){
    total += Math.round(pricePerGallon);
    totalGallons--;
    }
     return total;
    
};
var getTotal = getGas (buyGallonsGas);
console.log(getTotal);


//Array

function dinnerChoices(foodList, servings) {
    
    var dinnerMenu = new Array();
    var tempChoice = 0;
    
    // limiting the amount of serving to one for each menu item
    if (servings > foodList.length){
        servings = foodList.length;
    }
    for (var i = 0; i < foodList.length; i++) {
        tempChoice = Math.floor((Math.random() * servings));
        dinnerMenu.push(foodList[tempChoice]);
    }
    return dinnerMenu;
};

var dinner = dinnerChoices(foodIdeas,servingSize);
console.log(dinner);








