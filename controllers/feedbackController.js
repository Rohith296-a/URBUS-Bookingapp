// controllers/feedbackController.js
const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const { user, bus, feedback } = req.body;
    const newFeedback = new Feedback({ user, bus, feedback });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Additional operations for managing feedback
