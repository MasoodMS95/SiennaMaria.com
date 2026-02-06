const express = require('express');
const dotenv = require('dotenv');
const api = require('./api')

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/api', api);

app.get('/api', (req, res)=>{
    res.status(400).json({
        error:'No api route defined'
    })
})

app.get('/test', (req, res) => {
    console.log(`Test Value: ${port}`);
    res.send(`Test Value: ${port}`);
})

app.all('{*splat}', (req, res)=>{
    res.status(404).json({error:'No such route exists'})
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`)
})