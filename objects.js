// [] === []; // false
// [1] === [1]; // false

// let object1 = { value: 10 };
// let object2 = object1;
// let object3 = { value: 10 };

// object1 === object2; // true
// object1 === object3; // false

// object1.value = 15;
// object2.value;

// console.log(this);

// //
// const square = x => x ** 2;
// console.log(square(2));

//Evaluate these:
//#1
[2] === [2]; // false
// {} === {}; // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5 }; // 5
object1.a = 4;

// object1.a = 4;
// object2.a // 4
// object3.a  // 4
// object4.a // 5

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(`Mooo I am ${this.name}, a ${this.type} ${this.color}`);
  }
}

const cow = new Mamal('Mimmi', 'cow', 'brown');

console.log(cow.sound());
