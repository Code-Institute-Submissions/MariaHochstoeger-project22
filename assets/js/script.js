// Variables in the global space
const usernameField = document.getElementById("input-name");
const startButton = document.getElementById("lets-start");
const questionElement = document.getElementById("question-field");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const errorMessage = document.getElementById("error-message");
const closeError = document.getElementById("close-error");
const rulesButton = document.getElementById("rules-button");
const rulesModal = document.getElementById("rules-modal");
const closeModal = document.getElementById("close-modal");
const welcomeContainer = document.getElementById("container");
const homeButton = document.getElementById("home-button");

// Ensure home button is not displayed
homeButton.style.display = "none";

let currentQuestionIndex = 0;
let score = 0;
let username = "";

// Questions
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

// Rules modal to display when "How to Play"-button is clicked
rulesButton.addEventListener("click", () => { 
    rulesModal.style.display = "block";
});

// Rules modal to close when "X" is clicked
closeModal.addEventListener("click", () => { 
    rulesModal.style.display = "none";
});

// Rules modal to close when anywhere outside the modal is clicked
window.addEventListener ("click", (event) => { 
    if (event.target === rulesModal) {
        rulesModal.style.display = "none";
    }
});

// Error message to close when "X" is clicked
closeError.addEventListener("click", () => { 
    errorMessage.style.display = "none";
});

// Error message to close when anywhere outside the error message is clicked
window.addEventListener ("click", (event) => { 
    if (event.target === errorMessage) {
        errorMessage.style.display = "none";
    }
});

/* 
If the next button is clicked and there are questions left which have not yet been shown, then question to display
If the next button has the content "Play again", upon clicking, the quiz is to start from the first question
If the next button is clicked but there are no questions left which have not yet been shown, the score to be shown
*/
nextButton.addEventListener("click", () => {
     if (currentQuestionIndex < questions.length -1) {
        currentQuestionIndex++;
        showQuestion();
     } else if (nextButton.innerHTML === "Play again") {
        startQuiz();
     } else {
        showScore();
    }
});

// Go to home screen when home button is clicked
homeButton.addEventListener("click", () => {
    window.location.reload();
});



// Functions

/**
 * Take username input and check whether it is correct.
 * If correct, call startQuiz() and hide welcomeContainer
 * If incorrect, display error message
 */
function validateUsernameAndStart() { // Validate that username is not blank and redirect to game page;for trim: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim?retiredLocale=de
    username = usernameField.value.trim();
    if (username !== "") {
        startQuiz();
        welcomeContainer.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
}

/**
 * Reset currentQuestionIndex and score to 0.
 * Show "Next" in next button.
 * Call showQuestion().
 */
function startQuiz() { 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

/**
 * Call resetState() and bring user up to beginning of screen.
 * Take currentQuestion and questionNo and display a numbered question.
 * Take currentQuestion.answers and create individual answer buttons for each possible answer. Add class "btn" to each button.
 * Add event listener to each newly created button and upon clicking, call selectAnswer()
 */
function showQuestion() {
    resetState();

    // Make sure the question is visible for smaller screens; otherwise, the screen shows from the bottom
    window.scrollTo(0, 0); 

    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => { 
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

/**
 * Hide next button
 * Remove all previously displayed answer possibilities
 * Hide home button
 */
function resetState() { 
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    homeButton.style.display = "none";
}

/**
* Add class correct/incorrect to answer buttons to apply styling and increment correct score.
* Take answerButtons.children and create array out of answer buttons.
* If selected answer was wrong, highlight the correct answer green by adding .correct class. Disable other buttons after answer was chosen.
* Display next button.
*/
function selectAnswer(e){ 
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Help from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from?retiredLocale=de
    Array.from(answerButtons.children).forEach((button) => { 
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";  // Display Next button after question is answered
}

/**
 * Call resetState().
 * Show the score, display next button with inner HTML "Play again".
 * Display Home button.
 */
function showScore() {
    resetState();
    questionElement.innerHTML = `${username}, you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
    homeButton.innerHTML = "Home";
    homeButton.style.display = "block";
}
