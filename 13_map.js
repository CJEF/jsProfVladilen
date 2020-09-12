const obj = {
    name: 'cj',
    age: 18,
    job: 'node js dev'
}

const entries = [
    ['name', 'cj'],
    ['age', '18'],
    ['job', 'node js dev']
]

// console.log(Object.entries(obj)); // метод который переведет обьект в массивный вид( как второй пример массива )
// console.log(Object.fromEntries(entries)); // {name: "cj", age: "18", job: "node js dev"}

const map = new Map(entries) // ключем может являтся любой тип данных
// console.log(map); // Map { 'name' => 'cj', 'age' => '18', 'job' => 'node js dev' }
// console.log(map.get('name')); // cj

map
    .set('newfield', 42)
    .set(NaN, 'NaN ???')
    .set(obj, 'value of obj') // отличие map добавление обьектов как ключей { name: 'cj', age: 18, job: 'node js dev' } => 'value of obj'

console.log(map); // + 'newfield' => 42
console.log(map.get(obj)); // value of obj

map.delete('job')
console.log(map.has('job')); // false
console.log(map.size); // 5
map.clear()
console.log(map.size); // 0

for (let entry of map.entries()) {
    console.log(entry); // []
}

for (let [key, value] of map) {
        console.log(key, value); 
    }

for (let val of map.values()) {
    console.log(val);
}

for (let val of map.keys()) {
    console.log(val);
}

map.forEach((val, key, m) => {
    console.log(val, key);
})

// =================================

const array = [...map] // or Array.from(map) для быстрого преобразования карты в массив
const mapObj = Object.fromEntries(map.entries()) // object key => [object Object]
console.log(array);

// =================================

const users = [
    {name: 'Elena'},
    {name: 'ALex'},
    {name: 'Irina'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2])); // 2020-08-24T00:02:25.249Z
console.log(lastVisit(users[1])); // 2020-08-23T23:58:47.389Z