const request = require('request');

var getWeather = (lng,lat,callback) => {

    request({
        url:`https://api.darksky.net/forecast/28cb4bab00b7f847f25b6d1d8e555cf4/${lng},${lat}`,
        json:true
    },(error,response,body) => {
        if(!error && response.statusCode == 200) {
            callback(null,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        } else {
            callback('Unable to get weather');
        }
    });
};

module.exports = {
    getWeather
};
