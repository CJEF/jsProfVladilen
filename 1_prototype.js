const person = new Object({
    name: 'Max',
    age: 25,
    greet: function() {
        console.log('greet!');
    }
    //console.log(sayHello());// uncaught error func is not defined
})

Object.prototype.sayHello = function() {
    console.log('Hello!'); // к родительскому элементу обьекта добавилась функция sayHello, person.sayHello() // Hello!
}

const lena = Object.create(person)
// lena.greet // greet!
// lena.proto = person
lena.name = 'Elena'

const str = 'i am string'
str.length() // 11
str.bold() // <b>i am string</b> in JS everything is object, in proto og string,func, or somthing else you can see parent class - Object(main class in JS)