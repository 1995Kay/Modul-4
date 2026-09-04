const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      { id: "a", text: "München", correct: false },
      { id: "b", text: "Berlin", correct: true },
      { id: "c", text: "Hamburg", correct: false },
      { id: "d", text: "Hannover", correct: false },
    ],
  },
  {
    id: 2,
    question: "Was ist die Hauptstadt von Frankreich?",
    answers: [
      { id: "a", text: "Rom", correct: false },
      { id: "b", text: "Madrid", correct: false },
      { id: "c", text: "Paris", correct: true },
      { id: "d", text: "Wien", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  document.getElementById("question-text").innerText = currentQuestion.question;

  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    button.id = `btn-${answer.id}`;

    button.onclick = () => checkAnswer(button.id, answer.correct);

    answersContainer.appendChild(button);
  });
}

function checkAnswer(buttonId, isCorrect) {
  if (isCorrect) {
    document.getElementById(buttonId).classList.add("correct");
    alert("Richtig! Super gemacht.");
  } else {
    document.getElementById(buttonId).classList.add("wrong");
    alert("Leider falsch!");
  }
}

function showSolution() {
  const currentQuestion = questions[currentQuestionIndex];
  currentQuestion.answers.forEach((answer) => {
    if (answer.correct) {
      document.getElementById(`btn-${answer.id}`).classList.add("correct");
    }
  });
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    alert("Du hast alle Fragen beantwortet!");
    currentQuestionIndex = 0;
    renderQuestion();
  }
}

renderQuestion();
