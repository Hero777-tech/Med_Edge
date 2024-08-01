const express = require('express');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Test = require('../models/Test');
const router = express.Router();

const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: 'uploads'
    };
  }
});

const upload = multer({ storage });

router.post('/:id', upload.single('file'), async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    test.isUploaded = true;
    await test.save();
    res.json(test);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
