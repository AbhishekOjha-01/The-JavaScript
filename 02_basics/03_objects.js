// In JavaScript, objects are one of the core data types and are used to store collections of data and more complex entities. An object is a standalone entity, with properties and type. Here’s a basic overview:

// Creating Objects

// 1. Object Literal:

const person = {
    name: 'Abhishek',
    age: 21,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person);
console.log(person.greet());

// 2. Using the new Object() Constructor:

const car = new Object();
car.company = 'Tata';
car.model = 'nano';
car.price = "1,00,000";
car.year = 2015;

console.log(car);

// 3. Using a Constructor Function:

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, ${this.name}`);
    };
}

const Raju = new Person('Raju', 30);

// 4. Using ES6 classes:

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal('Leo', 'Labra');

// Accessing Object Properties

// 1. Dot Notation:

console.log(person.name);

// 2. Bracket Notation:

console.log(person['age']);

// Adding and Modifying Properties

person.job = 'Engineer';
person.age = 22;

// Deleting Properties

delete person.age;

// Looping Through Object Properties

// You can use for...in to iterate over properties:

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

/* Common Methods

Object.keys(obj): Returns an array of a given object's property names.

Object.values(obj): Returns an array of a given object's property values.

Object.entries(obj): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 

*/

const book = {
    title: '1984',
    author: 'George Orewell',
    year: '1949',
    read: function() {
        console.log(`Reading "${this.title}" by ${this.author}`);
    }
};

book.read();
console.log(Object.keys(book));

/**
 * 1. Objects plays an important role in JS.
 * 2. Study Objects well enough.
 */