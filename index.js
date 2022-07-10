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

// JavaScript is dynamic - change the type of the variable
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
