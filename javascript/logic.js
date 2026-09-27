const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");

const display = document.getElementById("display");

let counter = 0;

// display.textContent = counter;

function render() {
  display.textContent = counter;
}

function add() {
  counter++;
  render();
}

function sub() {
  counter--;
  render();
}
function clear() {
  counter = 0;
  //   display.textContent = counter;
  render();
}

increment.addEventListener("click", add);
decrement.addEventListener("click", sub);
reset.addEventListener("click", clear);
