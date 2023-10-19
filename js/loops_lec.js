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
// let num=0;
// while (num <= 100) {
//     console.log(num);
//     num += 5
// }
// //do while
// let num2=0;
// do {
//     console.log(num2);
//     num2 += 5;
// } while (num2 < 100);
//
// const secretNumber = 7
// let guess
// let attempt = 0
// //do-while
//
// do{
//     guess = parseInt(prompt("Guess the secret number (1-10)"));
//     attempt ++
//     if (guess === secretNumber){
//         console.log("You have guessed the lucky number")
//     } else {
//         if(guess < secretNumber){
//             console.log("Try a higher number")
//         } else{
//             console.log("Try a lower number")
//         }
//         console.log("Bitch, you have been wrong " + attempt + " times")
//     }
// } while (guess !== secretNumber)
//
// for (let i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
// // create a for loop that takes a num = 100 and decrements by 5, while also noting a resulting number is even
// for (let num =100; num>0; num -= 5) {
//     if (num % 2 === 0 && num !== 0) {
//         console.log(`${num} is even`);
//     } else {
//         console.log(num);
//     }
// }
//
// let hello = "hello"
// for(let i = 0; i <= hello.length; i++) {
//     console.log(hello.charAt(i))
//     // console.log(hello[i])
// }
//
// for (let i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }

// var numberToStopAt = 5;
//
// for (let i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }
//
// for (let i = 0; i < 100; i += 5) {
//     console.log(i)
//     if(i === 50){
//         break
//     }
// }

//continue

// for (i = 1; i <= 5; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i)
// }

for(let i = 1; i < 100; i++) {
    if (i % 2 !== 0){
        continue;
    }
    console.log(`Here is a nice even number- ${i}`)
}