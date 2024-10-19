const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const { url } = req.body;
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
