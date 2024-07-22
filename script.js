// script.js

// Quiz questions
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the color of the sky?",
        options: ["Blue", "Green", "Red", "Yellow"],
        answer: "Blue"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('option');
const submitButton = document.getElementById('submit');

let selectedOption = null;

function loadQuestion() {
    // Clear previous options
    optionsElement.innerHTML = '';

    // Load current question
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Load options
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.onclick = () => {
            selectedOption = option;
            clearSelection();
            button.classList.add('selected');
        };
        optionsElement.appendChild(button);
    });
}

function clearSelection() {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
}

function showFeedback() {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is " + currentQuestion.answer);
    }

    currentQuestionIndex++;
    selectedOption = null;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.textContent = `You scored ${score} out of ${quizData.length}!`;
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
}

submitButton.addEventListener('click', () => {
    if (selectedOption) {
        showFeedback();
    } else {
        alert("Please select an option!");
    }
});

// Initial load
loadQuestion();
