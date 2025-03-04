// container element
const container = document.getElementById("container");

// FOR LOOP 
for (let i = 1; i <= 10; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerText = i; //  number inside each box
    container.appendChild(div);
}

// WHILE LOOP 
let boxes = document.querySelectorAll(".box");
let index = 1;
while (index < boxes.length) {
    boxes[index].classList.add("highlight");
    index += 2; // move to every second box
}

// CHANGE CSS DYNAMICALLY BASED ON A VARIABLE
function changeStyles() {
    let isDarkMode = Math.random() > 0.5; // random mode
    if (isDarkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        boxes.forEach(box => box.style.backgroundColor = "gray");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        boxes.forEach(box => box.style.backgroundColor = "lightgray");
    }
}

