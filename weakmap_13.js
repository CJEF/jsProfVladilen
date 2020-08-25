let obj = {name: 'weakmap'}

// const arr = [obj]

// obj = null

// console.log(obj); // null
// console.log(arr[0]); // { name: 'weakmap' }

// =================================

const map = new WeakMap([ // в WeakMap ключами могут являтся только обьекты и имеет методы get, set, delete, has
    [obj, 'obj data']
])
obj = null
console.log(map.get(obj))  // undefined обьект обнулился и удалился из памяти сборщика мусора
console.log(map.has(obj)); // false
console.log(map); // WeakMap { <items unknown> }

// =================================

const cache = new WeakMap()

let cacheUser = user => {
    if(!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null // удаляем ссылку на обьект Лены, если пользователей в кеше много то это оптимизирует приложение

console.log(cache.has(lena)); // false
console.log(cache.has(alex)); // true
