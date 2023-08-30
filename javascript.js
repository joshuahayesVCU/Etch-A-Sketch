var newDiv = document.createElement("div");

var container = document.querySelector(".etch-a-sketch");

const GRID_SIZE = 16.0;
const CANVAS_SIZE = 800.0;

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    var newDiv = document.createElement("div");

    newDiv.className = "sketch-item";
    newDiv.id = i;
    newDiv.style.backgroundColor = "white";

    newDiv.style.height = CANVAS_SIZE / GRID_SIZE
    newDiv.style.width = CANVAS_SIZE / GRID_SIZE

    container.appendChild(newDiv);
}

document.body.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('sketch-item')) {
        const currentDiv = document.getElementById(event.target.id);

        if (currentDiv.style.backgroundColor !== "black") {
            currentDiv.style.backgroundColor = "black";
        }
    }
});





