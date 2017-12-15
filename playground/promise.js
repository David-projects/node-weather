var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof  a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('please use numbera');
            }
    }, 1500);
    });
};

asyncAdd(5,4).then((res) => {
    console.log(res);
},(errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('Ok this worked');
//         reject('Sorry Hey. It worked!');
// },5000);
//
//
// });
//
// somePromise.then((message) => {
//     console.log('hello', message)
// },(errorMessage) => {
//     console.log(errorMessage);
// });