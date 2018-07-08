// const person = {
//   name: 'Oz',
//   age: 35,
//   location: {
//     city: 'Chicago',
//     temp: 90
//   }
// }

// const { name, age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Book Title',
//   author: 'Ozzy Gonzalez',
//   publisher: {
//     // name: ''
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//Array destructuring

const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state, zip] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [menuItem, sm, md, lg] = item;

console.log(`A medium ${menuItem} costs ${md}`);
