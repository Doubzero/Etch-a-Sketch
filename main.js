const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

const container = document.getElementById("gridlayout");
const eraseButton = document.getElementById("resetBtn");
const changeSizeButton = document.getElementById("selectsizebtn");
const colorButton = document.getElementById("colormode");

eraseButton.onclick = () => reloadGrid();
changeSizeButton.onclick = () => changeSize();

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}), 1fr`;
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-cell");
    gridElement.addEventListener("mouseover", colorChange);
    gridElement.addEventListener("mousedown", colorChange);
    container.appendChild(gridElement);
  }
}

function setCurrentMode(newMode) {
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function changeSize() {
  const size = prompt("Change size (max 100)");
  if (size > 100) {
    alert("cannot be greater than 100. Setting Default size of 16");
    reloadGrid();
  } else {
    setCurrentSize(size);
    reloadGrid();
  }
}

function colorChange(e) {
  if (e.type === "mouseover") {
    e.target.style.backgroundColor = "black";
  }
}

function reloadGrid() {
  eraseGrid();
  createGrid(currentSize);
}

function eraseGrid() {
  container.innerHTML = "";
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
};
