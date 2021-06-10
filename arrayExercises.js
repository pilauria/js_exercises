// Complete the below questions using this array:
const array = [
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: ['ball', 'book', 'pen'],
  },
  {
    username: 'becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen'],
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen'],
  },
  {
    username: 'tyson',
    team: 'green',
    score: 1,
    items: ['book', 'pen'],
  },
];

// const zed = [1, 2, 3];

// const newZed = [];
// zed.forEach(num => newZed.push(`${num}!`));
// console.log(newZed);

// Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newArr = [];
array.forEach(user => {
  newArr.push(`${user.username}!`);
});
console.log(newArr);

// OR:
// const newArr = [];
// array.forEach((_, idx) => {
//   newArr.push(`${array[idx].username}!`);
// });
// console.log(newArr);

//OR:
// let newArray = [];
// array.forEach(user => {
//   let { username } = user;
//   username = username + '!';
//   newArray.push(username);
// });
// console.log(newArray);

// Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(user => {
  return `${user.username}?`;
});

console.log(mapArray);

// OR:
// const mapArray = array.map((_, idx) => {
//   return `${array[idx].username}?`;
// });
// console.log(mapArray);

// OR:
// const mapArray = array.map(user => {
//   let { username } = user;
//   return username + '?';
// });
// console.log(mapArray);

// Filter the array to only include users who are on team: red
// (Filtering an array of objects)

const filterArray = array.filter(user => {
  return user.team === 'red';
});

console.log(filterArray);

// Find out the total score of all users using reduce

const sumArrayUsers = array.reduce((total, currentValue) => {
  return total + currentValue.score;
}, 0);

console.log(sumArrayUsers);

// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => {
  return num * 2;
});

// //BONUS: create a new list with all user information, but add "!" to the end of each items they own:
// ===> Map an array of arrays (https://stackoverflow.com/questions/35325767/map-an-array-of-arrays)
const newArray = array.map(user => {
  //first map: iterate over all the items and add '!' to each of them
  user.items = user.items.map(item => {
    // console.log(item);
    return `${item}!`;
  });
  //second map: iterate over the objects and simply return them to recompose the array
  return user;
});
console.log(newArray);
