// Steven Roseman
// Project 3
// Create Flow Chart


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

                
                // Procedure
                
                roomQuality: function (roomName) {
                
                    if (roomName == "Superior Room") {
                    console.log( "I love this room." );
                    } else {
                    console.log( "Not my favorite room, but it will do.");
                    }
                    
                },
                       
      // Function
                
                getAmenities: function() {
                    return this.amenities;
                },
                setHotelAmenities: function(roomService) {
                    if (roomService == "Delicious" || roomService == "just right") { 
                    
                        } else if (roomService == "oneMore" && roomService == "the best") {
                        } else {
                         }
                         this.amenities = roomService;
                }
                            
                        
                               
}

hotel.setHotelAmenities("Delicious", "just right");
console.log(hotel.getHotelAmenities);

hotel.roomQuality("Superior Room");








