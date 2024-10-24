// Creating Strings
// You can create strings using single quotes, double quotes, or backticks.

let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let backticksString = `Hello, World!`;

console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(backticksString);

// String Properties

// Length: The length property returns the number of characters in a string.

let str = "Abhishek Kumar Ojha";
console.log(str.length); // it counts the whitespaces also

// Common String Methods

// charAt(index): Returns the character at a specified index.

console.log(str.charAt(0));

// indexOf(substring): Returns the index of the first occurrence of a specified substring, or -1 if not found.

console.log(str.lastIndexOf('x'));

// substring(start, end): Returns a part of the string between the start and end indices.

console.log(str.substring(0, 4));

// toUpperCase() and toLowerCase(): Convert the string to uppercase or lowercase.

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// trim(): Removes whitespace from both ends of the string.

str = "   Abhishek    Kumar Ojha    ";
console.log(str.trim());

// split(delimiter): Splits the string into an array of substrings based on a specified delimiter.

str = "Abhishek, Kumar, Ojha";
console.log(str.split(", "));

// Template Literals
// Template literals allow for easier string interpolation and multi-line strings:

let name = "Abhishek";
let greeting = `Hello, ${name}!!`;  // always write in backticks while using this format.
console.log(greeting);

// String Immutability

// Strings in JavaScript are immutable, meaning once created, they cannot be changed. Any operation that seems to modify a string will actually return a new string.

/**
 * 1. Study about String properties.
 */