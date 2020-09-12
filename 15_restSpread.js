const citiesRussia = ['Moscow', 'Peterburg', 'Kazan', 'Newsibirsk']
const citiesEurope = ['Berlin', 'Praga', 'Paris']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    Peterburg: 8,
    Kazan: 5,
    Newsibirsk: 3
}

const citiesEutopeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praga: 3,
    Paris: 2 
}

// Spread применяется для увеличевания или уменньшения обьектов, трансформации
console.log(...citiesRussia); // Moscow Peterburg Kazan Newsibirsk (string)

// const allCities = [...citiesRussia, 'Washington', ...citiesEurope] 
const allCities = citiesEurope.concat(citiesRussia)
console.log(allCities); // ["Moscow", "Peterburg", "Kazan", "Newsibirsk", "Washington", "Berlin", "Praga", "Paris"] клонирование массива под новым нащванием

// console.log(...citiesRussiaWithPopulation) // Found non-callable @@iterator
console.log({...citiesRussiaWithPopulation}) // {Moscow: 20, Peterburg: 8, Kazan: 5, Newsibirsk: 3}
console.log({...citiesRussiaWithPopulation, ...citiesEutopeWithPopulation}); // {Moscow: 26, Peterburg: 8, Kazan: 5, Newsibirsk: 3, Berlin: 10, …}

// practice

const numbers = [5, 37, 42, 17]
console.log(Math.max(5, 37, 42, 17)); // 42
console.log(Math.max(...numbers)); // 42
console.log(Math.max.apply(null, numbers)); // 42

const divs = document.querySelectorAll('div')
console.log(divs, Array.isArray(divs)); // NodeList(4) [div, div, div, div]  false ...нет некоторых методов
const nodes = [...divs]
console.log(nodes, Array.isArray(nodes)); // [div, div, div, div] true

/// Rest собирает все параметры в массив или обьект
let sum = (a, b, ...rest) => {
    console.log(rest); // [3, 4, 5]
    return a + b + rest.reduce((a, i) => a + i, 0) // 15
}

const numbersss = [1, 2, 3, 4, 5]

// Spread
console.log(sum(...numbersss)); // 15

// const a = numbers[0]
// const b = numbers[1]

const [a, b, ...other] = numbersss // деструктуризация
console.log(a, b, other); // 1 2 (3) [3, 4, 5]

const person = {
    name: 'Max',
    age: 20, 
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...whereIS} = person
console.log(name, age, whereIS); // Max 20 {city: "Moscow", country: "Russia"}