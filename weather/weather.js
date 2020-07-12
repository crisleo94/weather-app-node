require('dotenv').config()
const axios = require('axios')

const apiUrl = process.env.NODE_OW_API
const apiKey = process.env.NODE_OW_KEY

const getWeather = async (lat, lng) => {
    const data = await axios.get(`${apiUrl}?appid=${apiKey}&lat=${lat}&lon=${lng}&units=metric`)

    return data.data.main.temp
}

module.exports = {
    getWeather
}
