// Code is my own unless indicated otherwise
// All comments and docstrings are my own

// Variables in the global space
const usernameField = document.getElementById("input-name");
const startButton = document.getElementById("lets-start");
const questionElement = document.getElementById("question-field"); // Taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
const answerButtons = document.getElementById("answer-buttons"); // Taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
const nextButton = document.getElementById("next-btn"); // Taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
const errorMessage = document.getElementById("error-message");
const closeError = document.getElementById("close-error");
const rulesButton = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal");
const closeModal = document.getElementById("close-modal");
const welcomeContainer = document.getElementById("container");
const homeButton = document.getElementById("home-button");
const timerField = document.getElementById("timer");

// Ensure home button is not displayed
homeButton.style.display = "none"; // This is MY code

let currentQuestionIndex = 0; // Taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
let score = 0; // Taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
let username = ""; // Taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s ??
let timer; // This is MY code

// Questions
// Inspiration from: https://github.com/anjalee-kulasinghe/portfolio-project2-quiz-saga/blob/main/assets/js/game.js and https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
// Questions are MY own
const questions = [
    { 
        question: "What is the Haldi ceremony?",
        answers: [
            { text: "Family members and friends playfully slather the bride and groom in a paste of turmeric (haldi), oil, and milk in order to prevent evil spirits from harming the to-be-wed couple", correct: true},
            { text: "The art or practice of applying temporary henna tattoos, especially as part of a bride or groom's preparations for a wedding", correct: false},
            { text: "The tradition of taking seven pheras (rounds) around the sacred fire is the most important part of a marriage ceremony, and with the completion of these steps and vows, a couple is taken as married", correct: false},
            { text: "A musical night celebrating the union of not only the couple but the bonding of both families. This celebration includes dances performed by relatives and friends of the Bride and Groom", correct: false},
            { text: "An Indian wedding tradition where the groom accompanied by his family and friends dance all the way to the bride's doorstep or wedding venue", correct: false},
        ]
    },
    {
        question: "What is the Baraat ceremony?",
        answers: [
            { text: "The art or practice of applying temporary henna tattoos, especially as part of a bride or groom's preparations for a wedding", correct: false},
            { text: "The tradition of taking seven pheras (rounds) around the sacred fire is the most important part of a marriage ceremony, and with the completion of these steps and vows, a couple is taken as married", correct: false},
            { text: "An Indian wedding tradition where the groom accompanied by his family and friends dance all the way to the bride's doorstep or wedding venue", correct: true},
            { text: "Family members and friends playfully slather the bride and groom in a paste of turmeric (haldi), oil, and milk in order to prevent evil spirits from harming the to-be-wed couple", correct: false},
            { text: "A musical night celebrating the union of not only the couple but the bonding of both families. This celebration includes dances performed by relatives and friends of the Bride and Groom", correct: false},
        ]
    },
    {
        question: "What is the Mehndi ceremony?",
        answers: [
            { text: "A musical night celebrating the union of not only the couple but the bonding of both families. This celebration includes dances performed by relatives and friends of the Bride and Groom", correct: false},
            { text: "An Indian wedding tradition where the groom accompanied by his family and friends dance all the way to the bride's doorstep or wedding venue", correct: false},
            { text: "Family members and friends playfully slather the bride and groom in a paste of turmeric (haldi), oil, and milk in order to prevent evil spirits from harming the to-be-wed couple", correct: false},
            { text: "The tradition of taking seven pheras (rounds) around the sacred fire is the most important part of a marriage ceremony, and with the completion of these steps and vows, a couple is taken as married", correct: false},
            { text: "The art or practice of applying temporary henna tattoos, especially as part of a bride or groom's preparations for a wedding", correct: true},
        ]
    },
    {
        question: "What is the Sangeet ceremony?",
        answers: [
            { text: "An Indian wedding tradition where the groom accompanied by his family and friends dance all the way to the bride's doorstep or wedding venue", correct: false},
            { text: "Family members and friends playfully slather the bride and groom in a paste of turmeric (haldi), oil, and milk in order to prevent evil spirits from harming the to-be-wed couple", correct: false},
            { text: "A musical night celebrating the union of not only the couple but the bonding of both families. This celebration includes dances performed by relatives and friends of the Bride and Groom", correct: true},
            { text: "The art or practice of applying temporary henna tattoos, especially as part of a bride or groom's preparations for a wedding", correct: false},
            { text: "The tradition of taking seven pheras (rounds) around the sacred fire is the most important part of a marriage ceremony, and with the completion of these steps and vows, a couple is taken as married", correct: false},
        ]
    },
    {
        question: "What is considered the most important part of a marriage ceremony?",
        answers: [
            { text: "The tradition of taking seven pheras (rounds) around the sacred fire is the most important part of a marriage ceremony, and with the completion of these steps and vows, a couple is taken as married", correct: true},
            { text: "A musical night celebrating the union of not only the couple but the bonding of both families. This celebration includes dances performed by relatives and friends of the Bride and Groom", correct: false},
            { text: "The art or practice of applying temporary henna tattoos, especially as part of a bride or groom's preparations for a wedding", correct: false},
            { text: "An Indian wedding tradition where the groom accompanied by his family and friends dance all the way to the bride's doorstep or wedding venue", correct: false},
            { text: "Family members and friends playfully slather the bride and groom in a paste of turmeric (haldi), oil, and milk in order to prevent evil spirits from harming the to-be-wed couple", correct: false},
        ]
    }
];

// Event Listeners

// Add event listener to Start Button; Inspiration from: https://github.com/raccodes09/ci-pp2-project/blob/main/assets/js/script.js
startButton.addEventListener("click", validateUsernameAndStart); 

// This is MY code
// Rules modal to display when "How to Play"-button is clicked
rulesButton.addEventListener("click", () => { 
    rulesModal.style.display = "block";
});

// This is MY code
// Rules modal to close when "X" is clicked
closeModal.addEventListener("click", () => { 
    rulesModal.style.display = "none";
});

// This is MY code
// Rules modal to close when anywhere outside the modal is clicked
window.addEventListener ("click", (event) => { 
    if (event.target === rulesModal) {
        rulesModal.style.display = "none";
    }
});

// This is MY code
// Error message to close when "X" is clicked
closeError.addEventListener("click", () => { 
    errorMessage.style.display = "none";
});

// This is MY code
// Error message to close when anywhere outside the error message is clicked
window.addEventListener ("click", (event) => { 
    if (event.target === errorMessage) {
        errorMessage.style.display = "none";
    }
});

// Adapted from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
/* 
If the next button is clicked and there are questions left which have not yet been shown, then question to display
If the next button has the content "Play again", upon clicking, the quiz is to start from the first question
If the next button is clicked but there are no questions left which have not yet been shown, the score to be shown
*/
nextButton.addEventListener("click", () => {
     if (currentQuestionIndex < questions.length -1) { // added "-1" as index starts at 0, so last index is length -1
        currentQuestionIndex++;
        showQuestion();
     } else if (nextButton.innerHTML === "Play again") { // this is my code
        startQuiz();
     } else {
        showScore();
    }
});

// This is MY code
// Go to home screen when home button is clicked
homeButton.addEventListener("click", () => {
    window.location.reload();
});


// Functions

// This is MY code
/**
 * Take username input and check whether it is correct.
 * If correct, call startQuiz() and hide welcomeContainer
 * If incorrect, display error message
 */
function validateUsernameAndStart() { // Validate that username is not blank and redirect to game page
    username = usernameField.value.trim(); // trim(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim?retiredLocale=de
    if (username !== "") {
        timerField.style.display = "block"; // Display timer as quickly as possible after username is validated
        startTimer(); // Start the timer before the quiz
        startQuiz(); // Start the quiz
        welcomeContainer.style.display = "none"; // Hide welcome text and mask
    } else {
        errorMessage.style.display = "block";
    }
}

// Taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
/**
 * Reset currentQuestionIndex and score to 0.
 * Show "Next" in next button.
 * Call showQuestion().
 */
function startQuiz() { 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    timerField.style.display = "block"; // Added this code to ensure timer is displayed when playing another round, ie not the first one
    showQuestion();
}

// This is MY code
/**
 * Resets the timer and starts a countdown of 30 seconds
 */
function startTimer() {
    let timeLeft = 30; // Timer display starts at 30 seconds

    clearInterval(timer); // Clears the timer

    timer = setInterval(() => { // setInterval function: https://www.w3schools.com/jsref/met_win_setinterval.asp
        if (timeLeft <= 0) {
            clearInterval(timer);
            onTimeOut();
        } else {
            timerField.innerHTML = `Time Left: ${timeLeft} seconds`; // displays timer
            timeLeft--; // increments timeLeft by 1 every 1 second
        }
    }, 1000);     
}

// This is MY code
/**
 * When time runs out and no answer was selected, buttons are disabled and correct answer is shown
 */
function onTimeOut() {
    timerField.innerHTML = `Time Over!`; // Display "Time Over!" when time has run out
    disableButtonsAndHighlightCorrect();
    showNextButton();
}

// Code from the tutorial was changed, and additional functions added, to make functions more atomic

// Partly taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
/**
 * Call resetState() and empty the screen of any previously displayed question.
 * Bring user up to beginning of screen by calling scrollToTop().
 * Take currentQuestion and questionNo and display a numbered question.
 * Call createAnswerButtons().
 */
function showQuestion() {
    resetState();
    scrollToTop(); // This is MY code

    // This is MY code
    if (currentQuestionIndex === 0) {
        welcomeContainer.style.display = "none"; // Hides the welcome container on the first question
    }

    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`; // Use string literals to display the question

    createAnswerButtons(currentQuestion.answers); // Pass the answer options of the current question into the newly created answer buttons

    startTimer(); // Start the timer, this is MY code
}

// This is MY code
/**
 * Bring user up to the top of the screen to see the displayed question immediately
 */
function scrollToTop() {
    window.scrollTo(0, 0); // Scroll to top of the window so that users on smaller screens see the question first
}

// This function was created by me based on the tutorial from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
/**
 * Creates buttons for each individual possible answer to a question and displays them on the screen
 * @param {Array} answers - the answers are displayed in an array and contain text and whether the answer is correct or false
 */
function createAnswerButtons(answers) {
    answers.forEach((answer) => {
        const button = createButton(answer.text, answer.correct); // passes the newly created button the answer text and information on whether it is the correct or false answer
        answerButtons.appendChild(button);
    });
}

// This function was created by me, inspiration from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
/**
 * Creates a button and sets the inside to a text containing a possible answer
 * Adds a class "btn" to the button
 * @param {string} text         - The answer which is displayed on the button
 * @param {boolean} isCorrect   - Whether this particular answer is correct or not
 * @returns {HTMLElement}       - The newly created button
 */
function createButton(text, isCorrect) {
    const button = document.createElement("button"); // creates a button element
    button.innerHTML = text; // sets the inside text of the button
    button.classList.add("btn"); // adds the class "btn" to the newly created button element
    if (isCorrect) {
        button.dataset.correct = isCorrect; // sets a data attribute as correct if the answer is correct
    }
    button.addEventListener("click", selectAnswer);
    return button;
}


// Taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s unless indicated otherwise
/**
 * Adds a class "correct" or "incorrect" to an answer-button
 * After selecting an answer, colors the selected answer red (incorrect) or green (correct)
 * Colors the correct answer green
 * Shows the Next button
 * @param {Event} event - The click event
 */
function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct"); // If the selected button contains the correct answer, the class "correct" is added to that button
        score++; // Increments score by 1 if the selected answer is correct
    } else {
        selectedBtn.classList.add("incorrect"); // If the selected button contains an incorrect answer, the class "incorrect" is added to that button
    }

    clearInterval(timer); // stop the timer, this is MY code

    disableButtonsAndHighlightCorrect(); // disables the buttons once an answer is selected, this is MY code
    showNextButton(); // shows the next button, this is MY code
}

// This code is taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s but the separate function is created by me to make the code more atomic and easier to use
/**
 * After selecting an answer, all buttons are disabled and colors indicate whether chosen answer was correct
 */
function disableButtonsAndHighlightCorrect() {
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // add class "correct" to the button with the correct answer
        }
        button.disabled = true; // disables all buttons
    });
}

// This function was created by me to create more atomic code
/**
 * Display the Next button
 */
function showNextButton() {
    nextButton.style.display = "block";
}

// This function is partly taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s
/**
 * Clear the UI from the previous question
 */
function resetState() { 
    nextButton.style.display = "none";
    answerButtons.innerHTML = ""; // Removes content from the previously created buttons; this is MY code
    homeButton.style.display = "none";
}

// This function was taken from: https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s but adaptations made by me
/**
 * Call resetState().
 * Show the score, display next button with inner HTML "Play again".
 * Display Home button.
 */
function showScore() {
    resetState();
    questionElement.innerHTML = `${username}, you scored ${score} out of ${questions.length}!`; // Added username to give a personal touch to the score
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
    homeButton.innerHTML = "Home"; // Sets inside of the home button to "home", this is my code
    homeButton.style.display = "block"; // Displays Home button, this is my code
    timerField.style.display = "none"; // Hide timer, this is my code
}
