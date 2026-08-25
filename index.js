let students = [];

function createStudent() {
  // 1. Alle Werte aus den HTML-Inputs auslesen
  const firstNameValue = document.getElementById("firstName").value;
  const lastNameValue = document.getElementById("lastName").value;

  // Wichtig: Zahlen immer mit Number() umwandeln!
  const ageValue = Number(document.getElementById("age").value);
  const classValue = Number(document.getElementById("schoolClass").value);

  const englishValue = Number(document.getElementById("english").value);
  const germanValue = Number(document.getElementById("german").value);
  const mathValue = Number(document.getElementById("math").value);

  // 2. Das komplexe Schüler-Objekt zusammenbauen
  const newStudent = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    age: ageValue,
    schoolClass: classValue,
    // Hier schachteln wir ein Objekt IN ein Objekt (für die Noten)
    score: {
      english: englishValue,
      german: germanValue,
      math: mathValue,
    },
  };

  // 3. Das fertige Objekt in unser Array schieben
  students.push(newStudent);

  // Kleines Feedback für dich als Entwickler
  console.log(firstNameValue + " wurde erfolgreich hinzugefügt!");
}

function showStudents() {
  // Gibt das gesamte Array mit allen Schülern in der Konsole aus
  console.log(students);
}
