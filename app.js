const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { error } = require('console')

function getAddress () {
    const address = process.argv[2]
    if (address === undefined){
        console.log('No address provided!')
        return undefined
    }
    return address
}

const address = getAddress()

geocode (address, (error, { latitude, longitude, location} = {}) => {

    if (error || address === undefined) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(location)
        console.log('Data', forecastData)
      })
})