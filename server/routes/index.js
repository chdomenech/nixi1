const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


app.use(require('./people'));
app.use(require('./travels'));
app.use(require('./city'));
app.use(require('./country'));

module.exports = app;