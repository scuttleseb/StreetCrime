const express = require('express');
const app = express();
const fs = require('fs');
const superagent = require('superagent');

module.exports = app;
app.use(express.json()); 


