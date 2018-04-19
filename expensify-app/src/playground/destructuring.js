//object destructuring

const person = {
  name: "ozzy",
  age: 35,
  location: {
    city: "chicago",
    temp: 35
  }
};

const { name: firstName = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location;

console.log(`${firstName} is ${age}`)

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {

  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

// array deconstructing

const address = ["1299 S Juniper", "Philadelphia", "PA", "19147"];

const [, city = "Chicago", state = "IL"] = address;

console.log(`You are in ${city}`);

const coffee = ["Coffee (iced)", "$2.00", "$2.99", "$2.75"];

const [item, small, medium, large] = coffee;

console.log(`A medium ${item} costs ${medium}`);
