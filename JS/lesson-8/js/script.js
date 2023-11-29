// Callback

// console.log('Request data...')

// setTimeout(()=> {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//   setTimeout(()=> {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)

// }, 2000)

// Promise

// let p = new Promise((resolve, reject)=> {
//   setTimeout(()=> {
//     console.log('Preparing data...')

//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData)
//   }, 2000)
// })

// p.then( data => {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//       data.modified = true
//       resolve(data)
//     }, 2000)
//   })
// })
// .then(clientData => {
//     console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
//   })
// .then (Totaldata => {
//     console.log('Totaldata', Totaldata)
//   })
// .catch(err => console.error('Error', err))
// .finally(()=> console.log('Finally'))


// const delay = (ms, n) => {
//   return new Promise(r => setTimeout(()=> r(n), ms))
// }

// delay(2000).then(()=> console.log('2 sec'))
// delay(3000).then(()=> console.log('3 sec'))

// Promise.all([delay(2000, 1), delay(5000, 2)]).then(([d1, d2])=> {
//   console.log(d1)
//   console.log(d2)
// })

// Promise.race([delay(2000, 1), delay(5000, 2)]).then((val)=> {
//   console.log(val)
// })

// Fetch

// let requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url, body = null) {
//   return fetch(url).then(response => {
//     return response.json()
//   })
// }

// sendRequest('GET', requestURL)
// .then( data => console.log(data))
// .catch( err => console.log(err))


// function sendRequest(method, url, body = null) {
//   const headers = {
//     'Content-Type': 'application/json; charset=utf-8'
//   }
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers
//   }).then(response => {
//     return response.json()
//   })
// }

// const body = {
//   name: 'user',
//   age: 26
// }

// sendRequest('POST', requestURL, body)
// .then( data => console.log(data))
// .catch( err => console.log(err))


// Async/Await


const delay = (ms, n) => {
  return new Promise(r => setTimeout(()=> r(n), ms))
}

// delay(2000).then(()=> console.log('2 sec'))
// delay(3000).then(()=> console.log('3 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function fetchTodos() {
//   console.log('Fetch todo started...')
//   return delay(2000).then(()=> {
//     return fetch(url)
//   }).then(response => response.json())
// }

// fetchTodos()
// .then(data => console.log('Data:', data))
// .catch(err => console.error(err))

async function fetchAsyncTodos() {
  console.log('Fetch todo started...')
  await delay(2000)
  const response = await fetch(url)
  const data = await response.json()
  console.log('Data:', data)
  if(data) {
    console.log('end')
  }
}

fetchAsyncTodos()

