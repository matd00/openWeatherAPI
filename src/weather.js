const axios = require('axios');

const apiKey = 'cb1dfdb0a1c7c08a00813264fb331197';  // Sua chave da API
const city = 'Santos';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

axios.get(url)    
    .then(response => {
        const data = response.data;
        const feels_like = data.main.feels_like;

        if (feels_like >= 30) {
            console.log('Ruim');
        } else {
            console.log('Bom');
        }
        
        console.log(`=== ${city} ===`);
        console.log(`Temperatura: ${data.main.temp}°C`);
        console.log(`Condição: ${data.weather[0].description}`);
        console.log(`Umidade: ${data.main.humidity} %`);

        if (data.rain) {
            console.log(`Chuva: ${data.rain['1h']} mm`);
        } else {
            console.log('Chuva: Nenhuma');
        }

        console.log(`Sensação térmica: ${feels_like}°C`);
    })
    .catch((err) => {
        console.log('Erro ao buscar dados: ', err);
    });
