// backend/routes/userRoutes.js
const express = require('express');
const { createUser, getUserAnalytics } = require('../controllers/userController');
const router = express.Router();

router.post('/create', createUser);
router.get('/analytics', getUserAnalytics);

module.exports = router;
