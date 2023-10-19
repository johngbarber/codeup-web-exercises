//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

//define the function
function showMultiplicationTable(){
    //Prompt the user for an integer to work with. Run for loop to result in the multiplication table
    let num = parseInt(prompt("Please enter any integer"));
    for (let i = 1; i <= 10; i++)
        console.log(`${num} x ${i} = ${num * i}` )
}

 showMultiplicationTable()

//3
// create a for loop that:
// generates a variable between 20 and 200 - num = Math.floor(Math.random() * 180) + 20
//and logs whether each result is even or odd

for (let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 180) + 20
    let result = num % 2 === 0 ? 'even' : 'odd'
    console.log(`${num} is ${result}`)
}

// exercise 4
for (let i = 1; i <= 9; i++) {
    console.log(`${i}`.repeat(i));
}

//exercise 5 - create a for loop that starts at 100 and decrements by 5, logging until i=5.
for (let i = 100; i >= 5; i -= 5) {
    console.log(i)
}

