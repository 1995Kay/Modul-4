function checkAnswer(city) {
  // Die IDs erlauben uns den direkten Zugriff auf den jeweiligen Button
  if (city === "berlin") {
    document.getElementById("btn-berlin").classList.add("correct");
  } else {
    // Dynamisch den geklickten falschen Button rot färben
    document.getElementById(`btn-${city}`).classList.add("wrong");
  }
}

function showSolution() {
  // Erzwingt die grüne Farbe bei der korrekten Antwort
  document.getElementById("btn-berlin").classList.add("correct");
}
