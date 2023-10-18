//while loop

let num=2;
while (num <= 65536) {
    console.log(num);
    num *= 2
}

//Use a do-while loop to simulate selling ice cream cones

// Generate a random number between 50 and 100 representing the initial amount of cones
let totalCones = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

console.log(`Initial number of cones to sell: ${totalCones}`);

// Use a do-while loop to simulate selling cones
do {
    // Generate a random number between 1 and 5 representing the amount of cones being bought
    let conesBought = Math.floor(Math.random() * 5) + 1;

    // Ensure that the number of cones to sell is not negative
    if (conesBought <= totalCones) {
        totalCones -= conesBought;
        console.log(`${conesBought} cones sold.`);
    } else {
        console.log(`I cannot sell you ${conesBought}, I only have ${totalCones}...`);
        break; // Exit the loop if there are not enough cones to sell
    }
} while (totalCones > 0);

console.log("Yay! All these damn cones are gone!");

