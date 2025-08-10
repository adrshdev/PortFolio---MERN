const express = require('express');
const adminControllers = require('../controllers/AdminControllers');
const upload = require('../middlewares/multer');
const {createProject, fetchAllProjects, addUpcomingProject, fetchAllUpcomingProjects} = adminControllers;

const adminRouter = express.Router();

adminRouter.post('/createproject', upload.single('coverImage'), createProject);
adminRouter.post('/addupcomingproject', addUpcomingProject);

adminRouter.get('/fetchallprojects', fetchAllProjects);
adminRouter.get('/fetchallupcomingprojects', fetchAllUpcomingProjects)

module.exports = adminRouter;