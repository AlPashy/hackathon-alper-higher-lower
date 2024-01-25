let score = 0;
let currentQuestion = 1;

function startGame() {
    document.getElementById('result').textContent = '';
    showQuestion(currentQuestion);
}

function showQuestion(questionNumber) {
    const currentQuestionElement = document.getElementById(`question${questionNumber}`);
    if (currentQuestionElement) {
        currentQuestionElement.style.display = 'block';
    }
}

function hideQuestion(questionNumber) {
    const currentQuestionElement = document.getElementById(`question${questionNumber}`);
    if (currentQuestionElement) {
        currentQuestionElement.style.display = 'none';
    }
}

function checkAnswer(answer) {
    hideQuestion(currentQuestion);
    if (answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion <= 2) {
        showQuestion(currentQuestion);
    } else {
        displayResult();
    }
}

function displayResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Dein Endergebnis: ${score} von 2 Fragen richtig beantwortet.`;
}