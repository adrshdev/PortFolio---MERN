const Project = require("../models/project");
const UpcomingProject = require("../models/upComingProject");

const userControllers = {
  fetchAllProjects: async(req, res) => {
    try{
      const projects = await Project.find();
      res.status(201).json({success: true, projects});
    }catch(error){
      res.status(500).json({success: false});
    }
  },

  fetchAllUpcomingProjects: async(req, res) => {
    try{
      const upcomingProjects = await UpcomingProject.find();
      res.status(201).json({success: true, upcomingProjects});
    }catch(error){
      res.status(500).json({success: true});
    }
  }
};

module.exports = userControllers;