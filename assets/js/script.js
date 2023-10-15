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
    closeModal.onclick = function() {
    rulesModal.style.display = "none";
    }

    // Modal to close when anywhere outside the modal is clicked
    window.onclick = function(event) {
        if (event.target == rulesModal) {
            rulesModal.style.display = "none";
        }
    }
});

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
};

// Question objects

const questions = [
    { 
        question: "What is the Haldi ceremony?",
        answers: [
            { text: "Kurkuma", correct: true},
            { text: "Garlic", correct: false},
            { text: "Rose", correct: false},
            { text: "Cumin", correct: false},
        ]
    },
    {
        question: "What is the Baraat ceremony?",
        answers: [
            { text: "Goat", correct: false},
            { text: "Sheep", correct: false},
            { text: "Horse", correct: true},
            { text: "Cow", correct: false},
        ]
    },
    {
        question: "What is the Mehndi ceremony?",
        answers: [
            { text: "Drink", correct: false},
            { text: "Dance", correct: false},
            { text: "Sing", correct: false},
            { text: "Henna", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question-field");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();
