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
// let num = 100
// do {
//     num -= 5
//     if (num % 2 === 0 && num !== 0) {
//         console.log(`${num} is even`);
//     } else {
//         console.log(num);
//     }
// } while (num > 0);
// function evenNumbers(){
//     for (let i = 2; i <= 100; i += 2) {
//         console.log(i)
//
//     }
// }
//
// evenNumbers()

// Create an array of at least five of your favorite movies. create a for each loop ( or a for od loop) to console log all of your movies in alphabetical order.
//
// const movies = ['Die Hard', 'Die Hard 2', 'Die Hard with a Vengeance', 'Live Free or Die Hard', 'A Good Day to Die Hard' ]
// // sort the array
// movies.sort();
// //console log the array using a for each loop
// console.log('My Favorite Movies in Alphabetical Order');
// movies.forEach((movie => {
//     console.log(movie)
// }))
//
// let cars = [
//     {make: "Dodge", model: "Challenger", shade: "blue"},
//     {make: "Ferrari", model: "La Ferrari", shade: "red"},
//     {make: "Acura", model: "NSX", shade: "black"}
// ];
//
// for (let car of cars){
//     console.log(`Here is an awesome ${car.shade} ${car.make} ${car.model}.`)
// }
function displayToDoList() {
    // Fetch the JSON file
    fetch('data/to-do.json')
        .then(response => response.json())
        .then(data => {
            // Get the container where we'll append the checkboxes
            const todoContainer = document.getElementById('todo-container');

            // Iterate through the to-do list items and create checkboxes
            data.forEach(item => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.id;
                const label = document.createElement('label');
                label.htmlFor = item.id;
                label.appendChild(document.createTextNode(item.id));

                // Append the checkbox and label to the container
                todoContainer.appendChild(checkbox);
                todoContainer.appendChild(label);
                todoContainer.appendChild(document.createElement('br'));
            });
        })
        // .catch(error => console.error('Error fetching to-do list:', error));
}

// Call the function to display the to-do list
displayToDoList();