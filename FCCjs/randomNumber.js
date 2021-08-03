/* Change randomFraction to return a random number instead of returning 0*/

function checkSign(num) {
  return num > 0
    ? `${num} is positive`
    : num < 0
    ? `${num} is negative`
    : `${num} is zero `;
}

console.log(checkSign(-12));

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);

//     countArray.unshift(n);
//     console.log(countArray);
//     return countArray;
//   }
// }
// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const array = rangeOfNumbers(startNum, endNum - 1);
    array.push(endNum);
    return array;
  }
}

console.log(rangeOfNumbers(8, 15));

// const arr = [2, 3, 3, 4, 5];

// function multiply(arr, n) {
//   var product = 1;
//   for (var i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

// console.log(multiply(arr, 3));
