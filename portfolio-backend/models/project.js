import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
    },
    technologies: {
      type: [String],
      required: [true, 'Technologies used are required'],
    },
    liveUrl: {
      type: String,
      validate: {
        validator: function(v) {
          return !v || /^https?:\/\/.+/.test(v);
        },
        message: 'Live URL must be a valid URL',
      }
    },
    repoUrl: {
      type: String,
      validate: {
        validator: function(v) {
          return !v || /^https?:\/\/.+/.test(v);
        },
        message: 'Repository URL must be a valid URL',
      },
    },
    coverImage: {
      type: String,
      required: [true, 'Cover Image is required'],
    },
  },
  {
    timestamps: true,
  },
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;