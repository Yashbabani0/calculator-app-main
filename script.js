document.addEventListener("DOMContentLoaded", function () {
  // Get all the theme toggle inputs
  const toggleInputs = document.querySelectorAll('input[name="theme"]');

  // Add event listeners to each toggle input
  toggleInputs.forEach((input) => {
    input.addEventListener("change", function () {
      // Remove any existing theme class from the body
      document.body.classList.remove("theme1", "theme2", "theme3");
      document.documentElement.classList.remove("theme1", "theme2", "theme3");

      // Add the selected theme class to the body and root
      document.body.classList.add(`theme${this.id.slice(-1)}`);
      document.documentElement.classList.add(`theme${this.id.slice(-1)}`);
    });
  });

  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("input[type=button]");
  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.value;

      if (value === "RESET") {
        currentInput = "";
        display.value = currentInput;
      } else if (value === "DEL") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (value === "=") {
        try {
          // Replace 'x' with '*' for multiplication and evaluate the expression
          const result = eval(currentInput.replace(/x/g, "*"));
          currentInput = result.toString();
          display.value = currentInput;
        } catch (error) {
          display.value = "Error";
          currentInput = "";
        }
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });
});
