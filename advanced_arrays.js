// MAP / FILTER / REDUCE

const arr = [1, 2, 10, 16];

const double = [];
const newArr = arr.forEach(number => {
  // with forEach we produce (multiples) side effects
  double.push(number * 2);
});

console.log(double, newArr);

// map returns a new array
const mapArray = arr.map(number => number * 2);
// with map we don't mutate the original data (array), and we have to return something (otherwise we get multiple undefined)

console.log(mapArray);

// filter returns a new array
const filterArray = arr.filter(num => num > 5);
console.log(filterArray);

const reduceArray = arr.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
console.log(reduceArray);
