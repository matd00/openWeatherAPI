const express = require('express');
const app = express();
const dotenv = require('dotenv');
app.use(express.json());

const indexRoutes = require('./interface/routes/index');
const weatherRoutes = require('./interface/routes/weather');

app.use('/', indexRoutes);
app.use('/weather', weatherRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Algo deu errado. Por favor, tente novamente mais tarde.' });
});

module.exports = app;