const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.json());

app.use(bodyParser.json());


app.get('/', (_req, res) => {
    res.send('Welcome');
})
module.exports = app;