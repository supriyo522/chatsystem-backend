// backend/models/WebsiteContent.js
const mongoose = require('mongoose');

const WebsiteContentSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  text: String,
  images: [String],
  links: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WebsiteContent', WebsiteContentSchema);
