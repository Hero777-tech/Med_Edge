const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// Verify environment variables
console.log('JWT_SECRET is set:', !!process.env.JWT_SECRET);
console.log('MONGODB_URI is set:', !!process.env.MONGODB_URI);

const app = express();

// CORS Configuration
app.use(cors({
  origin: 'https://med-edge-pi.vercel.app', // Allow requests only from this origin
  credentials: true, // Allow credentials such as cookies or authorization headers
  optionsSuccessStatus: 200 // For legacy browser support
}));

// Middleware
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(${new Date().toISOString()} - ${req.method} request to ${req.url});
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./authRoutes'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/tests', require('./routes/tests'));
app.use('/api/upload', require('./routes/upload'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});

// Catch-all for unmatched routes
app.use((req, res) => {
  console.log(404: ${req.method} request for ${req.url});
  res.status(404).send('Not found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(${new Date().toISOString()} - Error:, err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});