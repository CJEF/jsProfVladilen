const set = new Set([1,2,3,3,3,4,5,5,6]) // все значения будут хранится в единственном экземпляре и не будут копированы

// console.log(set); // Set { 1, 2, 3, 4, 5, 6 }

set.add(10).add(20).add(30).add(20)

console.log(set); // Set { 1, 2, 3, 4, 5, 6, 10, 20, 30 }

console.log(set.has(5)); // true

console.log(set.size); // 9

console.log(set.delete(1)); // { 2, 3, 4, 5, 6, 10, 20, 30 }

console.log(set.clear()); // set.size = undefined \n 0

console.log(set.values()); // [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }

console.log(set.keys()); // [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }

console.log(set.entries()); // ключи и значения будут дублироваться чтобы была возможность взаимодецстаия с картами map

for (let key of set) {
    console.log(key);
}

// ===========================

let uniqValues = array => [...new Set(array)] // Array.from(new Set(array))

console.log(uniqValues([1,2,2,1,3,3,3,4,4,5,6]));  // [ 1, 2, 3, 4, 5, 6 ]
