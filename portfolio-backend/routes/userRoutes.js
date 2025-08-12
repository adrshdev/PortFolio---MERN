const express = require('express');
const userControllers = require('../controllers/UserControllers');
const {fetchAllProjects, fetchAllUpcomingProjects} = userControllers;

const userRouter = express.Router();

userRouter.get('/fetchallprojects', fetchAllProjects);
userRouter.get('/fetchallupcomingprojects', fetchAllUpcomingProjects);

module.exports = userRouter;