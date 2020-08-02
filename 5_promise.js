// console.log('request data...');
// setTimeout(() => {
//     console.log('preparing data...');

//     const backendData = {
//         server: 'aws',
//         status: 'working',
//         port: 2000
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('data received', backendData);
//     }, 2000)
// }, 2000)  

//  минус сеттаймаута его сложно поддерживать при большиз вложенностях друг в друге. в таких случаях лучше использовать промисы

console.log('request data...');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('preparing data...');
        const backendData = {
            server: 'aws',
            status: 'working',
            port: 8080
        }
        resolve(backendData);
    }, 2000)
})

p.then((backData) => { // если в промисе выше выполнен resolve() выполится данный лог 
    // console.log('promise resolved', backData); // backData is backendData in promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            backData.modified = true;
            resolve(backData); // if success
            // reject(backData); // if Error
            // console.log('data received', backData);
        }, 2000)
    })
})
    .then(clientData => {
        // console.log('data received', clientData);
        clientData.fromPromise = true;
        return clientData;
    })
    .then(data => {
        console.log('modified', data);
    })
    .catch(err => console.error('error: ', err))
    .finally(() => console.log('finally')) // вне зависимости есть ошибка или нет, блок с кодом файналли будет выполнен


//   ============================ Второй блок кода для просмотра расскоментировать


//     const sleep = ms => {
//         return new Promise(resolve => {
//             setTimeout(() => resolve(), ms)
//         })
//     }

//     // sleep(2000).then(() => console.log('after 2 sec'))
//     // sleep(3000).then(() => console.log('after 3 sec'))

// Promise.all([sleep(2000), sleep(4000)]) // ожидает пока все промисы выполнятся
//     .then(() => {
//         console.log('all promises');
//     })

// Promise.race([sleep(2000), sleep(4000)]) // после выполнения первого же промиса он будет отображен
//     .then(() => {
//         console.log('race promises');
//     })