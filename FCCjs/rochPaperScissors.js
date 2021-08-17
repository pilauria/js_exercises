let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice = 'rock';
let secondPlayerChoice = 'paper';

let firstPossibility =
  firstPlayerChoice === rock && secondPlayerChoice === scissors;
let secondPossibility =
  firstPlayerChoice === scissors && secondPlayerChoice === paper;
let thirdPossibility =
  firstPlayerChoice === paper && secondPlayerChoice === rock;

let fourthPossibility =
  firstPlayerChoice === scissors && secondPlayerChoice === rock;
let fifthPossibility =
  firstPlayerChoice === paper && secondPlayerChoice === scissors;
let sixthPossibility =
  firstPlayerChoice === rock && secondPlayerChoice === paper;

let seventhPossibility = firstPlayerChoice === secondPlayerChoice;

if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log('first player won!');
} else if (thirdPossibility || fourthPossibility || fifthPossibility) {
  console.log('second player won!');
} else {
  console.log('something went wrong!');
}
