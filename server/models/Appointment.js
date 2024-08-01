const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    default: 'Pending'
  },
  age: {
    type: Number,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  medicalHistory: String,
  reasonForVisit: String,
  notes: String
});

module.exports = mongoose.model('Appointment', AppointmentSchema);