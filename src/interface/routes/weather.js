const express = require('express');
const router = express.Router(); 
const weatherController = require('../controllers/WeatherController');

router.get('/', weatherController.getWeather);
module.exports = router;