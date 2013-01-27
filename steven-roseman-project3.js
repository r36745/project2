// Steven Roseman
// Project 3
// Create Flow Chart

//myVariables

var attractions = new Array(); //one way to create a array
attractions[0] = "Ricks Cafe"; // setting an array element
attractions[1] = "Dolphin Cove";
attractions[2] = "7 mile beach";






// In Jamaica my wife and I stayed at a beautiful bed and breakfast hotel; that was on the cliffs, our hotel room was 40 ft from the water.
//Object, following getter/setters, then methods which contain trip data.
// Also, some of the places we saw.

var hotel = {
                roomType: "Superior Room",
                address: {street: " LightHouse Road ", city: "Jamaica", country: "West Indies"},
                employees: ["Teddy", " Petrona", "Linda"],
                amenities: "Room Service",
                name: "Blue Cave Castle",
                getRoomType : function () {
                    return this.roomType;
                },
                setRoomType: function (roomView) {
                    this.roomType = roomView;
                },
                getAddress: function () {
                    return this.address;
                },
                setAddress: function (hotelLocation) {
                    this.address = hotelLocation;
                },
                getEmployees: function () {
                    return this.employees;
                },
                setEmployees: function (awesomePeople) {
                    this.employees = awesomePeople;
                },
                getName: function () {
                    return this.name;
                },
                setName: function (hotelName) {
                    this.name = hotelName;
                },
                
                // Procedure
                roomQuality: function (roomName) {
                
                    if (roomName == "Superior Room") {
                    console.log( "I love this room." );
                    } else {
                    console.log( "Not my favorite room, but it will do.");
                    }
                    
                },
                       
                // Function
                // Silly function, but wanted to show nested loop
                
                hotelAmenities: function (roomService, rightAmount, excellentCustService) {
                    for (i = roomService; i <= rightAmount; i++) {
                        console.log("I'll have the Jerk lobster, please");
                        for (j = roomService; j <= excellentCustService; j++) {
                        console.log("I've never had jerk lobster before, this taste fabulous! My compliments to " + hotel.employees[0]);
                        }
                    }
                    return "This hotel has the perfect amenities";
                },      
                 
                
                
                // Number
                
                beachWaterTemp: function (tempValue, tempType) {
                var convertedTemp = 0;
                    
                    if (tempType == 'C' || tempType =='c') {
                        convertedTemp = tempValue * 9/5 +32;
                    } else if ( tempType == 'F' || tempType == 'f') {
                        convertedTemp = (tempValue - 32) * 5/9;
                    } else {
                        convertedTemp = -999;
                    }
                    return Math.round(convertedTemp);
                },
                
                //
                
                printJamaicaAttractions: function (attractionList){  // sample function that takes an array and prints to console each car
                    var attractionNumber = 0;			// local variable			
                    console.log(attractionList.length);
                    while(attractionNumber<attractionList.length){		// loops from 0 to carList.length-1
		console.log(attractionList[attractionNumber]); // prints the car at index i
		attractionNumber++;
                    }
                },
                
                //
                
                
                myWifeHadFun: function (noHugs, noKisses) {
                    if (noHugs != "love" && noKisses != "smooch") {
                        return false;
                    } else {
                        return true;
                    }
                }
}


function printAddress(hotelAddress) {
    return (hotelAddress.street + " " + hotelAddress.city + " " + hotelAddress.country);
}


console.log(hotel.name + " is a first class bed and breakfast, and they offer " + hotel.amenities);
console.log(hotel.name + " is located at " + printAddress(hotel.address));
hotel.roomQuality("Superior Room");
hotel.hotelAmenities(0,5,5);
console.log("32 degrees Celsius is Jamaica water temp " + hotel.beachWaterTemp(32,"c") + " degrees Fahrenheit");	// using the function and printing its output
console.log(" Jamaica's weather 100 degrees, Fahrenheit is " +  hotel.beachWaterTemp(100, 'F') + " degrees Celsius");
console.log("150 degrees Fahrenheit is " +  hotel.beachWaterTemp(100, 'x') + " degrees Celsius");  // using invalid tempType

console.log("This is the print of Negril attractions; you requested:");

hotel.printJamaicaAttractions(attractions); // just prints out Attractions array
hotel.myWifeHadFun("love", "smooch");







