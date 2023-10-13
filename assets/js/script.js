// DOM to be loaded before starting game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
})

// Modal to display when "How to Play"-button is clicked

let rulesButton = document.getElementById("rules-button");
let rulesModal = document.getElementById("rules-modal");

rulesButton.onclick = function() {
    rulesModal.style.display = "block";
}

// Modal to close when "X" is clicked

let closeModal = document.getElementById("close-modal")

closeModal.onclick = function () {
    rulesModal.style.display = "none";
}

// Modal to close when anywhere outside the modal is clicked

window.onclick = function(event) {
    if (event.target == rulesModal) {
        rulesModal.style.display = "none";
    }
}

// Remove white spaces and validate username

const usernameField = document.getElementById("input-name");
const startButton = document.getElementById("lets-start");

/* Disable the Start button 
 credit: https://www.altcademy.com/blog/how-to-disable-a-button-in-javascript/ */

/*startButton.disabled = true;*/

// Add event listener to Start Button
startButton.addEventListener("click", validateUsernameAndStart);

function validateUsernameAndStart() {
    // for trim: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim?retiredLocale=de
    if (usernameField.value.trim() != "") {
        window.location.href = "game.html";
    } else {
        alert("Please fill in a name!");
    }
}

// Function to validate username and enable submit button






/* Let username = document.getElementById("input-name").value;*/

/*usernameField.onclick = function() {
    if (username.trim == "") {
        alert("Please fill out the player name");
    } else {
        window.location.href = "game.html";
    }
}*/

/*function validateUsername() {
    if (usernameField.value.trim === "") {
        alert("Please fill out the player name");
    } else {

    }

}*/

function runGame() {

}

function feedbackAnswer() {

}

function startCountdown() {

}