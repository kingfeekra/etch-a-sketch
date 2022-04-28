const container = document.querySelector("#container");


for (let i = 0; i < 4; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("divRow");
    container.appendChild(divRow);
}
for (let i = 0; i < 4; i++) {
    const divRowList = document.querySelectorAll(".divRow");
    const divBox = document.createElement("div");
    divBox.classList.add("divBox");
    divRowList[0].appendChild(divBox);
}
for (let i = 0; i < 4; i++) {
    const divRowList = document.querySelectorAll(".divRow");
    const divBox = document.createElement("div");
    divBox.classList.add("divBox");
    divRowList[1].appendChild(divBox);
}
for (let i = 0; i < 4; i++) {
    const divRowList = document.querySelectorAll(".divRow");
    const divBox = document.createElement("div");
    divBox.classList.add("divBox");
    divRowList[2].appendChild(divBox);
}
for (let i = 0; i < 4; i++) {
    const divRowList = document.querySelectorAll(".divRow");
    const divBox = document.createElement("div");
    divBox.classList.add("divBox");
    divRowList[3].appendChild(divBox);
}

