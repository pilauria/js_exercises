/* Write a program using nodejs that accepts a number and then prints the letter I */

let displayI = function (number) {
  let star = '*';
  for (let i = 1; i <= number; i++) {
    if (i === 1) {
      console.log(star.repeat(number));
    } else if (i > 1 && i < number) {
      number % 2 === 1
        ? console.log(star.padStart((number - 1) / 2 + 1))
        : console.log((star + star).padStart(number / 2 + 1));
    } else if (i === number) {
      console.log(star.repeat(number));
    }
  }
};

console.log(displayI(6));
