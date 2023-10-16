// console.log("hello")

// let age = 12;

// if(age >= 16){
//     console.log("You are eligible to drive.")
// };
// if(age < 16){
//     console.log("You are not old enough to drive.")
// }
// if(age >= 16){
//     console.log("You are eligible to drive.")
// } else {
//     console.log("You are not old enough to drive.")
// }

let currentDay = prompt("What is the day of the week").toLowerCase()

// if (currentDay === 'monday' ||
//     currentDay === 'tuesday' ||
//     currentDay === 'wednesday'){
//     console.log("I love " + currentDay)
// } else {
//     console.log(currentDay + " is not a valid day.")
// }
//Boolean if else statement
// let letsPlay = confirm("Do you want to play a game?");
//
// if(letsPlay){
//     console.log("The key is in Steven's stomach, to get out you need to use the pocket knife.")
// } else {
//     console.log("You are going to die in here.")
// }

// const username = "user"
// const password = "password"

//prompt user to enter a username and password

// const userUsername = prompt("Please enter your username.")
// const userPassword = prompt("Please enter your password.")

//next I want to console.log you are logged in if username, userUsername && password, userPassword match

// if (username === userUsername &&
//     password === userPassword) {
//     console.log("You are logged in.")
// } else if(userUsername !== username && userPassword!== password) {
//     console.log("Username and Password incorrect.")
// } else if (userUsername !== username){
//     console.log("Incorrect username.")
// } else if(userPassword !== password) {
//     console.log("Incorrect Password.")
// }   else{
//     console.log("Unexpected Error.")
// }
// NESTED CONDITIONAL

// if(username === userUsername){
//     if(password === userPassword){
//         console.log("You are logged in.")
//     }else{
//         console.log("Incorrect password.")
//     }
// } else {
//     console.log("Incorrect username.")
// }

// Terniary Operator

// let name = 'Bob'
//
// let greeting = (name === Bob) ? "Hello " + name : "Hello stranger."
// console.log(greeting)
//
// let currentCurrentDay = currentDay === 'monday' || 'tuesday' || 'wednesday' ? "I love " + currentDay : currentDay + " is not a valid day."

//Switch statement example.

//using function and if/else

function sayHello(name) {
    if (name.length <= 20)
        return `Hello ${name}`
    else {
        return "You need a nickname."
    }
}

