// backend/routes/aiRoutes.js
const express = require('express');
const { processContent } = require('../controllers/aiController');
const router = express.Router();

router.post('/process', processContent);

module.exports = router;

