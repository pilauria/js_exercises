const readline = require('readline-sync');

///// GLOBAL VARIABLES //////////
const seatsBusiness = {
  rows: [1, 2, 3, 4, 5],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

const seatsEconomy = {
  rows: [6, 7, 8],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

/// FUNCTIONS //////
function prompt(message) {
  console.log(`${message}`);
}

////////////--------------- START -----------------///////////////

let welcome = prompt(
  '*******************************\n**   Welcome to AirConsole   **\n*******************************\n'
);

let selection = readline.question(
  prompt(
    'Task Selection\nR: Reservation\nS: Seat Verification\nX: Exit the System\n\nPlease enter the task you want to perform:'
  )
);

// if (correctInput(input)){}
if (selection === 'R' || selection === 'r') {
  console.log(
    '*******************************\n**         Seat Class        **\n*******************************\n'
  );
  let classSel = readline.question(
    prompt(
      'Seat Class Selection:\nB: Business Class\nE: Economy Class\n\nPlease enter the seat class you want to reserve: '
    )
  );

  if (classSel === 'B' || classSel === 'b') {
  } else {
  }
} else if (selection === 'S' || selection === 's') {
} else {
  let quit = readline.question(
    prompt('Do you really want to quit?\nY: Yes\nN: No')
  );
  if (quit === 'N') {
    console.log(welcome);
  } else {
    return;
  }
}

let row = readline.question(prompt(`Please enter the row number:`));

let letter = readline.question(prompt(`Please enter the seat letter:`));

let firstName = readline.question(
  prompt("Please enter the passenger's firstName: ")
);
let lastName = readline.question(
  prompt("Please enter the passenger's lastName: ")
);
let passport = readline.question(
  prompt("Please enter the passenger's passport number: ")
);
