// controllers/busController.js
const Bus = require('../models/Bus');

// Fetch all buses
exports.getAllBuses = async (req, res) => {
  console.log('GET /getAllBuses called');
  try {
    const buses = await Bus.find(); // Fetch all buses from the collection
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBus = async (req, res) => {
  console.log('POST /createBus called------>', req.body);
  try {
    const { numberPlate, capacity, fares, toDestination, fromDestination, departureTime, reachTime, departureLocation, busName, pickupPoints} = req.body;
    const bus = new Bus({ numberPlate, capacity, fares, toDestination, fromDestination, departureTime, reachTime, departureLocation , busName, pickupPoints });
    await bus.save();
    res.status(201).json({bus, message : 'Bus Created Successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBus = async (req, res) => {
  console.log('PUT /updateBus called');
  try {
    const { numberPlate } = req.params; // Assuming numberPlate is used to find the bus
    const updates = req.body; // The updated data

    // Find and update the bus
    const bus = await Bus.findOneAndUpdate({ numberPlate }, updates, { new: true, runValidators: true });

    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    res.status(200).json({ bus, message: 'Bus updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBusDetails = async (req, res) => {
  console.log('GET /getBusDetails called');
  try {
    const { numberPlate } = req.params; // Assuming numberPlate is used to find the bus

    // Find the bus by numberPlate
    const bus = await Bus.findOne({ numberPlate });

    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    res.status(200).json({ bus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a bus by numberPlate
exports.deleteBus = async (req, res) => {
  console.log('DELETE /deleteBus called');
  try {
    const { numberPlate } = req.params; // Get the numberPlate from request parameters

    // Find and delete the bus by numberPlate
    const result = await Bus.deleteOne({ numberPlate });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Additional CRUD operations for buses
