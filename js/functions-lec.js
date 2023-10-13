"use strict"

// Create a function named sum that takes in two numbers and returns the sum of the two numbers

//defining the function
function sum(num1, num2) {
    return num1 + num2
}

//calling the function
console.log(sum(6, 7));

//creat a function called fullName that takes two names, and returns the first and last name concatenated together

// function fullName(string1, string2) {
//     return string1 + " " + string2
// }
//
// console.log(fullName("John", "Barber"));

//refactor with template literals
// function fullName(string1, string2) {
//     return `${string1} ${string2}`
// }
//
// console.log(fullName("John", "Barber"));

// Anonymous function / Function Expression

const decrement = function(x) {
    return x - 1
}

console.log(decrement(3))

//Arrow Functions
//function declaration
// function fullName(string1, string2) {
//     return `${string1} ${string2}`
// }

// long arrow function

// const fullName = (firstName,lastName) => {
//     return firstName + " " + lastName
//
// }
//
// console.log(fullName('John', 'Barber'));

//short arrow function

const fullName = (firstName, lastName) => firstName + " " + lastName;

console.log(fullName('John', 'Barber'));

//the return is implied if no curly braces are present

//create a function that takes a string and returns the string to all lower case letters

//arrow function

let sampleString = "How dOes THis even work"

const arrowLowercase = (str1) => str1.toLowerCase()

console.log(arrowLowercase(sampleString));

//function declaration
function lowerCasestring(nonLowerstr) {
    sampleString = nonLowerstr.toLowerCase();

}

lowerCasestring(sampleString)
console.log(sampleString)

