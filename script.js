const container = document.querySelector("#container");
const divRows = [];

//creates 16 divs intended to act as rows, appends to container
for (let i = 0; i < 16; i++) { 
    divRows[i] = document.createElement("div");
    divRows[i].classList.add("divRow");
    container.appendChild(divRows[i]);
}

//creates 16 boxes for each row, appends to each row
for (let i = 0; i < 16; i++) {
    const divRowList = document.querySelectorAll(".divRow");
    const divBox = document.createElement("div");
    divBox.classList.add("divBox");
    for (j = 0; j < divRowList.length; j++) {
    divRowList[j].appendChild(divBox.cloneNode(true)); //cloneNode is needed to ensure 16 divs are appended to every row
    }
}// grid has now been created


//sketch functionality, box changes to blue when mouse hovers over
const divBoxList = document.querySelectorAll(".divBox"); 
for (let i = 0; i < divBoxList.length; i++) {
divBoxList[i].addEventListener("mouseover", () => {
    divBoxList[i].style.cssText = `background-color: rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    
});
}

function randomNumber() {
    console.log(Math.floor(Math.random()*255));
   return Math.floor(Math.random()*255);
}
