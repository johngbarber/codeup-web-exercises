<!--    basic fetch-->
// let something = fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data)
//     })

//     callback functions and arrow functions clean up the code
// fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//     .then(response => {
//         if (!response.ok) {
//             console.log("unsuccessful")
//         }
//         return response.json()
//             .then(data => console.log(data))
//             .catch(error => console.log("Error" + error))
//             .finally(console.log("This will run no matter what."))
//     })
//     async behavior in acion

// fetch("https://pokeapi.co/api/v2/pokemon/rattata")
//     .then(response => {
//         return (response.json())
//     })
//     .then(data => {
//         console.log(data.weight)
//         console.log(data.height)
//     })
//     .catch(err => console.log(err))

// fetch("https://api.github.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data));

// function createPokemonElement(data){
//     const paragraph = document.createElement("p");
//     paragraph.innerHTML= data.name;
//     let container = document.querySelector(".container");
//     container.appendChild(paragraph)
//
//     //image
//     const image = document.createElement("img")
//     image.src= data.sprites.front_shiny;
//     container.appendChild(image)
// }
//
// let searchForm = document.querySelector('#searchform');
//
// searchForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let input = document.querySelector("#searchBar").value
//     fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
//         .then(response => response.json())
//         .then(data =>{
//             const paragraph = document.createElement("p");
//             paragraph.innerHTML= data.name;
//             let container = document.querySelector(".container");
//             container.appendChild(paragraph)
//
//             //image
//             const image = document.createElement("img")
//             image.src= data.sprites.front_shiny;
//             container.appendChild(image)
//
//         })
// })
// const ghOptions = {
//     method: "GET",
//     headers: {
//         "Authorization": "token " + GITHUB_API_KEY
//     }
// }
//
// fetch("https://api.github.com/users", ghOptions)
//     .then(res => res.json())
//     .then(data => console.log(data))
//
// function getUserLastCommit (userName){
//     return fetch(`https://api.github.com/users/${userName}/events/public`, ghOptions)
//         .then(response => response.json())
// }
//
// function userLastCommit()

function getLastCommitDate(username) {
    // GitHub API endpoint to get user's events
    const eventsEndpoint = `https://api.github.com/users/${username}/events`;

    // Fetch user's events
    return fetch(eventsEndpoint, {
        method: "GET",
        headers: {
            "Authorization": "token " + GITHUB_API_KEY
        }
    })
        .then(response => response.json())
        .then(events => {
            if (events.length === 0) {
                throw new Error('No events found for the user.');
            }

            // Find the latest push event, indicating a commit
            const pushEvent = events.find(event => event.type === "PushEvent");

            if (!pushEvent) {
                throw new Error('No push events (commits) found for the user.');
            }

            // Get the date of the last commit
            const lastCommitDate = new Date(pushEvent.created_at);
            return lastCommitDate;
        });
}

// Example usage
const username = 'johngbarber';
getLastCommitDate(username)
    .then(date => console.log(`The last commit was made on: ${date.toDateString()}`))
    .catch(error => console.error(`Error: ${error.message}`));
