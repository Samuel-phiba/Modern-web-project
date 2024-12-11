const express = require('express');
const Media = require('../models/Media');

const router = express.Router();

// Get all media
router.get('/', async (req, res) => {
  const media = await Media.find();
  res.json(media);
});

// Add new media
router.post('/', async (req, res) => {
  const newMedia = new Media(req.body);
  await newMedia.save();
  res.status(201).json(newMedia);
});

module.exports = router;
