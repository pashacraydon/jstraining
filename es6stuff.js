
Object destructuring;

es5;
var cat = {
    color: "grey",
    gender: "female",
    age: 2
  }

es6;
var { color, gender } = cat
color = "black"
gender = "male"

// original object is unchanged

console.log(color) // "black"
console.log(gender) // "male"

console.log(cat.color) // "grey"
console.log(cat.gender) // "female"



Array destructuring;

// pull out values from arrays and scope them to local variables
const [firstAnimal] = ["cat", "dog", "lion", "horse"]
console.log(firstAnimal) // "cat"

// pass over values
const [,,thirdAnimal,] = ["cat", "dog", "lion", "horse"]
console.log(firstAnimal) // "lion"


// spread operator
const [firstAnimal,, ...remaining] = ["cat", "dog", "lion", "horse"]
console.log(firstAnimal, ...remaining) // "cat", ["lion", "horse"]