function calcValues(a, b) {
    return [
        a + b,
        undefined, 
        a * b,
        a / b
    ]
}
const [sum, sub = 'Вычетания нет'/* если перемнная не исполььзуется можно ее удлаить и оставить пустое место, а так же переменной по дефолту присвоить значение */, mult, ...other] = calcValues(42, 10); // 52 32 и так тоже работает
// const result = calcValues(42, 10);
// const sum = result = [0]
// const sub = result[1] // деструктурищация ниже используется для того чтобы сократить код и передать данные сразу в переменные, не указывая индекс массива как в данном случае

// const [sum, sub] = result // как вариант

console.log(sum, mult, other, sub); // 52 420 [4.2] - other(a/b), sub - undefined // некоторые элементы моожно игнорировать

// OBjects
const person = {
   name: 'CJ',
   age: 18,
   address: {
       country: 'Russia',
    //    city: 'Moscow'
   } 
}
// const name = person.name
const {
    name: firstName = 'noName', 
    age, 
    car = 'undefined Машины нет',
    address: {city: homeTown = 'Karaganda', country}
    } = person
console.log(firstName, age, car, address = homeTown, country); // CJ 18 undefined Машины нет Karaganda Russia

// practice

// function logPerson(per) {
//     console.log(per.name + " " + per.age);
// }

// logPerson(person) // CJ 18

function logPerson({name: firstName = 'первоеИмя', age}) {
    console.log (firstName + " " + age);
}
logPerson(person)
