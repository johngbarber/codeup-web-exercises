// while loops
// let n=0;
// while (n <= 10) {
//     console.log("while loop iteration #" + n);
//     n++
// }

// do-while loops
// let i = 12
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

// create a variable called num that is equal to 0.
// Write a while loop that increments num by 5 as long as num is less than 100
// do the same with a do-while
//while
let num=0;
while (num <= 100) {
    console.log(num);
    num += 5
}
//do while
let num2=0;
do {
    console.log(num2);
    num2 += 5;
} while (num2 < 100);

const secretNumber = 7
let guess
let attempt = 0
//do-while

do{
    guess = parseInt(prompt("Guess the secret number (1-10)"));
    attempt ++
    if (guess === secretNumber){
        console.log("You have guessed the lucky number")
    } else {
        if(guess < secretNumber){
            console.log("Try a higher number")
        } else{
            console.log("Try a lower number")
        }
        console.log("Bitch, you have been wrong " + attempt + " times")
    }
} while (guess !== secretNumber)