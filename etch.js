const container = document.querySelector(".container");
const newGridButton = document.getElementById("newGridButton");

function createGrid(gridSize) {
    
    container.innerHTML = '';
    
    const containerSize = container.clientWidth;
    const boxSize = containerSize / gridSize;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
        
        container.appendChild(box);
    }
}


newGridButton.addEventListener("click", () => {
    let gridSize = prompt("Enter the number of squares per side for the new grid (maximum 100):");
    gridSize = parseInt(gridSize);
    
    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

createGrid(16);
