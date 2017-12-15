const yargs = require('yargs');
const axios = require('axios');

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

var address = encodeURIComponent(argv.address);

var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCWuNKWFRWBVSUyjYLgjz3VHh33wWePJFo`;

axios.get(url).then((response) => {
    if (response.data.status === 'ZERO_RESULTS'){
        console.log('Unable to find address');
        throw new Error('Unable to find address');
    }
    console.log(response.data.results[0].formatted_address);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/28cb4bab00b7f847f25b6d1d8e555cf4/${lng},${lat}`;
    return axios.get(weatherUrl);
    }).then((response) => {
    console.log(`Temperature: ${response.data.currently.temperature}`);
    console.log(`ApparentTemperature: ${response.data.currently.apparentTemperature}`);

}).catch((e) => {
    console.log('An error has happen.');
});

// geocode.geocodeAddress(argv.address)
//     .then((res) => {
//         console.log(`Address: ${res.address}`);
//         console.log(JSON.stringify(res,undefined,4));
//     },(errorMessage) => {
//         console.log(errorMessage);
//     });
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