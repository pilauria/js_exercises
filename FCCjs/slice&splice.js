function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

// let arr = [1, 43, 4, 5, 6];
// let arr1 = arr.slice(0);

// console.log(arr1);
// console.log(arr);
