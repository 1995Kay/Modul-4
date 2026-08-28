// 1. Die Datenstruktur (Array mit Objekten aus deinem Video)
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

// 2. Status-Variable: Speichert, bei der wievielten Frage wir gerade sind (Start bei 0)
let currentQuestionIndex = 0;

// 3. Funktion zum Bauen der aktuellen Frage
function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Titel aktualisieren
  document.getElementById("question-text").innerText = currentQuestion.question;

  // Alten Inhalt aus dem Antworten-Container löschen
  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";

  // Für jede Antwortmöglichkeit einen neuen Button generieren
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    button.id = `btn-${answer.id}`;

    // Gibt direkt den Wahrheitswert (true/false) an die Check-Funktion weiter
    button.onclick = () => checkAnswer(button.id, answer.correct);

    answersContainer.appendChild(button);
  });
}

// 4. Antwort überprüfen
function checkAnswer(buttonId, isCorrect) {
  if (isCorrect) {
    document.getElementById(buttonId).classList.add("correct");
  } else {
    document.getElementById(buttonId).classList.add("wrong");
  }
}

// 5. Lösung anzeigen (Sucht die Antwort mit correct: true)
function showSolution() {
  const currentQuestion = questions[currentQuestionIndex];
  currentQuestion.answers.forEach((answer) => {
    if (answer.correct) {
      document.getElementById(`btn-${answer.id}`).classList.add("correct");
    }
  });
}

// 6. Zur nächsten Frage wechseln
function nextQuestion() {
  currentQuestionIndex++; // Index um 1 erhöhen

  if (currentQuestionIndex < questions.length) {
    renderQuestion(); // Nächste Frage bauen
  } else {
    alert("Du hast alle Fragen beantwortet!");
    currentQuestionIndex = 0; // Quiz neustarten
    renderQuestion();
  }
}

// 7. Startschuss: Die erste Frage beim Laden der Seite direkt anzeigen
renderQuestion();
