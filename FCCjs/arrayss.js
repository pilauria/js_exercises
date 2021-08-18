const someArr = [
  'max',
  34,
  true,
  { name: 'sandra', student: true },
  ['javascript', 'mongodb', 'react'],
];

// someArr.forEach(element => console.log(typeof element));
// console.log(someArr);

const mixedArray = [
  123,
  'abc',
  true,
  { a: 1 },
  ['js', 'node', 'react'],
  undefined,
];

// mixedArray.forEach(element => {
//   console.log(element);
// });

let getCredentials = () => {
  let user = {
    username: 'ironhacker',
    password: '123iron345',
  };

  console.log(
    `Username is: ${user.username} and the password is: ${user.password}`
  );
};

// console.log(getCredentials());

let property = {
  owner: {
    firstName: 'John',
    lastName: 'Doe',
    age: 44,
  },
  isForSale: true,
  sqrm: 120,
  address: {
    street: 'Happy St',
    number: 123,
    city: 'Miami',
    state: 'FL',
    country: 'US',
  },
  amenities: ['pool', 'tennis court', 'private parking', 'yard'],
};

let checkProperty = property => {
  if (property.isForSale) {
    console.log(
      `The owner, ${property.owner.firstName} ${property.owner.lastName} put the home for sale! The property has ${property.amenities.length} amenities. `
    );
  } else {
    console.log(
      `The home in ${property.address.street}${property.address.number} is not for sale.`
    );
  }
};

console.log(checkProperty(property));
