const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id:{
    type:Number,
    required:true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  genre: {
    type: [String],
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  videourl: {
    type: String,
    required: true
  },
  trailertitle: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Movie', movieSchema);
