const btnNr = document.querySelectorAll("[data-nr]");
const btnOp = document.querySelectorAll("[data-op]");
const btnEqual = document.querySelectorAll("[data-equals]");
const btnDel = document.getElementById("btn-del");
const btnAc = document.getElementById("btn-ac");
const txtPrevious = document.getElementById("eingabe2");
const txtCurrent = document.getElementById("eingabe1");

let current = "";
let neu = "";
let operand = "";
let dotAllowed = true;

// Zahleneingabe - Limitiert auf 16 Zahlen
btnNr.forEach(btn => {
  btn.addEventListener("click", () => {
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
    } else {
      switch (operand) {
        case ':':
          console.log(" : Rechnen");
          break;
        case "*":
          console.log(" * Rechnen");
          break;
        case "-":
          console.log(" - Rechnen");
          break;
        case "+":
          console.log(" + Rechnen");
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
