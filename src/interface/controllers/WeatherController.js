const { error } = require('console');
const weatherService = require('../../application/services/weatherService');

async function getWeather(req, res) {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'City name is required! ' });
    }

    try {
        console.log(`recebendo requests para a cidade: ${city}`);

    } catch (err) {
        console.error(`Erro ao obter dados de clima ${err}`);

        res.status(500).json({ error: `Unbale to get weather data` });
    }
}

module.exports = { getWeather };