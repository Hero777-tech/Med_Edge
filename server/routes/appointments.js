const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET all appointments
router.get('/', async (req, res) => {
    try {
      const appointments = await Appointment.find().sort({ date: 1 });
      res.json(appointments);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      res.status(500).json({ message: 'Error fetching appointments', error: err.message });
    }
  });

// POST a new appointment
router.post('/', async (req, res) => {
  const appointment = new Appointment({
    patientName: req.body.patientName,
    date: req.body.date,
    time: req.body.time,
    age: req.body.age,
    contact: req.body.contact,
    medicalHistory: req.body.medicalHistory,
    reasonForVisit: req.body.reasonForVisit,
    notes: req.body.notes
  });

  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;