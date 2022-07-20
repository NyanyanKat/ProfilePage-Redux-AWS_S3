"use strict";
const combineRouter = require('express').Router();
const apiRoutes = require('./api');
combineRouter.use('/api', apiRoutes);
module.exports = combineRouter;
