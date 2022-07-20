
const router = require('express').Router();

const UserGetRoutes = require('./UserGet');
const UserAddRoutes = require('./UserAdd');
const UserEditRoutes = require('./UserEdit');
const UserDeleteRoutes = require('./UserDelete');

router.use('/profile', UserGetRoutes);
router.use('/profile', UserAddRoutes);
router.use('/profile', UserEditRoutes);
router.use('/profile', UserDeleteRoutes);

module.exports = router;