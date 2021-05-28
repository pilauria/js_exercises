const readline = require('readline-sync');

const seatLetters = [A, B, C, D, E];
const businessRows = [1, 2, 3, 4, 5];
const economyRows = [6, 7, 8];
const businessSeats = [];
const economySeats = [];

// businessSeats[seatRow][seatLetter];

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
