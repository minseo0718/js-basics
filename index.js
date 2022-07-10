console.log('Hello World');
let name = 'Minseo'; // String Literal
console.log(name);
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a sapce or hyphen
// Are case-sensitive

let firtName = 'Minseo', lastName = 'Kim';
// is possible, but not the best

const interestRate = 0.3;
// cannot reassign const
console.log(interestRate);

let age = '20'; // Number Literal
let isApproved = true; // Boolean Literal
let middleName = undefined; // type is also undefined
let middleName2 = null; // type is object

// JavaScript is dynamic - type of variables can be changed
// all numbers - number

let person = {
    name: 'Minseo',
    age: 20
};
// Dot Notation
person.name = 'Kim';
// Bracket Notation
let selection = 'name';
person[selection] = 'Andy';
console.log(person.name);

let selectedColors = ['red', 'blue']; // Array Literal
selectedColors[2] = 'green'; // length is dynamic
selectedColors[3] = 1; 
console.log(selectedColors); // type of an Array is object

// Performing a task
function greet(name) {
    console.log('Hello ' + name);
} // name is a parameter
greet('Minseo'); // 'Minseo' is an argument
greet('Andy');

// Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);