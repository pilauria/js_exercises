/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/

let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// ;
// function arraySort(array) {
//   array.sort((a, b) => {
//     return a - b;
//   });
//   return array;
// }

// console.log(arraySort(arr));

// arraySort(arr);
// // [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

// function arraySort(arr) {
//   // First sort all elements into numeric order.
//   arr.sort(function (a, b) {
//     return a - b;
//   });

//   return arr;
// }

// console.log(arraySort(arr));

var input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

var sInput = input.sort(function (a, b) {
  return a - b;
});

console.log(sInput);

var endArray = [];

var storeArray = [];

sInput.forEach(function (value, i) {
  // console.log(value);
  console.log(`value n.${i}: ${value}, sInput: ${sInput[i + 1]}`);
  if (value === sInput[i + 1]) {
    storeArray.push(value);
  } else if (value === sInput[i - 1]) {
    storeArray.push(value);
    endArray.push(storeArray);
    storeArray = [];
  } else {
    endArray.push(value);
  }
});

console.log('last step', endArray);

let arrf = [1, 2, 3, 4];
