function createCalcFunction(n) {
    return function() {
        console.log(1000 * n);
    }
}

const calc = createCalcFunction(42);
console.log(calc); // function() {}
calc() // 42000

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}

const addOne = createIncrementor(1); // функция замкнула в себе единицу и теперь эта функция всегда прибавляет единицу как в примере ниже
console.log(addOne(41)); // 42

const addTen = createIncrementor(10);
console.log(addTen(20)); // 30

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const ruUrl = urlGenerator('ru');
console.log(ruUrl('2ip')); // https://2ip.ru
console.log(ruUrl('click')); // https://click.ru

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Alisher', age: 18, job: 'backend dev'}
const person2 = {name: 'Era', age: 20, job: 'SMM'}

bind(person1, logPerson)();
bind(person2, logPerson)();

