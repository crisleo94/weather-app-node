require('dotenv').config()
const axios = require('axios')

const apiUrl = process.env.NODE_WS_API
const apiKey = process.env.NODE_WS_KEY

const getPlaceLatLng = async ( adr ) => {

    const query = encodeURI(adr)

    const data = await axios.get(`${apiUrl}?access_key=${apiKey}&query=${query}`)

    let location = data.data.location
    let address = location.name
    let lat = location.lat
    let lng = location.lon


    if(location === '') {
      throw new Error(`Thers's no data for ${adr}`)
    } else {
      location = data.data.location
      address = location.name
      lat = location.lat
      lng = location.lon
    }

    return {
        address,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLng
}
