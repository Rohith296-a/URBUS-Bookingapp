// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController');

router.post('/', createBooking);

// Additional routes for managing bookings

module.exports = router;
