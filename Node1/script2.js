import fs from 'fs';

// 1 - What floor does Santa end up on
// ( = +1
// ) = -1

function question1() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santaTime');
    const directions = data.toString();
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, floor) => {
      if (floor === '(') {
        return (acc += 1);
      } else if (floor === ')') {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd('santaTime');
    console.log('floor:', answer);
  });
}
question1();

// 2 - When does Santa first enter the basement

function question2() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santaTime');
    const directions = data.toString();
    const directionsArray = directions.split('');
    let acc = 0;
    let counter = 0;
    const answer = directionsArray.some(currentItem => {
      if (currentItem === '(') {
        acc += 1;
      } else if (currentItem === ')') {
        acc -= 1;
      }
      counter++;
      return acc < 0;
    });
    console.timeEnd('santaTime');
    console.log('basement entered at: ', counter);
  });
}

question2();
