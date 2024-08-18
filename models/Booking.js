// models/Booking.js
const mongoose = require('mongoose');

// Define the sub-schema for passenger details
const PassengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true }
});

const BookingSchema = new mongoose.Schema({
  user: { type: String, required: true },
  bus: { type: String, required: true },
  toDestination:{type: String, required:true},
  fromDestination:{type: String, required: true},
  seats: { type: Number, required: true },
  passengerDetails:[PassengerSchema]
  // Additional fields for booking details, etc.
});

module.exports = mongoose.model('Booking', BookingSchema);
