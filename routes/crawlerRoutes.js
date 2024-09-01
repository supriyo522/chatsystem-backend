const express = require('express');
const WebsiteContent = require('../models/WebsiteContent'); // Ensure this import is correct
const { crawlWebsite } = require('../controllers/crawlerController');
const router = express.Router();

// Endpoint to crawl a website
router.post('/crawl', crawlWebsite);

// Endpoint to get all crawled websites
router.get('/websites', async (req, res) => {
  try {
    const websites = await WebsiteContent.find(); // Use the imported model
    res.status(200).json(websites);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve websites', error: error.message });
  }
});

module.exports = router;


