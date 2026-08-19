const express = require('express');
const dotenv = require('dotenv');
const api = require('./api')
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:4173",
        "https://siennamaria.com",
        "https://www.siennamaria.com",
        "https://siennamaria-com.onrender.com",
    ]
}))

app.use('/api', api);

app.get('/api', (req, res) => {
    res.status(400).json({
        error: 'No api route defined'
    })
})

app.all('{*splat}', (req, res) => {
    res.status(404).json({ error: 'No such route exists' })
})

app.listen(port, "0.0.0.0", () => {
    console.log(`Listening on port ${port}.`)
})