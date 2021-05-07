/* Write a program using nodejs that accepts a number and then prints the letter I */

// No refactoring
// let displayI = function (number) {
//   let star = '*';
//   for (let i = 1; i <= number; i++) {
//     if (i === 1) {
//       console.log(star.repeat(number));
//     } else if (i > 1 && i < number) {
//       number % 2 === 1
//         ? console.log(star.padStart((number - 1) / 2 + 1))
//         : console.log((star + star).padStart(number / 2 + 1));
//     } else if (i === number) {
//       console.log(star.repeat(number));
//     }
//   }
// };

// My refactoring
// let displayI = function (number) {
//   let star = '*';

//   for (let i = 1; i <= number; i++) {
//     if (i === 1 || i === number) console.log(star.repeat(number));
//     if (i > 1 && i < number) {
//       number % 2 === 1
//         ? console.log(star.padStart((number - 1) / 2 + 1))
//         : console.log((star + star).padStart(number / 2 + 1));
//     }
//   }
// };
// console.log(displayI(3));

// Final refactoring
const displayI = number => {
  let star = '*';
  console.log(star.repeat(number));
  for (let i = 1; i <= number - 2; i++) {
    const isOdd = number % 2 === 1;
    const stars = star.repeat(isOdd ? 1 : 2);
    const spaces = ' '.repeat(
      isOdd ? Math.floor(number / 2) : Math.floor(number / 2) - 1
    );
    console.log(`${spaces}${stars}`);
  }
  console.log(star.repeat(number));
};
displayI(9);
