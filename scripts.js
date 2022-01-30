const btnNr = document.querySelectorAll("[data-nr]");
const btnOp = document.querySelectorAll("[data-op]");
const btnEqual = document.querySelectorAll("[data-equals]");
const btnDel = document.querySelectorAll("[data-del]");
const btnAc = document.querySelectorAll("[data-ac]");
const txtPrevious = document.querySelectorAll("[data-previous]");
const txtCurrent = document.querySelectorAll("[data-current]");


btnNr.forEach(btn => {
  btn.addEventListener("click", () => {
    current = txtCurrent.innerText;
    neu = btn.innerText;
    txtCurrent.innerText = current + neu;
    console.log(current)
  })
})

btnOp.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Operand:" + btn.innerText)
  })
})

/*

function add() {
  console.log("add");
};

function subtract() {
  console.log("subtract");
};

function multiply() {
  console.log("multiply");
};

function divide() {
  console.log("divide");
};

function operate() {
  console.log("operate");
};

function back() {
  console.log("delete");
};

function clear() {
  console.log("clear");
};


function append(nr) {
  if (nr === "." && this.currentOperand.includes(".")) return
  this.currentOperand = this.currentOperand.toString() + nr.toString()
  }
};

*/