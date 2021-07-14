function largestSwap(number) {
  digitOne = number.toString().charAt(0);
  digitTwo = number.toString().charAt(1);
  const value = digitTwo > digitOne ? false : true;
  return value;
}

console.log(largestSwap(14)); // false
