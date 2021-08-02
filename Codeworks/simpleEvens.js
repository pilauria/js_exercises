/* Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number. */

function SimpleEvens(num) {
  let numArr = num.toString().split('');

  for (let i = 0; i < numArr.length; i++) {
    if (parseInt(numArr[i]) % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(SimpleEvens(23154154));

/////////////////////

// function SimpleEvens(num) {
//   var strNumArray = num.toString().split('');
//   return strNumArray.every(isEven);
// }

// function isEven(num) {
//   return Number(num) % 2 === 0;
// }

// console.log(SimpleEvens(23154154));

////////////////////

// function SimpleEvens(num) {
//   for (i = 0; i < num.toString().length; i++) {
//     if (parseFloat(num.toString().charAt(i)) % 2 === 1) return false;
//   }
//   return true;
// }

// console.log(SimpleEvens(23154154));

/////////////////////////////

// function SimpleEvens(num) {
//   return num
//     .toString()
//     .split('')
//     .every(function (n) {
//       return n % 2 === 0;
//     });
// }

// console.log(SimpleEvens(23154154));
