const express = require('express');
const adminControllers = require('../controllers/AdminControllers');
const {createProject} = adminControllers;

const adminRouter = express.Router();

adminRouter.post('/createproject', createProject);

module.exports = adminRouter;