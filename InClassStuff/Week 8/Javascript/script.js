function update_name() {
  const name = prompt("Enter a new name!");
  button.textContent = `Player 1: ${name}`;
}
const button = document.querySelector("button");
button.addEventListener("click", update_name);
