import {randomGreeting} from "./greeting-logic.js";

function giveGreeting() {
    document.querySelector("#greet-button").addEventListener("click", greetUser);

}

function greetUser() {
    const userName = document.querySelector("#greet-name").value;

    const greeting = randomGreeting() + " " + userName;

    document.querySelector("#greeting").innerText = greeting;

}

giveGreeting();