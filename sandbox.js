alert("hello, world");

// let is when you might wanna change the value 
let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

// const is global, value doesnt change
const points = 100;
console.log(points)

// Old way is var
var score = 75;
console.log(score);

let email = 'some@thing.rrc.ca';
console.log(email);

//concatenations of strings 
let firstName = 'Brenda';
let lastName = 'Anderson';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//string lenghts
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());

//storing string fucntion in a variable 
let result = fullName.toLocaleLowerCase();
console.log(result);
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);



