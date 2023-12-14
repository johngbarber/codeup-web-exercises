function sumSequence(start, finish, step) {
    // Initialize a variable to store the sum
    let sum = 0;

    // Use a loop to iterate through the sequence
    for (let i = start; i <= finish; i += step) {
        sum += i;
    }

    // Return the calculated sum
    return sum;
}

// Example usage:
const start = 1;
const finish = 4;
const step = 1;
const result = sumSequence(start, finish, step);
console.log(`The sum of the sequence is: ${result}`);