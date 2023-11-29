
console.log('Request data...')

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


let p = new Promise((resolve, reject)=> {
  setTimeout(()=> {
    console.log('Preparing data...')

    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    }
    resolve(backendData)
  }, 2000)
})

p.then( data => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
      data.modified = true
      reject(data)
    }, 2000)
  })
})
.then(clientData => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
  })
.then (Totaldata => {
    console.log('Totaldata', Totaldata)
  })
.catch(err => console.error('Error', err))
.finally(()=> console.log('Finally'))
