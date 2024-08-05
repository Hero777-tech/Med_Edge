const express = require("express");
const router = express.Router();
const { Pres } = require("../models/prescription");

router.post('/api/prescription', async (req, res) => {
    try {
        const { patientId, medication, dosage, frequency, duration, startDate, endDate, notes } = req.body;
        console.log(req.body);

        // Check if a prescription for the given patient already exists
        const existingPrescription = await Pres.findOne({ patientId });

        if (!existingPrescription) {
            // If no existing prescription, create a new one
            const newPrescription = new Pres({
                patientId,
                medication,
                dosage,
                frequency,
                duration,
                startDate,
                endDate,
                notes
            });

            // Save the new Prescription to the database
            await newPrescription.save();

            // Send a response
            res.status(201).json({ message: 'Prescription created successfully', prescription: newPrescription });
        } else {
            // If a prescription exists, update it
            existingPrescription.medication = medication;
            existingPrescription.dosage = dosage;
            existingPrescription.frequency = frequency;
            existingPrescription.duration = duration;
            existingPrescription.startDate = startDate;
            existingPrescription.endDate = endDate;
            existingPrescription.notes = notes;

            // Save the updated Prescription to the database
            await existingPrescription.save();

            // Send a response
            res.status(200).json({ message: 'Prescription updated successfully', prescription: existingPrescription });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
