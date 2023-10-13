// Variables in the global space

const usernameField = document.getElementById("input-name");
const startButton = document.getElementById("lets-start");

// DOM to be loaded before starting game

document.addEventListener("DOMContentLoaded", function() {
    let rulesButton = document.getElementById("rules-button");
    let rulesModal = document.getElementById("rules-modal");

    // Modal to display when "How to Play"-button is clicked
    rulesButton.onclick = function() {
        rulesModal.style.display = "block";
    }

    let closeModal = document.getElementById("close-modal")

    // Modal to close when "X" is clicked
    closeModal.onclick = function () {
    rulesModal.style.display = "none";
    }

    // Modal to close when anywhere outside the modal is clicked
    window.onclick = function(event) {
        if (event.target == rulesModal) {
            rulesModal.style.display = "none";
        }
    }
})

// Add event listener to Start Button
// Inspiration from: https://github.com/raccodes09/ci-pp2-project/blob/main/assets/js/script.js
startButton.addEventListener("click", validateUsernameAndStart);

// Validate that username is not blank and redirect to game page 
function validateUsernameAndStart() {
    // for trim: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim?retiredLocale=de
    if (usernameField.value.trim() != "") {
        window.location.href = "game.html";
    } else {
        alert("Please fill in a name!");
    }
}



let availableTime = 30;
let countdownField = document.getElementById("countdown");
let timer = setInterval(startCountdown, 1000);

function startCountdown() {
    if (availableTime === 0) {
        clearInterval(timer);
    } else {
        countdownField.innerHTML = availableTime + " seconds left";
        availableTime--;
    }
}

startCountdown();

function runGame() {

}

function feedbackAnswer() {

}
