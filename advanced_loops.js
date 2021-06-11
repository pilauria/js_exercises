// const basket = ['apples', 'oranges', ' grapes'];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000,
// };

// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[1]);
// }

// basket.forEach(element => {
//   console.log(element);
// });

// // for of => iterating - arrays, strings (iterables)

// for (item of basket) {
//   console.log(item);
// }

// // for in => enumerating: objects (enumerables)

// for (item in detailedBasket) {
//   console.log(item);
// }

// // Question #1:
// // create a function called biggestNumberInArray() that takes
// // an array as a parameter and returns the biggest number.
// // biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// // Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ['a', 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray(arr) {
  let max = 0;
  for (let item of arr) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

console.log(biggestNumberInArray(array2));

function biggestNumberInArray2(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max && typeof arr[i] === 'number') {
      max = arr[i];
    }
  }
  return max;
}
console.log(biggestNumberInArray2(array2));

function biggestNumberInArray3(arr) {
  let max = 0;
  arr.forEach(number => {
    if (number > max) {
      max = number;
    }
  });
  return max;
}

console.log(biggestNumberInArray3(array2));

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket1(basket, lookingFor) {
  for (let item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`;
    }
  }
  return `Sorry ${lookingFor} is not in your basket`;
}
console.log(checkBasket1(amazonBasket, 'parrilla'));

////////
// OR
// function checkBasket1(basket, lookingFor) {
//   for (item in basket) {
//     if (item === lookingFor) {
//       return `${lookingFor} is in your basket`;
//     } else {
//       return `Sorry ${lookingFor} is not in your basket`;
//     }
//   }
//   return;
// }

// console.log(checkBasket1(amazonBasket, 'parrilla'));

// Another way

// function checkBasket(basket) {
//   for ([item, number] of Object.entries(amazonBasket)) {
//     if (number > 0) {
//       let quantity;
//       if (item[item.length - 1] === 's' && number >= 2) {
//         quantity = 'There are';
//       } else if (item[item.length - 1] === 's' && number === 1) {
//         quantity = 'There are';
//       } else {
//         quantity = 'There is';
//       }
//       console.log(`${quantity} ${number} ${item}`);
//     } else {
//       console.log(`${item} not in basket`);
//     }
//   }
// }

let a = [1, 3, 2];
for (let max = a[0], i = 1, iLen = a.length; i < iLen; i++)
  if (a[i] > max) max = a[i];
