//hello
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");

//color prompt and respon
let color = prompt("What is your favorite color?");
alert(`Great, ${color} is my favorite color too!`);

//movie rental total
alert("You have rented some movies for your kids, 'The Little Mermaid', 'Brother Bear'. and 'Hercules.' Please tell me how many days you would like to rent each movie for in order to calculate your total.");
let mermaid= parseInt(prompt("How many days for 'The little Mermaid?'"));
let bear =parseInt(prompt("How many days for 'Brother Bear?'"));
let hercules =parseInt(prompt("'Hercules?'"));
let total = (mermaid+bear+hercules) * 3;
alert(`Your total is $${total}`);

//contract payment total
alert("You have been working as a contactor for Google, Amazon, and Facebook. Google pays $400/hr, Amazon $380, and Facebook $350. How many hours have you worked for each?");
let google = parseInt(prompt("How many hours for Google?"));
let amazon = parseInt(prompt("How many hours for Amazon?"));
let facebook = parseInt(prompt("How many hours for Facebook?"));
let pay = (google * 400) + (amazon * 380) + (facebook * 350);
alert(`You have made $${pay}`);
