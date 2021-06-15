const request = require('postman-request')

/* const url = 'http://api.weatherstack.com/current?access_key=0039a8b003fbedc35ef0c3bb2c0fd837&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location!')
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
    }
}) */

// Geocoding service
// Address -> Lat/Long -> Weather
const getAddressURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Sydney.json?access_token=pk.eyJ1Ijoic2NlbmFnZSIsImEiOiJja3B4aHR2dHMxdWdkMnFxcjIzbmNqczAxIn0.bNgUFdlmQFIGAZTOTI3J-A&limit=1'

request({ url: getAddressURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Error found in response body!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search!')
    } else {
        console.log('Lat: ' + response.body.features[0].center[1])
        console.log('Long: ' + response.body.features[0].center[0])
    }
})

