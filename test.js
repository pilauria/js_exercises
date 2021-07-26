// function largestSwap(number) {
//   digitOne = number.toString().charAt(0);
//   digitTwo = number.toString().charAt(1);
//   const value = digitTwo > digitOne ? false : true;
//   return value;
// }

// console.log(largestSwap(14)); // false

function Palindrome(str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
console.log(Palindrome('eye'));
