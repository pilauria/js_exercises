function truncateString(str, num) {
  let newString = str.slice(0, num);
  if (newString.length >= str.length) {
    return str;
  } else {
    return `${newString}...`;
  }
}

console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
);
//A-tisket...
let duck = {
  name: 'Aflac',
  numLegs: 2,
  sayName() {
    return 'The name of this duck is ' + duck.name + '.';
  },
};
console.log(duck.sayName());
