// In JavaScript, you can work with dates and times using the built-in Date object. Here are some common operations:

// Getting the Current Date and Time

const now = new Date();
console.log(now); // prints the current date and time

// Creating a Specific Date

const specificDate = new Date("2023-10-26T10:30:00");
console.log(specificDate);

// Formatting Date

// You can format dates using methods like toLocaleDateString() and toLocaleTimeString():

const date = new Date();
const formattedDate = date.toLocaleDateString(); // e.g., "10/26/2023"
const formattedTime = date.toLocaleTimeString(); // e.g., "10:30:00 AM"
console.log(formattedDate, formattedTime);

// Getting Parts of the Date

// You can get individual components of the date:

const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-indexed
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(year, month, day, hours, minutes, seconds);

// Adding or Subtracting Time

// You can manipulate dates by adding or subtracting milliseconds:

const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // Add 7 days
console.log(oneWeekLater);

// Converting to UTC

// You can also get the UTC representation:

const utcString = now.toUTCString();
console.log(utcString);

/**
 * 1. Date and time plays crucial role in projects like flight, ticket booking projects.
 */