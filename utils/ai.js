// backend/utils/ai.js
const dotenv = require('dotenv');
dotenv.config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.supriyoapi);

exports.generateAIResponse = async (content, query) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = `${content}\n\n${query}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

