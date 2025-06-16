const axios = require('axios');
const { error } = require('console');

async function getWeatherData(city) {
    const API_KEY = process.env.API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`;
    
    try {
        const response = await axios.get(url);
        const weather = response.data;

        return {
            city: weather.name,
            temperature: weather,
            description: weather.weather[0].description,
            humidity: weather.main.humidity,
            windSpeed: weather.wind.speed,
            country: weather.sys.country
        }

    } catch (err) {
        console.error(error);
        throw new Error('Unable to fetch weather data');
        }
    } 

module.exports = { getWeatherData };