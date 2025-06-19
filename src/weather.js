const axios = require('axios');

const apiKey = 'cb1dfdb0a1c7c08a00813264fb331197';

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
    
        {   
            console.log(`=== ${city} ===`);
            console.log(`Temperatura: ${data.main.temp}`);
            console.log(`Condicao: ${data.weather[0].description}`);
            console.log(`Umidade: ${data.main.humidity} % `);
            console.log(`Chuva: ${data.main.rain}`);
            console.log(`${feels_like}`);
        }
        
    }).catch((err) => {
        console.log('error on fetching data ', err)
        
    });    