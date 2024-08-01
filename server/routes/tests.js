const express = require('express');
const router = express.Router();
const Test = require('../models/Test');

// Get all tests
router.get('/', async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new test
router.post('/', async (req, res) => {
  const test = new Test({
    patientId: req.body.patientId,
    patientName: req.body.patientName,
    testType: req.body.testType,
    dueDate: req.body.dueDate,
    referBy: req.body.referBy,
    isUploaded: req.body.isUploaded
  });

  try {
    const newTest = await test.save();
    res.status(201).json(newTest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
