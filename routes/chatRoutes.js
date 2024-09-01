// backend/routes/chatRoutes.js
const express = require('express');
const { handleUserQuery } = require('../controllers/chatController');
const router = express.Router();

router.post('/query', handleUserQuery);

module.exports = router;
