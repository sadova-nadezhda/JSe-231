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
//       reject(data)
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

// Fetch

let requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url, body = null) {
//   return fetch(url).then(response => {
//     return response.json()
//   })
// }

// sendRequest('GET', requestURL)
// .then( data => console.log(data))
// .catch( err => console.log(err))


function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  }
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    return response.json()
  })
}

const body = {
  name: 'user',
  age: 26
}

sendRequest('POST', requestURL, body)
.then( data => console.log(data))
.catch( err => console.log(err))
