
// Global variable decleration
var canvasSize = 16;
paintingEnabled = false;

function createCanvas(gridSize) {
    var container = document.querySelector(".etch-a-sketch");

    paintingEnabled = false;
    container.innerHTML = "";

    var canvasSize = container.offsetHeight;
    console.log(canvasSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        var newDiv = document.createElement("div");

        newDiv.className = "sketch-item";
        newDiv.id = i;
        newDiv.style.backgroundColor = "white";

        var itemSize = canvasSize / gridSize;

        newDiv.style.width = `${itemSize}px`;
        newDiv.style.height = `${itemSize}px`;


        container.appendChild(newDiv);
    }
}

function clearCanvas() {
    var container = document.querySelector(".etch-a-sketch");

    createCanvas(canvasSize);

}

function newGrid() {
    canvasSize = prompt("Please enter a number");

    while (canvasSize > 100 || canvasSize <= 0) {
        canvasSize = prompt("ERROR: please enter an integer between 1 and 100");
    }

    clearCanvas();
    createCanvas(canvasSize);
}

document.querySelector(".etch-a-sketch").addEventListener('mousedown', function(event) {
    paintingEnabled = true;

    const currentDiv = document.getElementById(event.target.id);

    if (currentDiv.style.backgroundColor !== "black" ) {
        currentDiv.style.backgroundColor = "black";
    }

    document.querySelector(".etch-a-sketch").addEventListener('mouseover', function(event) {
        const currentDiv = document.getElementById(event.target.id);

        if (currentDiv.style.backgroundColor !== "black" && paintingEnabled) {
            currentDiv.style.backgroundColor = "black";
        }
    });
});

document.querySelector(".etch-a-sketch").addEventListener('mouseup', function(event) {
    paintingEnabled = false;

});


// creating our first default canvas
createCanvas(canvasSize);
