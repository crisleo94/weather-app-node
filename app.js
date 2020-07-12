const place = require('./place/place')
const weather = require('./weather/weather')

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Location address to obtain the weather',
        demand: true
    }
}).argv




const getInfo = async ( address ) => {

    try {
        const location = await place.getPlaceLatLng( address )
        let lat = location.lat
        let lng = location.lng
        const temp = await weather.getWeather( lat, lng )
        
        return console.log(`The temperature in ${location.address} is ${temp}º`)
    } catch (e) {
        return console.log(`There's no info for ${location.address}`)
    }
}

getInfo(argv.address)
 .then(resp => console.log)
 .catch(err => console.log)
