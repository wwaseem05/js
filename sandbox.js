// alert("hello, world");

// let is when you might wanna change the value 
// let age = 25;
// let year = 2019;
// console.log(age, year);

// age = 30;
// console.log(age);

// const is global, value doesnt change
// const points = 100;
// console.log(points)

// Old way is var
// var score = 75;
// console.log(score);

// let email = 'some@thing.rrc.ca';
// console.log(email);

//concatenations of strings 
// let firstName = 'Brenda';
// let lastName = 'Anderson';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

//string lenghts
//console.log(fullName.length);

//string methods
//console.log(fullName.toUpperCase());

//storing string fucntion in a variable 
// let result = fullName.toLocaleLowerCase();
// console.log(result);
// console.log(result, fullName);

//COMMON STRING METHODS

//method to find position of a character 
// let index = email.indexOf('@');
// console.log(index);

//slice
// let result = email.slice(0,4);
// console.log(result);

//10 is length
// let result = email.substr(4,12);
// console.log(result)

// let result = email.replace('m','w');
// console.log(result)

//      MATH OPERATORS  //
// L

// Template Strings - Use Backticks `` not ''

// const title = 'Best Reads of The Month'
// const author = 'Mario'
// const likes = 30;

// let result = `The blog ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // Creating HTML templates 

// let html = `
// <h2>${title}</h2>
// <p>${author}</p>
// <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

//          ARRAYS          //
// L
//          UNDEFINED       //

// let age;
// console.log(age, age+3, `the age is ${age}`);

//          BOOLEANS        //

//          TYPE CONVERSION //

// let score = 100;

// // score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

//           LOOPS          //

// for(let i = 0; i <5; i ++){
//     console.log('in loop:',i);
// }

// console.log('loop finished.')

//        CONDITIONAL STATEMENTS //

// const ninjas = ['shaun','henry', 'li', 'yoshi'];

// if (ninjas.length > 3) {

//     console.log("4 ninjas completed");
//     console.log(ninjas);
// } 

//          BREAK AND CONTINUE      //

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++) { //looping through the list

// if(scores[i] === 0){        // continue loop if the list hits 0
//     continue;
// }

// console.log('your score: ', scores [i]);

// if(scores[i] === 100) {
//     console.log('congrats, you got the top score');
//     break;                  // stop loop if the list hits 100 
// }

// }


// SWITCH STATEMENTS //

// const grade = 'A';

// switch(grade){
//     case 'A':
//         console.log('you got an A');
//         break;
//     case 'B':
//         console.log('you got an B');
//         break;
//     case 'C':
//         console.log('you got an C');
//         break;
//     case 'D':
//         console.log('you got an D');
//         break;
//     default:
//         console.log('not a valid grade');
// }

// SCOPE //
// //const would work too, global scope
// let age = 30;

// if (true){
//     let age = 40;
//     console.log('inside 1st code block', age);
// }

// console.log('outside code block', age);

// //          FUNCTIONS        //

// function greet(){
//     console.log('hello there!');
// } //no semi-colon because fucntion

// greet();
// greet();

// // fucntions expression, so much better way to define functions 
// const speak = function(){
//     console.log('good day');
// }; // semi-colon because variable, no necessary, just good practice

// speak();

//      PARAMETERS      //

// const speak = function(name = 'Henry', time = 'night'){
//     console.log(`good ${time}, ${name}`) // remember these are templates
// }
// speak();

// const calcArea = function(radius){
// return 3.14 * radius **2;
// };

// const area = calcArea(5);
// console.log(area);

//      ARROW FUCNTIONS         //

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);


// FUNCTIONS vs METHODS //

// // fucntions
// const name = 'Shaun';
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// CAKKBACKS & FOREACH //

// const myFunc = (callbackFunc) => {
//     //do smth
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){ console.log(value); });
// //myFunc is a higher-order function, meaning it's a function that takes another function as an argument.

//let people = ['stella', 'mario', 'jason'];

// people.forEach(function(){ console.log('something');});

// people.forEach(function(person){ console.log(person);});

//people.forEach((person, index) => {console.log(index,person);});

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }
// people.forEach(logPerson);


// get a reference to the 'ul'
// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi','ryu', 'shaun', 'chun-li'];
// let html =``;

// people.forEach(function(person){
// // create html template
// html += `‹li style="color: purple">${person}</li›`;
// });
// console.log(html);
// ul.innerHTML = html;