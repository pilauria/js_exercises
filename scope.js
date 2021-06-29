const first = () => {
  const greet = 'Hi';
  const second = () => {
    console.log(greet);
  };
  return second;
};

const newFunction = first();
console.log(newFunction()); // Hi

//!!!  You have a closure when a function accesses variables defined outside of it !!!.
// Closures - a function ran. The function executed. It's never going to execute again.
// BUT it's going to remember that there are references to those variables .
// So the child scope always hac access to the parent scope.

// *************************************** //

function liveADay() {
  let food = 'cheese';
  function eat() {
    console.log(food + ' is good');
  }
  eat();
}
console.log(liveADay());
/* Let’s go through this code together — step by step. First, we declare the liveADay function at the top level. We immediately call it. It has a food local variable. It also contains an eat function. Then it calls that eat function. Because eat is inside of liveADay, it “sees” all of its variables. This is why it can read the food variable.

This is called a closure.

We say that there is a closure when a function (such as eat) reads or writes a variable (such as food) that is declared outside of it (such as in liveADay). */

// *************************************  //

// https://whatthefork.is/

// let users = ['Alice', 'Dan', 'Jessica'];
// let query = 'A';
// let user = users.filter(user => user.startsWith(query));

// It may be easier to notice the closure if we rewrite it with a function expression:

let users = ['Alice', 'Dan', 'Jessica'];
// 1. The query variable is declared outside
let query = 'A';
let user = users.filter(function (user) {
  // 2. We are in a nested function
  // 3. And we read the query variable (which is declared outside!)
  return user.startsWith(query);
});

/* Whenever a function accesses a variable that is declared outside of it, we say it is a closure. The term itself is used a bit loosely. Some people will refer to the nested function itself as “the closure” in this example. Others might refer to the technique of accessing the outside variables as the closure. Practically, it doesn’t matter.*/

/* Not all languages implement closures. For example, in some languages like C, it is not allowed to nest functions at all. As a result, a function may only access its own local variables or global variables, but there is never a situation in which it can access a parent function’s local variables. Naturally, that limitation is painful.*/

function pam() {
  var name = 'Pam Beesly';
  function displayName() {
    console.log(name);
  }
  function setName(newName) {
    name = newName;
  }
  displayName();
  setName('Pam Halpert');
  displayName();
}
console.log(pam());

//////////////////////////////////
// PRACTICAL USE OF CLOSURES
/* http://pat-whitrock.github.io/blog/2014/04/29/practical-uses-for-closures/ */

// Function factories
// Using closures as function factories is a great way to keep your JavaScript DRY. Five powerful lines of code allow us to create any number of functions with similar, yet unique purposes.

function job(title) {
  return function (prefix) {
    return prefix + ' ' + title;
  };
}

var sales = job('Salesman');
var manager = job('Manager');

console.log(sales('Top')); // Top Salesman
console.log(manager('Assistant to the Regional')); // Assistant to the Regional Manager
console.log(manager('Regional')); // Regional Manager

// Namespacing private functions
/*namespacing is a technique employed to avoid collisions with other objects or variables in the global namespace. ... Whilst JavaScript doesn't really have built-in support for namespaces like other languages, it does have objects and closures which can be used to achieve a similar effect.*/
var dwightSalary = (function () {
  var salary = 60000;
  function changeBy(amount) {
    salary += amount;
  }
  return {
    raise: function () {
      changeBy(5000);
    },
    lower: function () {
      changeBy(-5000);
    },
    currentAmount: function () {
      return salary;
    },
  };
})();
console.log(dwightSalary.currentAmount()); // $60,000
dwightSalary.raise();
console.log(dwightSalary.currentAmount()); // $65,000
dwightSalary.lower();
dwightSalary.lower();
console.log(dwightSalary.currentAmount()); // $55,000
dwightSalary.changeBy(10000); // TypeError: undefined is not a function
/*Using closures to namespace private functions keeps more general namespaces clean, preventing naming collisions. Neither the salary variable nor the changeBy function are available outside of dwightSalary. However, raise, lower and currentAmount all have access to them and can be called on dwightSalary.

These are a few popular uses for closures. You’ll surely encounter closures used for other purposes, but these are a couple simple ways to incorporate closures into your code in an immediately useful way.*/
