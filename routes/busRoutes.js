// routes/busRoutes.js
const express = require('express');
const router = express.Router();
const { createBus } = require('../controllers/busController');

router.post('/createBus', createBus);

// Additional routes for CRUD operations on buses

module.exports = router;
