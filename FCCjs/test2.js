// function Bird() {}
// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird();
// console.log(duck.constructor);

const mamma = {
  name: 'Bob',
  surname: 'Martin',
};

function printBio(user) {
  return 'This is ' + user['name'] + user['surname'];
}
console.log(printBio(mamma));
