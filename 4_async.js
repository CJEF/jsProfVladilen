// console.log('start');

// function timeOut2sec() {
//     console.log('timeOut2sec');
// }

// window.setTimeout(function() {
//    console.log('log after 2 seconds'); 
// }, 2000)

// function greet() {
//     console.log('greet!');
// }

// setTimeout(timeOut2sec(), 2000)

// console.log('end');


// http://latentflip.com/loupe/ about async in Js and web API
console.log('start');


// about why use settimeout without timeout
window.setTimeout(function() {
    console.log('loggg'); 
}, 0)

console.log('end');
// result
// 5_async.js:21 start
// 5_async.js:27 end
// 5_async.js:24 loggg

