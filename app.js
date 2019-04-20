const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./Lugar/lugar');
const clima = require('./clima/clima');

console.log(argv.direccion);

/* 
lugar.getLugarLatLng(argv.direccion).then((result) => {
    console.log(result);

    clima.getClima(result.lat, result.long).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Error clima', err);
    });

}).catch((err) => {
    console.log('Error Direccion', err);
}); */

const getInfo = async(direccion) => {
    try {
        const cords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cords.lat, cords.long);
        return `El clima de ${cords.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

};

getInfo(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});