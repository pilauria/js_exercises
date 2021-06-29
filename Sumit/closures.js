// function a() {
//   let fn;
//   {
//     var x = 5;
//     fn = function () {
//       console.log('/1 int', x, '/');
//     };
//   }
//   console.log('/2 =>', fn());
//   return fn;
// }

// var x = 10;
// const b = a();
// console.log('/4 =>', b());

// because x is scoped in fn, will always be the value it is declared inside that block

///////////////////////
for (let i = 0; i < 4; i++) {
  setTimeOut(() => {
    console.log(i);
  }, 1000);
}

// ////////////////////
var a = 100;

function abc(x) {
  var a = 10;
  return function (y) {
    return a + y;
  };
}

a = 50;
var inner = abc(20);
console.log('mamma', inner(5));

function foo() {
  var a = 30;
  console.log(inner(5));
}
console.log(foo()); // 15

// inner will always returns a + y (inner = abc(20), in the function abc(x), the value x is never read). So if inner = abc(x), if I call inner, the value of inner will change based on that I put inside inner().
// the declaration var=a inside foo() don't change the value of the var a declared inside the function abc(x).
// We use closure in function(y)

// ////////////////////
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
console.log(increment());
console.log(log());

// the value of count inside increment will change inside the increment() function. (count will increments based on how many times we call it, because count++ is block scoped in the increment() function: its lexical scope is within this function). The value of count wil be always 0 if we call createIncrement() because it is declared and never changed before we return the function, within its lexical scope
// In increment() we use the  closure, not in log()

// //////////////////////////
function createUser(initialName) {
  let name = initialName;
  return {
    getName() {
      return name;
    },
    setName(newName) {
      name = newName;
    },
  };
}
let p1 = createUser('sumit');
let p2 = createUser('kapoor');
p2.setName(null);
console.log(p1.getName());
console.log(p2.setName());

// Can you explain me this code?
// what is getName and setName???
// no closures, because we are not retuening any values from the createUser function
