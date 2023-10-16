//John Barber
//"Daily Warmups"
let name='John Barber'
let year = "2000"
console.log("My name is " + name + " and I graduated in " + year)

// This process is taking the character at the zero position in the variable "animal" and capitalizing it, then recombining it via concatenation with the sliced remainder of "animal" starting at the (1) position.
function capitalizeFirstLetter(animal) {
    return animal.charAt(0).toUpperCase() + animal.slice(1);
}
let animal = prompt("What is your favorite animal?")
console.log(capitalizeFirstLetter(animal))

//This is a second solution that was demonstrated in class.
// const capitalizeFirstLetter2 = (str) => {
//     console.log(str);
//     let firstLetter = str.substring(0,1);
//     let capitalizedFirstLetter = firstLetter.toUpperCase()
//     let restOfWord = str.substring(1)
//     return capitalizedFirstLetter + restOfWord
//
// }

const capitalizeFirstLetter = str => str.substring(0,1).toUpperCase() + str.substring(1);
