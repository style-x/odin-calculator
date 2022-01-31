const btnNr = document.querySelectorAll("[data-nr]");
const btnOp = document.querySelectorAll("[data-op]");
const btnEqual = document.querySelectorAll("[data-equals]");
const btnDel = document.querySelectorAll("[data-del]");
const btnAc = document.getElementById("btn-ac");
const txtPrevious = document.getElementById("eingabe2");
const txtCurrent = document.getElementById("eingabe1");

let current = "";
let neu;
let operand = "";
let dotAllowed = true;

// Zahleneingabe - Limitiert auf 16 Zahlen
btnNr.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current.length < 16 || current == "") {
      current = txtCurrent.innerText;
    neu = btn.innerText;
    update();
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
      console.log(`Operand ${operand} gesetzt`);
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

// Der Button [DEL]
btnAc.addEventListener("click", () => {
  current = "";
  neu = "";
  operand = "";
  txtCurrent.innerText = "";
  txtPrevious.innerText = "";
});

function update() {
  txtCurrent.innerText = current + neu;
};

