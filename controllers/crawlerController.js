const axios = require('axios');
const cheerio = require('cheerio');
const WebsiteContent = require('../models/WebsiteContent');

exports.crawlWebsite = async (req, res) => {
  const { url } = req.body;

  try {
    const { data, status } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
      }
    });

    if (status !== 200) {
      throw new Error(`Failed to fetch the page. Status code: ${status}`);
    }

    const $ = cheerio.load(data);

    const content = {
      url,
      text: $('body').text(),
      images: $('img').map((i, el) => $(el).attr('src')).get(),
      links: $('a').map((i, el) => $(el).attr('href')).get(),
    };

    const websiteContent = new WebsiteContent(content);
    await websiteContent.save();

    res.status(200).json({ message: 'Website content saved successfully' });
  } catch (error) {
    let errorMessage = 'Failed to crawl the website.';
    if (error.response) {
      errorMessage += ` Status code: ${error.response.status}`;
    } else if (error.request) {
      errorMessage += ' No response received from the server.';
    } else {
      errorMessage += ` ${error.message}`;
    }
    res.status(500).json({ message: errorMessage });
  }
};
