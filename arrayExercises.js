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

const zed = [1, 2, 3];

const newZed = [];
zed.forEach(num => newZed.push(`${num}!`));
console.log(newZed);

// Create an array using forEach that has all the usernames with a "!" to each of the usernames
console.log(array[0].username);

const newArr = [];
array.forEach((_, idx) => {
  newArr.push(`${array[idx].username}!`);
});
console.log(newArr);

// Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map((_, idx) => {
  return `${array[idx].username}?`;
});

console.log(mapArray);

// Filter the array to only include users who are on team: red
// (Filtering an array of objects)

const filterArray = array.filter(array => {
  return array.team === 'red';
});

console.log(filterArray);

// Find out the total score of all users using reduce

const sumArrayUsers = array.reduce((total, currentValue) => {
  return total + currentValue.score;
}, 0);

console.log(sumArrayUsers);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => {
  return num * 2;
});

// //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
