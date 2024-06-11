document.addEventListener("DOMContentLoaded", () => {
  const toggle1 = document.getElementById("toggle1");
  const toggle2 = document.getElementById("toggle2");
  const toggle3 = document.getElementById("toggle3");
  const body = document.body;

  toggle1.addEventListener("click", function () {
    body.classList.remove("theme2", "theme3");
  });

  toggle2.addEventListener("click", function () {
    body.classList.add("theme2");
    body.classList.remove("theme3");
  });

  toggle3.addEventListener("click", function () {
    body.classList.add("theme3");
    body.classList.remove("theme2");
  });

  const display = document.getElementById("display");
  const buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "DEL") {
        display.value = display.value.slice(0, -1);
      } else if (button.value === "RESET") {
        display.value = "";
      } else if (button.value === "=") {
        try {
          display.value = eval(display.value.replace("x", "*"));
        } catch {
          display.value = "Error";
        }
      } else {
        display.value += button.value;
      }
    });
  });
  const display = document.getElementById("display");
  let currentInput = "";
  let firstOperand = "";
  let secondOperand = "";
  let operator = "";
  let result = null;

  const buttons = document.querySelectorAll("input[type='button']");
  buttons.forEach((button) => {
    button.addEventListener("click", () => handleInput(button.value));
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key.match(/[0-9]/) || key === ".") handleInput(key);
    if (key === "+" || key === "-" || key === "*" || key === "/")
      handleInput(key);
    if (key === "Enter" || key === "=") handleInput("=");
    if (key === "Delete") handleInput("DEL"); // Handle Delete key
    if (key === "Escape") handleInput("RESET");
  });

  function handleInput(value) {
    if (value === "RESET") {
      resetCalculator();
    } else if (value === "DEL") {
      deleteLastInput();
    } else if (value === "=") {
      calculateResult();
    } else if (["+", "-", "x", "/", "*"].includes(value)) {
      handleOperator(value.replace("*", "x"));
    } else {
      handleNumber(value);
    }
  }

  function handleNumber(value) {
    if (operator) {
      secondOperand += value;
    } else {
      firstOperand += value;
    }
    currentInput += value;
    updateDisplay(currentInput);
  }

  function handleOperator(value) {
    if (firstOperand && secondOperand && operator) {
      calculateResult();
      operator = value;
      currentInput = result + operator;
    } else {
      operator = value;
      currentInput += value;
    }
    updateDisplay(currentInput);
  }

  function calculateResult() {
    if (firstOperand && secondOperand && operator) {
      switch (operator) {
        case "+":
          result = parseFloat(firstOperand) + parseFloat(secondOperand);
          break;
        case "-":
          result = parseFloat(firstOperand) - parseFloat(secondOperand);
          break;
        case "x":
          result = parseFloat(firstOperand) * parseFloat(secondOperand);
          break;
        case "/":
          result = parseFloat(firstOperand) / parseFloat(secondOperand);
          break;
      }
      updateDisplay(result);
      firstOperand = result;
      secondOperand = "";
      operator = "";
      currentInput = result;
    }
  }

  function resetCalculator() {
    currentInput = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    result = null;
    updateDisplay("0");
  }

  function deleteLastInput() {
    if (currentInput !== "") {
      currentInput = currentInput.slice(0, -1);
      if (operator) {
        if (secondOperand) {
          secondOperand = secondOperand.slice(0, -1);
        } else {
          operator = "";
        }
      } else {
        firstOperand = firstOperand.slice(0, -1);
      }
      updateDisplay(currentInput || "0");
    }
  }

  function updateDisplay(value) {
    display.value = value;
  }
});
