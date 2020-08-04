const person = Object.create(
    {
    // prototype of obj person
        calculateAge() { // method который будет находиться в прототипе обекта person, и все равно выведится в логах перебора for in
            console.log(new Date().getFullYear() - this.birthYear); // person.calculateAge() // 20
        }
    }, 
    {
    // property descriptors - second value in object create
    name: {
        value: 'CJ',
        enumerable: true, // позволяет увидеть обект в логах
        writable: true, // позволяет переприсваивать значения ключа person.name = 'Alik' (true)
        configurable: true // дает возможность удалять ключи обьекта
    },
    birthYear: {
        value: 2000,
        enumerable: false, // default не видно в логах for in
        writable: false, // не получиться переприсвоить другое значение для данного ключа
        configurable: false // удалить данный ключ невозможно
    },
    age: {
        get() {
            // return 'hello' // browser.log - person.age // 'hello' (value)
            return new Date().getFullYear() - this.birthYear // person.age // 20
        },
        set(value) {
            document.body.style.background = value; // person.age = 'red' // set age red // при обновлении вернется цыет по дефолту
            console.log('set age', value); // person.age = 29 // set.age 29 // но при повторном вызове в браузерной консоли будет снова 20
        }
    }
})

person.name = 'Alan' // true
person.birthYear = 1999 // false (2000)
// delete person.name; // true
delete person.birthYear; // false

for (let key in person) { // проходит и по прототипу обьекта
    if(person.hasOwnProperty(key)) { // чтобы цикл не пробигал по ключам которые в прототипе
        console.log('key', key, person[key]); // key name CJ, birthYear не видно потому что enumerable: false
    }
}
