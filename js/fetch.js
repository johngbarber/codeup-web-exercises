

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
