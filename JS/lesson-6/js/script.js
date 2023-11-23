let array = [2, 3, 4, 5, -5, 9, -10, 58, -95]
let strArray = ['bob', 'tom', 'ana', 'jack']
let users = [
  {
    id: 1,
    name: 'Bob',
    age: 5,
    gender: 'm',
    balance: 125000
  },
  {
    id: 2,
    name: 'Tom',
    age: 32,
    gender: 'm',
    balance: 25000
  },
  {
    id: 3,
    name: 'Ana',
    age: 27,
    gender: 'w',
    balance: 80000
  }
]

// forEach
// array.forEach((elem, ind, arr) => {
//   console.log(elem)
//   console.log(ind)
//   console.log(arr)
// })

// filter
// let arrayNegative = array.filter((elem, ind)=> elem < 0)
// console.log(arrayNegative)
// console.log(array)
// let userLess18 = users.filter((user)=> user.age >= 18)
// console.log(userLess18)

// map
// let arrayPositive = array.map((item, ind) => item > 0)
// console.log(arrayPositive)
// let arrayX2 = array.map((item, ind) => item ** 2)
// console.log(arrayX2)
let usersName = users.map((user) => user.name)
// console.log(usersName)

// reduce
// let total = array.reduce((total, val) => total + val)
// console.log(total)
// let totalBalance = users.reduce((acc , user) => (acc += user.balance), 0)
// console.log(totalBalance)

// find
// let user = users.find((user)=> user.name === "Ana")
// console.log(user)

// Some/Every
// let women = users.some((user) => user.gender === 'w')
// console.log(women)
// let isAllMale = users.every((user) => user.gender === 'm')
// console.log(isAllMale)

// sort
// console.log(usersName)
// console.log(usersName.sort())
// console.log(array.sort((a, b) => a-b))
// console.log(array.sort((a, b) => b-a))
// users.sort((a, b) => a.age - b.age)
// console.log(users)

let obj1 = {
  name: 'Ben',
  info: {
    skills: ['html', 'css']
  }
}

let obj2 = {
  name: 'Jame',
  age: 24
}

// копирование ссылки на один и тот же объект
// let newObj = obj1;
// console.log(newObj)

// копирование объекта
// let newObj = Object.assign({}, obj1)
// console.log(newObj)
// let newObj = Object.assign({}, obj1, obj2)
// console.log(newObj)
// let newObj = JSON.parse(JSON.stringify(obj1))
// console.log(newObj)

// Object.keys Object.values Object.entries()
// let keys = Object.keys(obj2)
// console.log(keys)

// let values = Object.values(obj2)
// console.log(values)

// let entries = Object.entries(obj2)
// console.log(entries)

// let user = [
//   ['name', 'Rocki'],
//   ['age', '26']
// ]

// let fromEntries = Object.fromEntries(user);
// console.log(fromEntries)
