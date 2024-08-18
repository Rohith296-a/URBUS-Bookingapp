// controllers/busController.js
const Bus = require('../models/Bus');

exports.createBus = async (req, res) => {
  console.log('POST /createBus called');
  try {
    const { numberPlate, capacity, fares, toDestination, fromDestination, departureTime, reachTime, departureLocation, busName} = req.body;
    const bus = new Bus({ numberPlate, capacity, fares, toDestination, fromDestination, departureTime, reachTime, departureLocation , busName });
    await bus.save();
    res.status(201).json({bus, message : 'Bus Created Successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Additional CRUD operations for buses
