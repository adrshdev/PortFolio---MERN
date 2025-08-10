const mongoose = require('mongoose');

const upcomingProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: [String]
  }
);

const UpcomingProject = mongoose.model('UpcomingProject', upcomingProjectSchema);
module.exports = UpcomingProject;