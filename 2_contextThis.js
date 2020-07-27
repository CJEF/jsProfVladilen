function hello() {
    console.log('Hello', this);
}
const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello, // Browser.log : person.sayHello // Hello {{name: "Vladilen", age: 25, sayHello: ƒ}}
    sayHelloWindow: hello.bind(window), // Browser.log : person.sayHelloWindow() // Hello Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …} OR bind(this), this = window
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`name: ${this.name}, age: ${this.age}`);
        console.log(`job is ${job}`);
        console.log(`phone is ${phone}`);
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

const fnLenaInfoLog = person.logInfo.bind(lena) // Elena info: name: Elena, age: 23
fnLenaInfoLog('frontend dev', 12345) //Elena info: name: Elena, age: 23 job is frontend dev phone is 12345
person.logInfo.call(lena, 'frontend dev', 12345)
person.logInfo.apply(lena, ['frontend dev', 12345])

/// =============
const array = [1,2,3,4,5]
function multBy(arr, n) {
    return arr.map()
}