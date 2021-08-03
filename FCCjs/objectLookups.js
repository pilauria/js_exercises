// var alpha = {
//   1: 'Z',
//   2: 'Y',
//   3: 'X',
//   4: 'W',
//   24: 'C',
//   25: 'B',
//   26: 'A',
// };

// console.log(alpha[2]);
// alpha[24];

// var value = 25;
// var value2 = 26;

// console.log(alpha[value]);

function phoneticLookup(val) {
  var result = '';
  var lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };
  // After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.
  result = lookup[val];

  return result;
}

console.log(phoneticLookup('alpha'));
