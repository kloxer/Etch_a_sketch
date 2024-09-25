const body = document.querySelector("body");


function createContainer()
{
    const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);
}
function createGrid(gridSize)
{
    body.removeChild(document.querySelector(".container"));
    createContainer();
    const container = document.querySelector(".container");
    gridSize = parseInt(prompt("Enter a size:"));
    while (gridSize > 100){
        gridSize = parseInt(prompt("Enter a size < 100:"));
    }
    console.lo
    const size = 550;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement("div");
        box.classList.add("block")
        width = size / gridSize;
        height = size / gridSize;
        box.style.width = width.toString() + "px" ;

        box.style.height = height.toString() + "px";
        console.log(height)
        container.appendChild(box);

        box.addEventListener("mouseover", () =>{
            box.style.backgroundColor = 'black';
        });
        
    }
}

createGrid();
//Clear the div
const button = document.querySelector("button");
button.addEventListener("click", ()=>
{
    createGrid();
})