var nameVar = "Ozzy";
nameVar = "Jim";
console.log("nameVar", nameVar);

let nameLet = "Bubba";
nameLet = "Noah";

console.log("nameLet", nameLet);

const nameConst = "Frank";

console.log("nameConst", nameConst);

//Block Scoping

var fullName = "Ozzy Gonzalez";
let firstName = '';

if (fullName) {
  let firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);