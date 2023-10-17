// Variables in the global space
const usernameField = document.getElementById("input-name");
const startButton = document.getElementById("lets-start");
const questionElement = document.getElementById("question-field");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const rulesButton = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal");
const closeModal = document.getElementById("close-modal");
const welcomeContainer = document.getElementsByClassName("container"); // does it work?

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
    if (currentQuestionIndex < questions.length -1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
});

// Functions
function validateUsernameAndStart() { // Validate that username is not blank and redirect to game page;for trim: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim?retiredLocale=de
    const username = usernameField.value.trim();
    if (username !== "") {
        startQuiz();
    } else {
        alert("Please fill in a name!");
    }
}

function startQuiz() { // startQuiz function to reset counts to 0 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display a numbered question

    currentQuestion.answers.forEach((answer) => { // File the answer possibilities into the answerButtons
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() { // Remove previous answers / answer fields
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){ // Add class correct/incorrect to answer buttons to apply styling and increment correct score 
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {  // If selected answer was wrong, highlight the correct answer green by adding .correct class,  Disable other buttons after answer was chosen; help: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from?retiredLocale=de
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";  // Display Next button after question is answered
}

function showScore() { // Show the score, display next button and ask player to play again
    resetState();
    let username1 = usernameField.value.trim();
    questionElement.innerHTML = `${username1}, You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}
