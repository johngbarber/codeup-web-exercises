// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
//
// function golfScore(par, strokes) {
//     return strokes === 1 ? names[0]
//         : strokes <= par - 2
//             ? names[1]
//             : strokes === par - 1
//                 ? names[2]
//                 : strokes === par
//                     ? names[3]
//                     : strokes === par + 1
//                         ? names[4]
//                         : strokes === par + 2
//                             ? names[5]
//                                 : names[6];
// }
//
// console.log(golfScore(5, 3));
//
function calculateTotal(luckyNumber, subTotal){
    let discount = [0, .1, .25, .35, .5, 1];
    return luckyNumber ===  0 ? subTotal - (subTotal * discount[0])
            :  luckyNumber === 1 ? subTotal - (subTotal * discount[1])
                : luckyNumber === 2 ? subTotal - (subTotal * discount[2])
                    : luckyNumber === 3 ? subTotal - (subTotal * discount[3])
                        : luckyNumber === 4 ? subTotal - (subTotal * discount[4])
                            : luckyNumber === 5 ? subTotal - (subTotal * discount[5])
                                : undefined
    // ? (luckyNumber === 1) {
    //     discount = .1
    // } else if (luckyNumber === 2) {
    //     discount =.25
    // } else if (luckyNumber === 3) {
    //     discount = .35
    // } else if (luckyNumber === 4) {
    //     discount = .5
    // } else if (luckyNumber === 5) {
    //     discount = 1
    // }
    // return subTotal - (subTotal * discount)
}

// console.log(calculateTotal(5, 100));
//
// var i = "true"
//
// console.log(i === true)
//
// const iterable = [1, 2, 3, 4, 5];
//
// for (let element of iterable) {
//     console.log(element)
// }

// const numbers = [1,2,3,4,5]
//
// // for (let num of numbers){
// //     console.log(num)
// // }
//
// const shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// shapes.forEach(shape => console.log(`Here is a lovely shape: ${shape}.`));

function createNumberList(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
        // Check for invalid input
        return [];
    }

    return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}

// Example usage:
const result = createNumberList(1, 100);
console.log(result); // Output: [3, 4, 5, 6, 7, 8]

function add (...args){
    let total = 0;
    for (let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}

const randNumArr2 = [72, 5, 90, 11, 43, 22, 100, 21];
console.log(add(...result));

// Function to print a multiplication table
function printMultiplicationTable() {
    // Define the range of numbers for the multiplication table
    let tableSize = 20;

    // Print the header
    console.log("Multiplication Table:");

    // Print the column headers
    process.stdout.write("   |");
    for (let i = 1; i <= tableSize; i++) {
        process.stdout.write(`  ${i}`);
    }
    console.log("\n---|------------------------");

    // Print the table
    for (let i = 1; i <= tableSize; i++) {
        process.stdout.write(` ${i} |`);
        for (let j = 1; j <= tableSize; j++) {
            process.stdout.write(`  ${i * j}`);
        }
        console.log(); // Move to the next line for the next row
    }
}

// Call the function to print the multiplication table
printMultiplicationTable();

// Function to print a colorful multiplication table
function printColorfulMultiplicationTable() {
    // Define the range of numbers for the multiplication table
    const tableSize = 10;

    // Print the header
    console.log("Colorful Multiplication Table:");

    // Print the column headers
    process.stdout.write("   |");
    for (let i = 1; i <= tableSize; i++) {
        process.stdout.write(`  ${i}`);
    }
    console.log("\n---|------------------------");

    // Print the table with ASCII art
    for (let i = 1; i <= tableSize; i++) {
        process.stdout.write(` ${i} |`);
        for (let j = 1; j <= tableSize; j++) {
            const product = i * j;
            const colorCode = product % 7 + 31; // ANSI color code for text color

            // Use ANSI escape codes for colorful output
            process.stdout.write(`\x1b[${colorCode}m  ${product}\x1b[0m`);
        }
        console.log(); // Move to the next line for the next row
    }
}

// Call the function to print the colorful multiplication table
printColorfulMultiplicationTable();

//for each loop

const numbers=[1,2,3,4,5]

numbers.forEach(num => console.log(`Here is a number ${num}`))

for (let num of numbers){
    console.log(`Here is a number ${num}`)
}

// get a date object that represents the current date/time
let today = new Date();

// create a date object based on a specific date/time
// notice that month is zero based in non-string constructors
let codeup = new Date("February 4, 2014 09:00:00");
codeup = new Date("2014-02-04T09:00:00");
codeup = new Date(2014, 1, 4);
codeup = new Date(2014, 1, 4, 9, 0, 0);

console.log(codeup)

console.log(codeup.toLocaleDateString());

//Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return a > b? a : b;
}

// for loop array iteration practice
//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

const myArr = [2,3,4,5,6];
let total = 0;
for (let i =0; i < myArr.length; i++){
    total += myArr[i];
}

console.log(total);

//We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    }
    return rangeOfNumbers(startNum + 1, endNum).concat(rangeOfNumbers(startNum, startNum + 1));
}
userNameTwo = "John"
userAgeTwo = 30
const user = {name: userNameTwo, age: userAgeTwo}


console.log(userNameTwo);
console.log(userAgeTwo);
console.log(user)
