

// In Jamaica my wife and I stayed at a beautiful bed and breakfast hotel; that was on the cliffs, our hotel room was 40 ft from the water.


var hotel = {
                roomType: "Superior Room",
                address: {street: " LightHouse Road ", city: "Jamaica", country: "West Indies"},
                employees: ["Teddy", " Petrona", "Linda"],
                amenities: "Room Service",
                name: "Blue Cave Castle",
                
                // Procedure
                
                roomQuality: function (roomName) {
                
                    if (roomName == "Superior Room") {
                    console.log( "I love this room." );
                    } else {
                    console.log( "Not my favorite room, but it will do.");
                    }
                    
                }
}




hotel.roomQuality("Superior Room");





