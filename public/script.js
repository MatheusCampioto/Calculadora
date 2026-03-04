let displayValue = "0";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function press(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = "Erro";
  }
  updateDisplay();
}