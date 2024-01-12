/*
Numbers declared using new Number() in JavaScript are not stored in the stack memory.
Numbers declared using new Number() are stored in the heap memory.
*/

const a = 99;
console.log(typeof a)
console.log(a.toFixed(2))  //Have precision value (used in E-commerce applications). -> 99.00

const b = new Number(88);
console.log(typeof b)

const hundreds = 100000;
console.log(hundreds.toLocaleString());  //These are in US standards -> 1000,000

console.log(hundreds.toLocaleString('en-IN'));  //These are in IND standards -> 1,00,000


// These below are various methods in Numbers
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


// Math is library in JS and Math is Object
console.log(Math.abs(-99));
console.log(Math.round(9.4)); // 0-4 makes less else if 5-9 makes greater
console.log(Math.floor(9.8)); //t just returns an integer that is just lesser than a certain rational value. -> 9
console.log(Math.ceil(9.2)); //It just returns an integer that is just greater than a certain rational value. -> 10
console.log(Math.max(2,3,9,1,4)); //Gives max value

console.log(Math.random())
// console.log((Math.random()*6)  + 1);

let min = 5;
let max = 20;
console.log(Math.floor( (Math.random() * ((max - min) + 1)) + min ))