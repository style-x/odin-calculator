const btnNr = document.querySelectorAll("[data-nr]");
const btnOp = document.querySelectorAll("[data-op]");
const equal = document.getElementById("equals");
const btnDel = document.getElementById("btn-del");
const btnAc = document.getElementById("btn-ac");
const txtPrevious = document.getElementById("eingabe2");
const txtCurrent = document.getElementById("eingabe1");
const op = document.getElementById("operator");

let current = "";
let neu = "";
let operand = "";
let dotAllowed = true;
let sum;

// Zahleneingabe - Limitiert auf 16 Zahlen
btnNr.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText == ".") {
      console.log("Funktion des Punktes ist in Bearbeitung...");
      return;
    }
    if (current.length < 16 || current == "") {
      current = txtCurrent.innerText;
      neu = btn.innerText;
      txtCurrent.innerText = current + neu;
    } else {
      console.log("Error: Zahl zu lang (Limit: 16)");
    }
  })
});

// Die Operatoren [:] [*] [-] [+]
btnOp.forEach(btn => {
  btn.addEventListener("click", () => {
    if (operand == "") {
      operand = btn.innerText;
      current = txtCurrent.innerText;
      txtPrevious.innerText = current;
      current = "";
      txtCurrent.innerText = current;
      op.innerText = operand;
    } else {
      switch (btn.innerText) {
        case ':':
          rechnen();
          operand = ":";
          rechnen2();
          break;
        case "*":
          rechnen();
          operand = "*";
          rechnen2();
          break;
        case "-":
          rechnen();
          operand = "-";
          rechnen2();
          break;
        case "+":
          rechnen();
          operand = "+";
          rechnen2();
          break;
        default:
          console.log("Error: Operand nicht erkannt");
      }
    }
    
  })
});

// Der Button [AC]
btnAc.addEventListener("click", () => {
  current = "";
  neu = "";
  operand = "";
  txtCurrent.innerText = "";
  txtPrevious.innerText = "";
  op.innerText = "";
});

// Der Button [DEL]
btnDel.addEventListener("click", () => {
  if (current.length > 0) {
    current = txtCurrent.innerText;
    current = current.slice(0, -1);
    txtCurrent.innerText = current;
  } else {
    console.log("Nichts zu löschen da..");
  }
});

// Der Button [=] equal
equal.addEventListener("click", () => {
  rechnen();
  if (sum) {
    current = "";
    neu = "";
    operand = "";
    txtCurrent.innerText = sum;
    txtPrevious.innerText = "";
    op.innerText = "";
  }
});

function rechnen() {
  let eins = txtPrevious.innerText;
  let zwei = txtCurrent.innerText;
  sum = (operand == ":") ? (eins / zwei) :
        (operand == "*") ? (eins * zwei) :
        (operand == "-") ? (eins - zwei) :
        (operand == "+") ? (Number(eins) + Number(zwei)) :
        console.log("error bei rechnen..=!");
}

function rechnen2() {
  if (sum) {
    current = "";
    neu = "";
    txtCurrent.innerText = "";
    txtPrevious.innerText = sum;
    op.innerText = operand;
  }
}