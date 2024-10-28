const fruits = ["apple", "banana", "grapes"];

const flowers = ["lily", "rose", "lotus"];

// fruits.push(flowers);

// console.log(fruits); // takes the Array inside the array.

// So better way to do this is to use 'spread'

const fruitsFlowers = [...fruits, ...flowers];

console.log(fruitsFlowers);

// What if an array contains another array.

const arr = [1, 2, [3, 4, [5, 6]]];

const realArr = arr.flat(Infinity);

console.log(realArr);

// How to make array or group

let day1 = 'sunday';
let day2 = 'monday';
let day3 = 'tuesday';

console.log(Array.of(day1, day2, day3));

// This is how we group or make array of different things.

/**
 * 1. Study Array and it's prototype
      (some famous) well.
 */