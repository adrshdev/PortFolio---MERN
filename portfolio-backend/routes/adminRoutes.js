const express = require('express');
const adminControllers = require('../controllers/AdminControllers');
const upload = require('../middlewares/multer');
const {createProject, fetchAllProjects} = adminControllers;

const adminRouter = express.Router();

adminRouter.post('/createproject', upload.single('coverImage'), createProject);
adminRouter.get('/fetchallprojects', fetchAllProjects);

module.exports = adminRouter;