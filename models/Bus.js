// models/Bus.js
const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
  numberPlate: { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
  fares: [{ type: Number, required:true }],
  busName:{type: String,required:true},
  toDestination:{type: String, required:true},
  fromDestination:{type: String, required: true},
  departureTime: { type: String, required: true },  // storing time as a string
  reachTime: { type: String, required: true },  // storing time as a string
  departureLocation: { type: String, required: true }

  // Additional fields for route details, etc.
});

module.exports = mongoose.model('Bus', BusSchema);
