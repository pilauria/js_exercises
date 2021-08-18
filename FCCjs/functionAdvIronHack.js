function welcome(name) {
  console.log(`Hi ${name}`);
}

function printToTwenty() {
  for (let index = 0; index <= 20; index++) {
    console.log(index);
  }
}

function printNumbers(num) {
  for (let index = 0; index <= num; index++) {
    console.log(index);
  }
}

function printArrElements(someArr) {
  for (let index = 0; index < someArr.length; index++) {
    console.log(someArr[index]);
  }
}

let ironCities = [
  'Amsterdam',
  'Barcelona',
  'Berlin',
  'Lisbon',
  'Madrid',
  'Mexico City',
  'Miami',
  'Paris',
  'Sao Paulo',
];

var city_names = [
  'Aberdeen',
  'Abilene',
  'Akron',
  'Albany',
  'Brighton',
  'Brownsville',
  'Bryan',
  'Buffalo',
  'Dallas',
  'Daly City',
  'Danbury',
  'Davenport',
  'Davidson County',
  'Dayton',
  'Daytona Beach',
  'Deltona',
  'Denton',
  'Minneapolis',
  'Miramar',
  'Mission Viejo',
  'Mobile',
];

// console.log(printArrElements(city_names));

function printEvens(someArr) {
  let newArr = [];
  for (let i = 0; i < someArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(someArr[i]);
    }
  }
  return newArr;
}

function mamma(arr) {
  let newArr = [];
  for (indexCity in arr) {
    if (indexCity % 2 === 0) {
      newArr.push(arr[indexCity]);
    }
  }
  return newArr;
}

// console.log(printEvens(ironCities));

// console.log(mamma(ironCities));

const prices = [5, 7.99, 9.99, 0.99, 21];

let arrSum = arr => {
  let sum = 0;
  for (elem of arr) {
    sum += elem;
  }

  return `$ ${sum}`;
};

// console.log(arrSum(prices));

let stringToLetters = string => string.split('');

// console.log(stringToLetters('mammaLiTurchi'));
let count = num => {
  for (let i = 0; i <= num; i++) {
    if (i % 4 === 0) {
      console.log('Hey');
      continue;
    } else if (i % 6 === 0) {
      console.log('There');
      continue;
    } else if (i % 4 === 0 && i % 6 === 0) {
      console.log('Ironhack');
      continue;
    } else if (i % 7 === 0) {
      continue;
    } else if (i === 43) {
      console.log(`${i}! `);
    }
    console.log(i);
  }
};

console.log(count(100));

let year;
