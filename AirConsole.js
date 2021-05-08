const readline = require('readline-sync');

let row, seat;

function prompt(message) {
  console.log(`${message}`);
}

function displayBusinessClass() {} //TODO

function displayEconomyClass() {} //TODO

function booking() {
  readline.question(prompt(`Please enter the ${row} number:`));
  // if rowB available push rowB on the object or 'not available'
  readline.question(prompt(`Please enter the ${seat} letter:`));
  // if seatB available push seatB on the object 'not available'
  // if robB && seatB: console.log(`Seat ${row}${seat} is available.)
}

function passengerData() {
  let firstName = readline.question(
    prompt("Please enter the passenger's firstName: ")
  );
  let lastName = readline.question(
    prompt("Please enter the passenger's lastName: ")
  );
  let passport = readline.question(
    prompt("Please enter the passenger's passport number: ")
  );
}

/*--------------- START ---------------------*/

prompt(
  '*******************************\n**   Welcome to AirConsole   **\n*******************************\n'
);

let selection = readline.question(
  prompt(
    'Task Selection\nR: Reservation\nS: Seat Verification\nX: Exit the System\n\nPlease enter the task you want to perform:'
  )
);

switch (selection) {
  case 'R':
    console.log(
      '*******************************\n**         Seat Class        **\n*******************************\n'
    );
    let classSel = readline.question(
      prompt(
        'Seat Class Selection:\nB: Business Class\nE: Economy Class\n\nPlease enter the seat class you want to reserve: '
      )
    );

    classSel === B ? displayBusinessClass() : displayEconomyClass();

    booking(row, seat);

    passengerData();

    console.log(`Seat ${TODO} was successfully booked!`); //TODO
    break;

  case 'S':
    console.log(
      '*******************************\n**    Seat Verification      **\n *******************************'
    );

  case 'X':
    break;
}

// // we want the invalidNumber function to return true when and only when either the user inputs an empty string (after trimming their input) or inputs a string that, when coerced to a number type, is NaN
// function invalidNumber(number) {
//   return number.trimStart() === '' || Number.isNaN(Number(number));
// }
// prompt('Welcome to Calculator!');

// // user input 1
// prompt('What is the first number?');
// let number1 = readline.question();

// // validate user input 1
// while (invalidNumber(number1)) {
//   prompt("Hmm...that doesn't look like a valid number.");
//   number1 = readline.question();
// }

// // user input 2
// prompt('What is the second number?');
// let number2 = readline.question();

// // validate user input 2
// while (invalidNumber(number2)) {
//   prompt("Hmm...that doesn't look like a valid number.");
//   number2 = readline.question();
// }

// // user input 3
// prompt(
//   'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide',
// );
// let operation = readline.question();

// // validate user input 3
// while (!['1', '2', '3', '4'].includes(operation)) {
//   prompt('Must choolse 1, 2, 3, or 4');
//   operation = readline.question();
// }

// let output;
// // eslint-disable-next-line default-case
// switch (operation) {
//   case '1':
//     output = Number(number1) + Number(number2);
//     break;
//   case '2':
//     output = Number(number1) - Number(number2);
//     break;
//   case '3':
//     output = Number(number1) * Number(number2);
//     break;
//   case '4':
//     output = Number(number1) / Number(number2);
//     break;
// }

// prompt(`The result is ${output}.`);
