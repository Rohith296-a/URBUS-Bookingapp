// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const { createFeedback } = require('../controllers/feedbackController');

router.post('/', createFeedback);

// Additional routes for managing feedback

module.exports = router;
