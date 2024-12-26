const friend = {
    status: 'failure',
}

const request = new Promise((resolve, reject) => {
    if (friend.status === 'success') {
        friend.time = '12:00';
        resolve(friend);
    } else {
        friend.excuse = 'traffic jam';
        reject(friend);
    }
})

request.then(data => {
    data.place = 'Humo arena';
    return data;
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log('called me')
})

const logger = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

Promise.all([logger(1000), logger(2000)]).then(() =>  //it runs after all functions work 
    console.log('every promise was resolved')
);

Promise.race([logger(1000), logger(2000)]).then(() => //it runs after the first function work
    console.log('Every promise was resolved')
);

logger(1000).then(() => console.log('1000 ms'));
logger(2000).then(() => console.log('2000 ms'));
