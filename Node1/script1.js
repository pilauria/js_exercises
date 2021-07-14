import fs from 'fs';

fs.readFile('./hello.txt', (err, data) => {
  console.time('funchallenge');
  if (err) {
    console.log('errrrror');
  }
  console.log('Async', data.toString());
  console.timeEnd('funchallenge');
});
