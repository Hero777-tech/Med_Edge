const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const getusr= require("./controler/getuser")
const prescription= require("./routes/addprescription");
const getpres= require("./controler/getprescription")

dotenv.config();

// Add this line to verify JWT_SECRET is set
console.log('JWT_SECRET is set:', !!process.env.JWT_SECRET);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./authRoutes'));

// Add this line to include the new appointments routes
app.use('/api/appointments', require('./routes/appointments'));

// for test upload data
app.use('/api/tests', require('./routes/tests'));
app.use('/api/upload', require('./routes/upload'));
app.use('/', getusr)
app.use('/', prescription)
app.use('/', getpres)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add this at the end to catch unmatched routes
app.use((req, res) => {
  console.log(`Received request for ${req.method} ${req.url}`);
  res.status(404).send('Not found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});