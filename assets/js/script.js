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


function validateUsername() {

}

function runGame() {

}

function feedbackAnswer() {

}

function startCountdown() {

}