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

