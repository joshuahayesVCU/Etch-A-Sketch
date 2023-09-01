
var container = document.querySelector(".etch-a-sketch");

const GRID_SIZE = 16;
var canvasSize = container.offsetHeight;
console.log(canvasSize);

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    var newDiv = document.createElement("div");

    newDiv.className = "sketch-item";
    newDiv.id = i;
    newDiv.style.backgroundColor = "white";

    var itemSize = canvasSize / GRID_SIZE;

    newDiv.style.width = `${itemSize}px`;
    newDiv.style.height = `${itemSize}px`;


    container.appendChild(newDiv);
}

// var sketchItem = document.querySelectorAll(".sketch-item");

// console.log(itemSize);
// sketchItem.style.width = "100px"

document.querySelector(".etch-a-sketch").addEventListener('mousedown', function(event) {

    const currentDiv = document.getElementById(event.target.id);

    if (currentDiv.style.backgroundColor !== "black" ) {
        currentDiv.style.backgroundColor = "black";
    }

    document.querySelector(".etch-a-sketch").addEventListener('mouseover', function(event) {
        const currentDiv = document.getElementById(event.target.id);

        if (currentDiv.style.backgroundColor !== "black" ) {
            currentDiv.style.backgroundColor = "black";
        }
    });
});






