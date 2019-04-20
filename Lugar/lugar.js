const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encoderURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderURL}`,
        timeout: 4000,
        headers: { 'X-RapidAPI-Key': '1b43a96c14msh2832493c702daaap118f0ajsn36831e585f2a' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    } else {

        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const long = data.lon;

        return {
            direccion,
            lat,
            long
        }
    }
};

module.exports = {
    getLugarLatLng
}