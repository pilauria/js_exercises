const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, arr) => {
  debugger;
  return acc.concat(arr);
}, []);

console.log(flattened);
