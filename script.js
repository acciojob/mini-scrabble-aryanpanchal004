const inputBox = document.getElementById("evaluatedText");
const countDisplay = document.getElementById("letterCount");

inputBox.addEventListener("input", () => {
  countDisplay.textContent = inputBox.value.length;
});


