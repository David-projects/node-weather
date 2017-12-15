const request = require('request');

var geocodeAddress = (address) =>{

    var address = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCWuNKWFRWBVSUyjYLgjz3VHh33wWePJFo`,
                json: true
            },(error,response,body) => {
                if(error){
                    reject('Unable to connect to servers');
                } else if (body.status === 'ZERO_RESULTS'){
                    reject('Unbale to found address');
                } else {
                    resolve({
                        address: body.results[0].formatted_address,
                        lat: body.results[0].geometry.location.lat,
                        lng: body.results[0].geometry.location.lng
                    });
                    return new Promise
                }
        });
    });


    // request({
    //     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCWuNKWFRWBVSUyjYLgjz3VHh33wWePJFo`,
    //     json: true
    // }, (error, response, body) => {
    //     if(error) {
    //         callback('unable to connect to servers');
    //     } else if(body.status === 'ZERO_RESULTS') {
    //             callback('Unbale to found address');
    //     }else if (body.status === 'OK') {
    //         callback(null,{
    //             address: body.results[0].formatted_address,
    //             lat: body.results[0].geometry.location.lat,
    //             lng: body.results[0].geometry.location.lng
    //         });
    //     } else {
    //         console.log('Something when wrong');
    //     }
    // });
};

module.exports = {
    geocodeAddress
}