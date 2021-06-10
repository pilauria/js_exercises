[] === []; // false
[1] === [1]; // false

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object1 === object2; // true
object1 === object3; // false

object1.value = 15;
object2.value;

console.log(this);

//
const square = x => x ** 2;
console.log(square(2));
