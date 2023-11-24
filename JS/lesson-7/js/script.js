// Коллекция для хранения уникальных значений
// let x = new Set()

// add()
// delete()
// has()
// clear()
// forEach()

// x.add(123)
// x.add(132)
// x.add(321)
// x.add(123)
// console.log(x)
// x.delete(132)
// console.log(x)
// console.log(x.size)
// console.log(x.has(124))
// let y = new Set([1,2,3,3,3,4,'hello'])
// console.log(y)
// let unicArr = [...new Set([1,2,3,4,5,4,5,1,1])]
// console.log(unicArr)


// Асинхронность в JS

// синхронность
// console.log('1')
// console.log('2')
// console.log('3')

// function delay (ms) {
//   // code
// }
// function sayHello() {
//   console.log('hello')
// }
// delay(5000)
// sayHello()


// Асинхронность
// setTimeout(function sayHello() {
//   console.log('hello')
// }, 3000)

// console.log('First')


// синхронность
// Стек
// пришел 3 ушел 1 console.log
// пришел 2 ушел 2 inner
// пришел 1 ушел 3 outer
// function outer() {
//   function inner() {
//     // ФУН 3
//     console.log('hello')
//   }
//   // ФУН 2
//   inner()
// }

// // ФУН 1
// outer()


// Асинхронность

// function main() {
//   setTimeout(function sayHello() {
//     console.log('hello')
//   }, 2000)

//   console.log('Bye!')
// }
// main()

// Стек
                      //console.log('Bye!')
                      // setTimeout
                      // main
// 2 сек спустя
                      // console.log('hello')
                      // sayHello()

//  стек пустой


// Ад колбэков

// setTimeout(()=> {
//   setTimeout(()=> {
//     setTimeout(()=> {
//       setTimeout(()=> {
//         console.log('hello')
//       }, 5000)
//     }, 5000)
//   }, 5000)
// }, 5000)


// function request(url, onSuccess) {
//   // code
// }

// request('api/users/1', function(user){
//   request(`api/photos/${user.id}`, function(photo){
//     request(`api/crop/${photo.id}`, function(response){
//       console.log(response)
//     })
//   })
// })


// Promise

// function request(url) {
//   return new Promise(function(resolve, reject) {
//     let responseFromServer
//     // code
//     resolve(responseFromServer)
//   })
// }

// request('api/users/1')
//   .then((user) => user.id)
//   .then ((userID) => request(`api/photos/${userID}`))
//   .then((photo) => request(`api/crop/${photo.id}`))
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))

// Асинхронные функции

// async function request() {}
// let req = async () => {}
// class SomeClass {
//   async request() {}
// }


// async function request() {}
// // Сработает
// request().then(()=>{})


// Async/await
//  async function loadUsers() {
//   try {
//     const response = await fetch('url')
//     const data = await response.json()
//     return data
//   } catch(e) {
//     console.log(e)
//   }
//  }


async function getUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  console.log('ответ получен', response) // получили ответ
  return response.json()
}


const users = getUser(5).then((user)=> {
  console.log(user.name) // сработал колбэк
})

console.log("результат", users) // вернула промис
