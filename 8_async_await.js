 const delay = ms => {
     return new Promise(r => setTimeout(() => r(), ms))
 }

// delay(2000).then(() => console.log('after 2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos';

// метод без async await

// function fetchTodos() {
//     console.log('fetch todo started...')
//     return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
// .then(data => {
//     console.log('data', data);
// })
// .catch(e => console.error(e))

// ======================= тот же вариант только с помощью async await =====================================

async function fetchAsyncTodos() {  // async работает при помощи babel, в будущем этот код компелируется в обычные промисы
// так же асинк функция возвращает промис что дает возможность использовать метод then()
    console.log('fetch todo started...')
    try {
        await delay(2000) // из за оператора await, пока не выполнится данный промис(задержка) следующая функция не будет выполнена
        const response = await fetch(url) // приходные данные нужно поместить в переменную
        const data = await response.json()
        console.log('data', data);  
    } catch (error) {
        console.error(error)
    } finally {
        // код который выполнится даже если в коде выше есть ошибка
    }
}

fetchAsyncTodos()

//fetch todo started...
//8_async_await.js:33 data (200) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]