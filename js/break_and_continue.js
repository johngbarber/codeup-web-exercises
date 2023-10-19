while (true) {
    let userNumber = parseInt(prompt("Please enter an odd number between 1 and 50:"));

    if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
        console.log(`Number entered: ${userNumber}`);

        console.log("");

        for (let i = 1; i <= 50; i++) {
            if (i === userNumber) {
                console.log(`Yikes skipping number: ${userNumber}`)
                continue;
            }

            if (i % 2 !== 0) {
                console.log(`Here is an odd number: ${i}`);
            }
        }

        break;
    } else {
        alert("Invalid input. Please enter a valid odd number between 1 and 50.");
    }
}
