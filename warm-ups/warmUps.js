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