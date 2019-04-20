const axios = require('axios');


const getClima = async(lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f68cdb4b7188c5d5f02eaca58ca06666&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}