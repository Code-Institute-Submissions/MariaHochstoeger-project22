// Variables in the global space
const usernameField = document.getElementById("input-name");
const startButton = document.getElementById("lets-start");
const questionElement = document.getElementById("question-field");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const rulesButton = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal");
const closeModal = document.getElementById("close-modal");

let currentQuestionIndex = 0;
let score = 0;

// Questions
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

// Event Listeners
startButton.addEventListener("click", validateUsernameAndStart); // Add event listener to Start Button; Inspiration from: https://github.com/raccodes09/ci-pp2-project/blob/main/assets/js/script.js
rulesButton.addEventListener("click", () => { // Modal to display when "How to Play"-button is clicked
    rulesModal.style.display = "block";
});
closeModal.addEventListener("click", () => { // Modal to close when "X" is clicked
    rulesModal.style.display = "none";
});
window.addEventListener ("click", (event) => { // Modal to close when anywhere outside the modal is clicked
    if (event.target === rulesModal) {
        rulesModal.style.display = "none";
    }
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length -1) { // do I understand correctly that the -1 is the "correct" thing to do but in this case wouldn't have an impact as the index will always be shorter as the index starts from 0?
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
})


// DOM to be loaded before starting game

document.addEventListener("DOMContentLoaded", function() {
    

});



// Validate that username is not blank and redirect to game page 
function validateUsernameAndStart() {
    // for trim: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim?retiredLocale=de
    if (usernameField.value.trim() != "") {
        window.location.href = "game.html";
    } else {
        alert("Please fill in a name!");
    }
};


// START OF QUIZ CODE

// startQuiz function to reset counts to 0 

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    // Display a numbered question
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // File the answer possibilities into the answerButtons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Remove previous answers / answer fields
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Add class correct/incorrect to answer buttons to apply styling and increment correct score 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    /* If selected answer was wrong, highlight the correct answer green by adding .correct class
    Disable other buttons after answer was chosen */
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    // Display Next button after question is answered
    nextButton.style.display = "block";
}

// Show the score, display next button and ask player to play again
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

/* If there are questions remaining, show next question
Otherwise show the score at the end of the game */
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};


startQuiz();
