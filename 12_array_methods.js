const people = [
    { name: 'Vladilen', age: 25, budget: 40000 },
    { name: 'Elena', age: 17, budget: 3400 },
    { name: 'Ignar', age: 49, budget: 50000 },
    { name: 'Michael', age: 15, budget: 1800 },
    { name: 'Vasilisa', age: 24, budget: 25000 },
    { name: 'Vika', age: 38, budget: 2300 }
]

// for (let i = 0; i< people.length; i++) {
//     console.log(people[i]);
// } // ES5 аналог ForEach ниже

// for (let person of people) {
//     console.log(person);
// } // ES6 аналог ForEach ниже

// ForEach
// people.forEach((person, index, pArr) => {
//     console.log(person); // object
//     console.log(index); // index
//     console.log(pArr); // array people
// })

people.forEach(person => console.log(person))

// Map
const newPeople = people.map(person => { // должен что то вернуть и создает новый обьект в котором можно изменять данные и заносить этот обьект в новую переменную 
    // return person; 
    // return 'Hello'; // ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]
    // return person.name // ["Vladilen", "Elena", "Ignar", "Michael", "Vasilisa", "Vika"]
    // return `${person.name} (${person.age})`
    return person.age * 3
})

console.log(newPeople);

// Filter
// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults);

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })
// console.log(adults);

const adults = people.filter(person => person.age >= 18)
console.log(adults);

// Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }
// console.log(amount); // 122500

const amount = people.reduce((total, person) => total + person.budget, 0) // 0 начальное значение принимаего параметра total
// при каждой итерации значение глобального total изменяется (добавляется значение персон.бюджет)
console.log(amount); // 122500

// Find
const Ignar = people.find(person => person.name === 'Ignar')
console.log(Ignar); // {name: "Ignar", age: 49, budget: 50000}

// FindIndex
const IgnarIndex = people.findIndex(person => person.name === 'Ignar')
console.log(IgnarIndex); // 2

// =================

const newPeople2 = people
    .filter(person => person.budget > 3000) // возвратит новый массив
    .map(person => {
        return {
            info: `${person.name}(${person.age})`,
            budget: Math.sqrt(person.budget)
        }
    })
    .reduce((total, person) => total + person.budget, 0)
console.log(newPeople2); // 640.0301997068509
/* new array after method map = 
{info: "Vladilen(25)", budget: 40000}
1: {info: "Elena(17)", budget: 3400}
2: {info: "Ignar(49)", budget: 50000}
3: {info: "Vasilisa(24)", budget: 25000}
*/