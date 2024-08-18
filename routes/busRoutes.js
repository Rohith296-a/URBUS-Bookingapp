// routes/busRoutes.js
const express = require('express');
const router = express.Router();
const { createBus, updateBus, getBusDetailss } = require('../controllers/busController');

router.post('/createBus', createBus);

// Route to update bus details
router.put('/updateBus/:numberPlate', updateBus); // Updated route

// Route to fetch bus details
router.get('/getBusDetails/:numberPlate', getBusDetails); // New route

// Route to delete a bus
router.delete('/deleteBus/:numberPlate', deleteBus); // New route

// Additional routes for CRUD operations on buses

module.exports = router;
