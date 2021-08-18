// https://love2dev.com/blog/javascript-remove-from-array/

const pizzas = [
  { type: 'pineapple', size: 'M' },
  { type: 'pineapple', size: 'L' },
  { type: 'pineapple', size: 'S' },
];

// console.log(pizzas[1]);
// console.log(pizzas[0].type);

function filterPizzas(pizzas) {
  // your code
  for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].type === 'pineapple') {
      pizzas.splice(i, 1);
      i--;
    }
  }

  return pizzas;
}

console.log(filterPizzas(pizzas));
console.log(pizzas.length);

// var myObject = {
//   ircEvent: 'PRIVMSG',
//   method: 'newURI',
//   regex: '^http://.*',
// };
// delete myObject.regex;

// console.log(myObject);

//////////////////////////
///// SOLUTION 2 //

function filterPizzas(pizzas) {
  const filteredPizzas = [];

  for (let i = 0; i < pizzas.length; i++) {
    const pizza = pizzas[i];
    const pizzaType = pizza.type;
    const isNotPineapple = pizzaType !== 'pineapple';

    if (isNotPineapple) {
      filteredPizzas.push(pizza);
    }
  }

  return filteredPizzas;
}
