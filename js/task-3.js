const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", () => {
  const uName = inputName.value.trim();
  outputName.textContent = uName || "Anonymous";
});