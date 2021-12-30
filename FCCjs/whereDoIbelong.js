function getIndexToIns(arr, num) {
  arr.push(num);
  let sortArray = arr.sort((a, b) => a - b);
  let index = sortArray.indexOf(num);
  return index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
