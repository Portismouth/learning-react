//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //arguments keyword no longer accessible
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 10));
//this keyword - no longer bound

const user = {
  name: "Ozzy",
  cities: ["Chicago", "New York", "Chapel Hill"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [3, 9, 12],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
