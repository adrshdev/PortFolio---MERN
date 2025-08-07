const Project = require('../models/project');

const adminControllers = {
  createProject: async(req, res) => {
    const {formData} = req.body;
    console.log(formData);
  }
};

module.exports = adminControllers;