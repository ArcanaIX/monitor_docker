import express from 'express';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile("./public/index.html", { root: __dirname });
})

app.get('/script', (req, res) => {
    res.sendFile("./public/script.js", { root: __dirname });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})