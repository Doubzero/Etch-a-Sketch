const container = document.getElementById("container");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-cell");
    gridElement.addEventListener("mouseover", colorChange);
    container.appendChild(gridElement);
  }
}

function colorChange(e) {
  if (e.type === "mouseover") {
    e.target.style.backgroundColor = "black";
  }
}
createGrid();
