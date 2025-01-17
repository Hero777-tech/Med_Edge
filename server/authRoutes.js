const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./userModel');

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt for email:', email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password for user:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not set');
      return res.status(500).json({ message: 'Internal server error' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful for user:', email);
    res.json({ 
      token, 
      userId: user._id,
      userType: user.facilitySubType // or user.facilityType, depending on which you want to use
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

// Registration route
router.post('/register', async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      gender,
      phoneNumber,
      dateOfBirth,
      facilityType,
      facilitySubType
    } = req.body;

    console.log('Registration attempt for email:', email);

    // exisit in server
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // HASH MAP pass
    const hashedPassword = await bcrypt.hash(password, 10);

    // User new
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      gender,
      phoneNumber,
      dateOfBirth,
      facilityType,
      facilitySubType
    });

    await newUser.save();

    console.log('User registered successfully:', email);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

module.exports = router;