const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "defaultmode";
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

const container = document.getElementById("gridlayout");
const eraseButton = document.getElementById("resetBtn");
const changeSizeButton = document.getElementById("selectsizebtn");
const randomColorButton = document.getElementById("randomColorModeBtn");
const regularMode = document.getElementById("defaultModeBtn");

eraseButton.onclick = () => reloadGrid();
changeSizeButton.onclick = () => changeSize();
randomColorButton.onclick = () => setCurrentMode("rainbow");
regularMode.onclick = () => setCurrentMode("defaultmode");

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}), 1fr`;
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-cell");
    gridElement.addEventListener("click", colorChange);
    gridElement.addEventListener("mouseover", colorChange);
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
//
mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function colorChange(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "rainbow") {
    let redRandom = Math.floor(Math.random() * 256);
    let blueRandom = Math.floor(Math.random() * 256);
    let greenRandom = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
  } else if (currentMode === "defaultmode") {
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
