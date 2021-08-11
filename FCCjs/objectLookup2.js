/* Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
 */
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let x = 0; x < contacts.length; x++) {
//     if (name === contacts[x].firstName && contacts[x].hasOwnProperty(prop)) {
//       return contacts[x][prop];
//     } else {
//       return 'No such property';
//     }
//   }

//   return 'No such contact';
//   // Only change code above this line
// }

// console.log(lookUpProfile('Akira', 'likes'));

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   contacts.forEach(item => {
//     // console.log(item.hasOwnProperty(lastName));
//     if (item.firstName === name && item.hasOwnProperty(prop)) {
//       return item[prop];
//     } else {
//       return 'No such property';
//     }
//   });

//   // Only change code above this line
// }
// console.log(lookUpProfile('Akira', 'likes'));

/////////////////////////////////////////////////

// var people = [
//   { first_name: 'john', last_name: 'doe' },
//   { first_name: 'mary', last_name: 'beth' },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].first_name);
// }

// people.forEach(function (arrayItem) {
//   var x = arrayItem.first_name + 'm';
//   console.log(x);
// });
