function changeProfilePic() {
    document.querySelector("#profile-pic").src="https://www.whitehouse.gov/wp-content/uploads/2021/01/02_john_adams.jpg"
}

// window.setTimeout(changeProfilePic, 2000);

function changeProfileName(){
    document.querySelector("#profile-name").innerHTML="John Adams"
}

// window.setTimeout(changeProfileName, 4000);

function changeDescriptionFont(){
    document.querySelector("#profile-desc").classList.add("my-font")
}

// window.setTimeout(changeDescriptionFont, 6000);

function changeCardColor(){
    document.querySelector("#profile-card").classList.toggle("card-color");
}
//
// window.setTimeout(changeCardColor, 2000);
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleHighlight() {
    // const profileCard = document.getElementById('profile-card');
    // profileCard.classList.toggle('highlight');
    const profileCard = document.getElementById('profile-card');
    const randomColor = getRandomColor();
    profileCard.style.backgroundColor = randomColor;
}
let count=0
// setInterval(toggleHighlight, 2000);

function doEverything() {
    count++
    // do the timeouts
    if(count === 1) {
        changeProfilePic();
    } else if(count === 2) {
        changeProfileName();
    } else if(count === 3) {
        changeDescriptionFont();
    } else if(count === 6){
        const changeName = window.prompt("Please enter a new profile name.");
        document.querySelector("#profile-name").innerHTML = changeName;
    }
    toggleHighlight();
}

setInterval(doEverything,2000)