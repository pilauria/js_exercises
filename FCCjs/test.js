// let products = [
//   {
//     name: 'iPhone',
//     price: 799.99,
//   },
//   {
//     name: 'Samsung Galaxy S10',
//     price: 900.0,
//   },
// ];

// console.log(products[0].price);

// for (let key in products) {
//   console.log(products[key].name);
// }

// for (let [key, value] of Object.entries(products)) {
//   console.log(`${value.name}`);
// }

// products.unshift({ name: 'mimmo', price: '234' });

// products.pop();

// console.log(products);

let student = {
  firstName: 'Ana',
  lastName: 'Blair',
  course: {
    name: 'Web Development',
    type: 'part-time',
  },
  attendedIn: 'Madrid',
  address: {
    street: 'Happy Street',
    number: 123,
    city: 'Barcelona',
    zip: 08015,
    country: 'Spain',
  },
};

console.log(student['course']['name']);
console.log(student['address']['street']);
console.log(
  `${student['firstName']} moved from ${student['address']['city']} to ${student.attendedIn} to take a ${student.course.type} ${student.course.name} course `
);

let basic = {
  language: 'JavaScript',
  frameworks: [
    {
      end: 'back',
      list: [
        {
          name: 'ExpressJS',
          released: 2010,
        },
        {
          name: 'MeteorJS',
          released: 2012,
        },
      ],
    },
    {
      end: 'front',
      list: [
        {
          name: 'ReactJS',
          released: 2013,
        },
        {
          name: 'VueJS',
          released: 2014,
        },
      ],
    },
  ],
};

console.log(basic.frameworks[0]['list'][0].name);
console.log(
  `In Ironhack, I'll learn ${basic.frameworks[0]['list'][0].name} and ${basic.frameworks[1]['list'][0].name}`
);

const ironCampuses = [
  ['Mexico City', 'Miami', 'Sao Paulo'],
  ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Paris'],
];

console.log(ironCampuses[0][1]);
console.log(ironCampuses[1][0]);
console.log(ironCampuses[1][ironCampuses[1].length - 1]);
