const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comment', commentRoutes);

module.exports = router;