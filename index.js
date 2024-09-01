// // import { GoogleGenerativeAI } from "@google/generative-ai";
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// async function textGenTextOnlyPrompt() {
//   // [START text_gen_text_only_prompt]
//   // Make sure to include these imports:
//   // import { GoogleGenerativeAI } from "@google/generative-ai";
//   const genAI = new GoogleGenerativeAI("AIzaSyABlXjvHNkTTGH5Z86xLN7DrQX09Q8Vyw4");
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const prompt = "Write a story about a magic backpack.";

//   const result = await model.generateContent(prompt);
//   console.log(result.response.text());
//   // [END text_gen_text_only_prompt]
// }


// async function runAll() {
//   // Comment out or delete any sample cases you don't want to run.
//   await textGenTextOnlyPrompt();
  
// }

// runAll();


//index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

const crawlerRoutes = require('./routes/crawlerRoutes');
const aiRoutes = require('./routes/aiRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/crawler', crawlerRoutes);
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


