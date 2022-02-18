const express = require('express');
const home = express.Router();

home.post('/', (req, res) => {
    return res.json({ "hola": 23 })
})

module.exports = home;