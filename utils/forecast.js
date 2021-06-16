const request = require('postman-request')

const forecast =  (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0039a8b003fbedc35ef0c3bb2c0fd837&query=' + lat + ',' + long + '&units=f'
    console.log(url)
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback ('Unable to connect to the location services!', undefined)
        } else if (response.body.success === false) {
            callback ('Unable to find location. Try another search!', undefined)
        } else {
            callback (undefined, {
                temperature: response.body.current.temperature,
                weather: response.body.current.weather_descriptions,
                location: response.body.location.name
            })
        }
    })
}

module.exports = forecast