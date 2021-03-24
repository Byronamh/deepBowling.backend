const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
    routes: fileRoutes,
} = require('./files/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/files', fileRoutes);

module.exports = app;