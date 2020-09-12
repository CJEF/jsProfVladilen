const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Vladilen'}
]

const visits = new WeakSet() // ключи только обьекты, weak - слабоват, с ограничениями

visits.add(users[0]).add(users[1])

users.splice(1, 1)

console.log(visits.has(users[0])); // true
console.log(visits.has(users[1])); // false

