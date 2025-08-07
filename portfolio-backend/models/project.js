const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  techstack: {
    type: [String],
    required: true,
  },
  liveLink: {
    type: String,
    trim: true,
  },
  sourceCode: {
    type: String,
    trim: true,
  },
}, {timestamps: true});

module.exports = mongoose.model('Project', projectSchema);