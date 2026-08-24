let liste = [5, 9, 8, 3];

function add() {
  const value = Number(document.getElementById("content").value);
  liste.push(value);
}
function printAll() {
  console.log(liste);
  liste.forEach((element) => {
    console.log(element);
  });
}
function deleteByPosition() {
  const Position = Number(document.getElementById("deletePosition").value);
  if (Position < liste.length) {
    liste.splice(Position, 1);
  } else {
    console.log(value);
  }
}
function deleteByContent() {
  const content = Number(document.getElementById("deleteContent").value);
  const newListe = liste.filter((element) => {
    return element !== content;
  });
  console.log(newListe);
}
function multiply() {
  const newListe = liste.map((element) => {
    return element * 2;
  });
  liste = newListe;
}

function sum() {
  const sum = liste.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  console.log(sum);
}
