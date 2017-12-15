console.log('Starting app');

setTimeout(() => {
    console.log('inside function');
},2000);


setTimeout(() => {
    console.log('inside two');
},0);
console.log('finishing app');