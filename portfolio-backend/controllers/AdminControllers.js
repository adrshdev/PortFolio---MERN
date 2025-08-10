const Project = require('../models/project');
const UpcomingProject = require('../models/upComingProject');

const adminControllers = {
  createProject: async(req, res) => {
    const {title, description, technologies, liveUrl, repoUrl} = req.body;
    const coverImage = req.file ? `/uploads/${req.file.filename}` : null;
    try{
      const project = new Project({
        title,
        description,
        technologies,
        liveUrl,
        repoUrl,
        coverImage,
      });
      await project.save();
      res.status(201).json({success: true, project});
    }catch(error){
      console.error({success: false, error});
    }
  },

  fetchAllProjects: async(req, res) => {
    try{
      const allProjects = await Project.find();
      console.log(allProjects);
      res.status(201).json({success: true, allProjects})
    }catch(error){
      console.error(error);
    }
  },

  addUpcomingProject: async(req, res) => {
    const {form} = req.body;
    try{
      const newUpcomingProject = await new UpcomingProject({
        title: form.title,
        description: form.description,
        technologies: form.technologies,
      });
      await newUpcomingProject.save();
      res.status(201).json({success: true, newUpcomingProject});
    }catch(error){
      res.json({success: false, error});
    }
  },

  fetchAllUpcomingProjects: async(req, res) => {
    try{
      const allUpcomingProjects = await UpcomingProject.find();
      console.log(allUpcomingProjects);
      res.status(201).json({success: true, allUpcomingProjects});
    }catch(error){
      res.json({success: false, error})
    }
  }
};

module.exports = adminControllers;