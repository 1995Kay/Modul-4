let students = [];

function createStudent() {
  const firstNameValue = document.getElementById("firstName").value;
  const lastNameValue = document.getElementById("lastName").value;

  const ageValue = Number(document.getElementById("age").value);
  const classValue = Number(document.getElementById("schoolClass").value);

  const englishValue = Number(document.getElementById("english").value);
  const germanValue = Number(document.getElementById("german").value);
  const mathValue = Number(document.getElementById("math").value);

  const newStudent = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    age: ageValue,
    schoolClass: classValue,

    score: {
      english: englishValue,
      german: germanValue,
      math: mathValue,
    },
  };

  students.push(newStudent);

  console.log(firstNameValue + " wurde erfolgreich hinzugefügt!");
}

function showStudents() {
  console.log(students);
}
