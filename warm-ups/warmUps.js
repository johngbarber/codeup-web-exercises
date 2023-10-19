//John Barber
//"Daily Warmups"
// let name='John Barber'
// let year = "2000"
// console.log("My name is " + name + " and I graduated in " + year)
//
// // This process is taking the character at the zero position in the variable "animal" and capitalizing it, then recombining it via concatenation with the sliced remainder of "animal" starting at the (1) position.
// function capitalizeFirstLetter(animal) {
//     return animal.charAt(0).toUpperCase() + animal.slice(1);
// }
// let animal = prompt("What is your favorite animal?")
// console.log(capitalizeFirstLetter(animal))

//This is a second solution that was demonstrated in class.
// const capitalizeFirstLetter2 = (str) => {
//     console.log(str);
//     let firstLetter = str.substring(0,1);
//     let capitalizedFirstLetter = firstLetter.toUpperCase()
//     let restOfWord = str.substring(1)
//     return capitalizedFirstLetter + restOfWord
//
// }
//
// const capitalizeFirstLetter = str => str.substring(0,1).toUpperCase() + str.substring(1);
//
// //function to compare three user provided numbers for which is the largest.
// function largestNum () {
//     //prompt user for first input
//     let numOne = parseInt(prompt("Please enter your first number."));
//     //prompt user for second input
//     let numTwo = parseInt(prompt("Please enter your second number."));
//     //prompt user for third input
//     let numThree = parseInt(prompt("Please enter your third number."));
//     //compare three user inputs using Math.max method
//     let largestNum = Math.max(numOne, numTwo, numThree)
//     //return result via an alert
//     alert(`The largest number is ${largestNum}`)
//
//     }
//
// largestNum()

// create a while loop that starts at num =100
let num = 100
do {
    num -= 5
    if (num % 2 === 0 && num !== 0) {
        console.log(`${num} is even`);
    } else {
        console.log(num);
    }
} while (num > 0);