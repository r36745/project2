// Steven Roseman
// Project 3
// Create Flow Chart

//myVariables




// In Jamaica my wife and I stayed at a beautiful bed and breakfast hotel; that was on the cliffs, our hotel room was 40 ft from the water.


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
                // Nested Loop
                
                hotelAmenities: function (roomService, rightAmount, excellentCustService) {
                    for (i = roomService; i <= rightAmount; i++) {
                        console.log("I'll have the Jerk lobster, please");
                        for (j = roomService; j <= excellentCustService; j++) {
                        console.log("I've never had jerk lobster before, this taste fabulous! My compliments to " + hotel.employees[0]);
                        }
                    }        
                }       
                 
                //
                
                
}


hotel.roomQuality("Superior Room");
hotel.hotelAmenities(0,5,5);








