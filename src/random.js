
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded')
    }, 1000);
});

myPromise.then(value => console.log(value));



const myPromise2 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve('I have succeeded')
        }, 1000);
    }
    else {
        reject('I have failed');
    }
});

myPromise2
    .then(value => value + '!!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));












