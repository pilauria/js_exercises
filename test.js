let obg = {
  username0: 'Pipi',
  username1: 'Caca',
  username2: 'Mimi',
};

// Object.values(obg).forEach(value => console.log(value));

console.log(
  Object.entries(obg).map(value => {
    console.log(value);
    return `${value[1]}${value[0].replace('username', '')}`;
  })
);
