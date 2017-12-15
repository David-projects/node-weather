const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describle:'Address for weather',
            string:true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


geocode.geocodeAddress(argv.address)
    .then((res) => {
        console.log(`Address: ${res.address}`);
        console.log(JSON.stringify(res,undefined,4));
    },(errorMessage) => {
        console.log(errorMessage);
    });
//geocode.geocodeAddress(argv.address, (errorMessage,results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(`Address: ${results.address}`);
//         weather.getWeather(results.lat,results.lng,(errorMessage,weatherResults) => {
//             if(errorMessage){
//                 console.log(errorMessage);
//             } else{
//                 console.log(`Temperature: ${weatherResults.temperature}`);
//                 console.log(`Apparent Temperature ${weatherResults.apparentTemperature}`);
//             }
//         });
//     }
// });


// weather.getWeather(51.8065647,-0.7846256,(errorMessage,weatherResults) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     } else{
//         console.log(JSON.stringify(weatherResults,undefined,4));
//     }
// });

//darksky
//28cb4bab00b7f847f25b6d1d8e555cf4
//https://api.darksky.net/forecast/28cb4bab00b7f847f25b6d1d8e555cf4/51.8065647,-0.7846256

// Address": "20 Jansel Square, Aylesbury HP21 7ET, UK",
// "Lat": 51.8065647,
//     "Log": -0.7846256


//googleapi
//&key=AIzaSyCWuNKWFRWBVSUyjYLgjz3VHh33wWePJFo