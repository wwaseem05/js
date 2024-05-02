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

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++) { //looping through the list

if(scores[i] === 0){        // continue loop if the list hits 0
    continue;
}

console.log('your score: ', scores [i]);

if(scores[i] === 100) {
    console.log('congrats, you got the top score');
    break;                  // stop loop if the list hits 100 
}

}