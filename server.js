require('dotenv').config();
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = process.env.PORT;
const activeDir = process.env.MODE === 'development' ? 'public' : 'build';

app.use(express.static(path.join(__dirname, 'client', activeDir)));

app.get('/message', async (req, res) => {
    //res.sendFile(path.join(__dirname, 'client', activeDir, 'pages.html'));
    console.log(req.query);
    const title = req.query.title ? req.query.title : 'My Message';
    const description = req.query.description ? req.query.description : 'Pure SSR is cool';
    try {
        const pathToFile = path.join(__dirname, 'client', activeDir, 'pages.html');
        const fileData = await fs.readFile(pathToFile, 'utf-8');
        const data = fileData.replace('%%:title', title).replace('%%:description', description);
        res.send(data);
    } catch(err) {
        console.log(err);
    }
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', activeDir, 'index.html')));

app.listen(port, () => console.log(`Server running on port ${port}`));