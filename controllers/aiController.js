//  backend/controllers/aiController.js
const WebsiteContent = require('../models/WebsiteContent');
const { generateAIResponse } = require('../utils/ai');

exports.processContent = async (req, res) => {
  const { websiteId, query } = req.body;

  try {
    const websiteContent = await WebsiteContent.findById(websiteId);
    if (!websiteContent) {
      return res.status(404).json({ message: 'Website content not found' });
    }

    const aiResponse = await generateAIResponse(websiteContent.text, query);
    res.status(200).json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ message: 'Failed to process content', error: error.message });
  }
};

