const container = document.querySelector("#container");
const divRows = [];

let numberOfBoxes = 16;
let boxHeight = 640/16;
let boxWidth = 640/16;

function grid() {

//creates 16 divs intended to act as rows, appends to container
for (let i = 0; i < numberOfBoxes; i++) { 
    divRows[i] = document.createElement("div");
    divRows[i].classList.add("divRow");
    container.appendChild(divRows[i]);
}

//creates 16 boxes for each row, appends 16 boxes to each row
for (let i = 0; i < numberOfBoxes; i++) {
    const divRowList = document.querySelectorAll(".divRow");
    const divBox = document.createElement("div");
    divBox.classList.add("divBox");
    divBox.style.cssText = `height: ${boxHeight}px; width: ${boxWidth}px; border: 1px solid black;`;
    for (j = 0; j < divRowList.length; j++) {
    divRowList[j].appendChild(divBox.cloneNode(true)); //cloneNode is needed to ensure 16 divs are appended to every row
    }
}// grid has now been created

//sketch functionality, box color changes to random when mouse hovers over
const divBoxList = document.querySelectorAll(".divBox"); 
for (let i = 0; i < divBoxList.length; i++) {
    divBoxList[i].addEventListener("mouseover", () => {
    divBoxList[i].style.cssText = `background-color: rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}); 
    height: ${boxHeight}px; width: ${boxWidth}px; border: 1px solid black;`;
    
});
}
}
grid(); // run grid creation function

function randomNumber() {
    console.log(Math.floor(Math.random()*256)); //random number between 0 and 255
    return Math.floor(Math.random()*256);
}

function gridPrompt() {
   return prompt("How many squares per side? Max 100.");
    };

const btn = document.querySelector("#resetButton");

btn.addEventListener("click", () => { //when button is clicked, prompt user to change number of squares, grid then resets
    resetGrid(gridPrompt())
});

let resetGrid = function(num) { //grid reset function
    if (num === null){ //if user cancels or doesn't enter a number, don't reset
        return;
    }
    else if (parseInt(num) > 100) {
        alert("Cannot be higher than 100.");
        return;
    }

    const removeDivs = document.querySelectorAll(".divRow");

    for (let i = 0; i < removeDivs.length; i ++) {
    container.removeChild(removeDivs[i]);
    }

    if (parseInt(num) <= 100) { //old squares are removed, new squares are created
        numberOfBoxes = parseInt(num);
        boxHeight = 640/numberOfBoxes;
        boxWidth = 640/numberOfBoxes;
        console.log(numberOfBoxes);
        grid();
    }
    
}
