// script.js
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
// Listen for keydown events
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (key === "Escape") {
    currentInput = "";
  } else if (/[\d\+\-\*\/\.]/.test(key)) {
    currentInput += key;
  }

  display.value = currentInput;
});
