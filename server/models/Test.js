const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  patientId: Number,
  patientName: String,
  testType: String,
  dueDate: String,
  referBy: String,
  isUploaded: Boolean
});

module.exports = mongoose.model('Test', TestSchema);
