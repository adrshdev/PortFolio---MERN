const Project = require('../models/project');

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
  }
};

module.exports = adminControllers;