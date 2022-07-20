
const router = require('express').Router();

const UserGetRoutes = require('./UserGet');
const UserAddRoutes = require('./UserAdd');
const UserEditRoutes = require('./UserEdit');
const UserDeleteRoutes = require('./UserDelete');
const picRouter = require('../../controllers/userController');

router.use('/profile', UserGetRoutes);
router.use('/profile', UserAddRoutes);
router.use('/profile', UserEditRoutes);
router.use('/profile', UserDeleteRoutes);
router.use('/upload', picRouter);

module.exports = router;