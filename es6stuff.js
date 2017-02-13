


// Object destructuring;


let cat = {
    color: "grey",
    gender: "female",
    age: 2
  }


cat.color = 'black';



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
console.log(thirdAnimal) // "lion"


// spread operator
const [firstAnimal,, ...remaining] = ["cat", "dog", "lion", "horse"]
console.log(firstAnimal, ...remaining) // "cat", ["lion", "horse"]

function Animal (type) {
  this.type = type;
}

Animal.prototype.getAnimalType = function () {
  console.log('The animal is a ' + this.type);
}

var animal = new Animal('cat');

animal.getAnimalType();
// "The animal is a cat"




class Animal {
  constructor (type) {
    this.state = {
      'type': type
    }
  }

  getAnimalType() {
    console.log(`The animal is a ${this.state.type}`);
  }
}

const animal = new Animal('cat');


class Dog extends Animal {
  constructor (type, breed) {
    super(type);
    this.breed = breed;
  }

  print() {
    super.getAnimalType();
    console.log(`The breed is ${this.breed}`);
  }
}


const dog = new Dog('dog', 'samoyed');



function dog (breed) {
  console.log('Dog breed is ' + breed);
}

const dog = (breed) => {
  console.log(`Dog breed is ${breed}`);
}

dog('samoyed');




const export default print = () => {}
import { print } from './helpers' 

const print = () => {}
import { print } from './helpers' 

const export print = () => {}
const export log = () => {}
import * as h from './helpers';
h.print();




