const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  title: String,
  genre: String,
  description: String,
  rating: Number,
  trailerUrl: String,
  reviews: [
    {
      user: String,
      comment: String,
    },
  ],
});

module.exports = mongoose.model('Media', MediaSchema);
