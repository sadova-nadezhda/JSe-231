// Ex 1
console.log('ex 1')
function strInDigit(str) {
  const number = Number(str); //parseInt parseFloat
  const digitCount = str.length;
  return number, digitCount;
}

const str = "12345";
const digitCount = strInDigit(str);
console.log(`Количество цифр в строке "${str}" равно ${digitCount}`);

// Ex 2
console.log('ex 2')
const arrNumbers = [1, -2, 3, -4, 5, -6];
const evenNumbers = arrNumbers.filter(num => num > 0);
console.log(evenNumbers);


// Ex 3
console.log('ex 3')
const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  return Math.abs(sonYearsOld*2-dadYearsOld)
}
const one = twiceAsOld(35, 25)
console.log(one)

// Ex 4
console.log('ex 4')
const arr = ['a', 'b', 'c', 'b', 'a', 'b'];

const countItems = (list) => {
  const count = {};

  list.forEach(f => {
    if (!count[f]) {
      count[f] = 1;
    } else {
      count[f] ++;
    }
  });

  return count;
};

const countResult = countItems(arr);

console.log(countResult);

// Ex 5
console.log('ex 5')
let box = document.querySelector('#out')
let btn = document.querySelector('#btn')
btn.addEventListener("click", function(e) {
  e.preventDefault()
  let txt1 = Number(document.querySelector('#field1').value)
  let txt2 = Number(document.querySelector('#field2').value)
  box.textContent = txt1 > txt2 ? txt1 : txt2;
}, false);

// Ex 6
console.log('ex 6')
let btnAdd = document.querySelector('#add');
// let arrLinks = document.querySelectorAll('#ex-6 a');
let arrLinks = [...document.querySelectorAll('#ex-6 a')].map(e => ({
  'href': e.href,
  'text': e.text
}))

console.log(arrLinks)
btnAdd.addEventListener("click", function() {
  console.log('add')
  localStorage.setItem('links', JSON.stringify(arrLinks));
}, false);

// Ex 7
console.log('ex 7')
function changeBorderColor() {
  let numberInput = document.getElementById("numberInput");
  let inputValue = parseInt(numberInput.value);

  if (isNaN(inputValue)) {
      numberInput.style.border = "2px solid black";
  } else {
      numberInput.style.border = inputValue % 2 === 0 ? "2px solid green" : "2px solid red";
  }
}

// Ex 8
console.log('ex 8')
document.getElementById("myInput").addEventListener("blur", function() {
  let inputValue = this.value;
  if (inputValue !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = inputValue;
    document.getElementById("myList").appendChild(listItem);
    this.value = "";
  }
});

// Ex 9
console.log('ex 9')
document.getElementById('inputText').addEventListener('keydown', function(event) {
  // console.log(event)
  if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault(); // Предотвращаем перенос строки в текстареа
      let inputText = document.getElementById('inputText').value;
      document.getElementById('outputDiv').innerHTML += '<p>' + inputText + '</p>';
      document.getElementById('inputText').value = '';
  }
});

// Ex 10
console.log('ex 10')
async function getUsers(names) {
  const fetchPr = names.map(async (name) => {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      if (response.ok) {
        const user = await response.json();
        return user;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  });

  const users = await Promise.all(fetchPr);
  return users;
}

const userNames = ['user1', 'user2', 'jhgfse'];
getUsers(userNames)
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  });
