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

let usernameField = document.getElementById("input-name");
let startButton = document.getElementById("lets-start");

/* Disable the Start button 
 credit: https://www.altcademy.com/blog/how-to-disable-a-button-in-javascript/ */

startButton.disabled = true;

// Add event listener for input event

function validateAndSubmit () {
    if (usernameField.value.trim() === "") {
        alert("Please fill out the player name");
    } else {
        startButton.disabled = false;
    }
}

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