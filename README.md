URBUS.COM booking App. - Documentation

Project Structure:
bus-booking-app/s
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.js
│       └── index.js
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── app.js
│   └── config.js
├── .env
├── docker-compose.yml
├── Dockerfile
└── README.md

API Details:
1.	http://localhost:5000/api/auth/register

     {
  "username": "testadmin",
  "role": "Admin",
  "password": "testpassword"
   }
2.	http://localhost:5000/api/auth/login

METHOD: POST
   {
  "username": "testadmin",
  "password": "testpassword"
}

3.	http://localhost:5000/api/buses/createBus

METHOD: POST

{
    "numberPlate": "KA02KL2098",
    "capacity": "30",
    "fares":"800",
    "toDestination":"TamilNadu",
    "fromDestination":"Bangalore",
    "departureTime":"18:30",
    "reachTime": "5:00",
    "departureLocation":"KSR",
    "busName": "SRJ Travels"

}

4.  http://localhost:5000/api/buses/updateBus/{numberPlate}

      Method: PUT
      URL: http://localhost:5000/api/buses/updateBus/{numberPlate} (replace {numberPlate} with the actual number plate of the bus you want to update)
      Body (example JSON):
      json
      Copy code
      {
      "capacity": 40,
      "fares": ["850"],
      "toDestination": "Chennai",
      "fromDestination": "Bangalore",
      "departureTime": "19:00",
      "reachTime": "6:00",
      "departureLocation": "KSR",
      "busName": "SRJ Travels Deluxe"
      }

5. http://localhost:5000/api/buses/getBusDetails/{numberPlate}

   Method: GET
   URL: http://localhost:5000/api/buses/getBusDetails/{numberPlate} (replace {numberPlate} with the actual number plate of the bus you want to retrieve)

6. http://localhost:5000/api/buses/deleteBus/{numberPlate}

   Method: DELETE
   URL: http://localhost:5000/api/buses/deleteBus/{numberPlate} (replace {numberPlate} with the actual number plate of the bus you want to delete) 
