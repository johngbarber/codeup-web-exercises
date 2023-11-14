function changeProfilePic() {
    document.querySelector("#profile-pic").src="https://www.whitehouse.gov/wp-content/uploads/2021/01/02_john_adams.jpg"
}

window.setTimeout(changeProfilePic, 2000);

function changeProfileName(){
    document.querySelector("#profile-name").innerHTML="John Adams"
}

window.setTimeout(changeProfileName, 4000);

function changeDescriptionFont(){
    document.querySelector("#profile-desc").classList.add("my-font")
}

window.setTimeout(changeDescriptionFont, 6000);

// function changeCardColor(){
//     document.querySelector("#profile-card").classList.toggle("card-color");
// }
//
// window.setTimeout(changeCardColor, 2000);

function toggleHighlight() {
    const profileCard = document.getElementById('profile-card');
    profileCard.classList.toggle('highlight');
}

setInterval(toggleHighlight, 2000);

function doEverything(){
    count++;
    if (count === 1) {
        changeProfilePic()
    } else if (count === 2){
        changeProfileName()
    } else if (count === 3){
        changeDescriptionFont()
    }
}

setInterval(doEverything,1000)