const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  patientId: { type:Number,require:true }, // Reference to the User model
  medication: { type: String, required: true },
  dosage: { type: String, required: true },
  frequency: { type: String, required: true },
  duration: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  notes: { type: String }
});

const Pres = mongoose.model('Prescription', prescriptionSchema);
module.exports= {Pres}