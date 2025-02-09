const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// החלף את YOUR_API_KEY כאן עם ה-API Key שלך מ-Render
const API_KEY = 'rnd_au1v8G3HAMGAQD79YCEQC1A5mF8F';

app.get('/apps', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving applications');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});