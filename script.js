//  loop Example
for (let i = 1; i <= 5; i++) {
    console.log("For Loop Iteration: " + i);
}

//  loop Example
let j = 1;
while (j <= 5) {
    console.log("While Loop Iteration: " + j);
    j++;
}

//  CSS with JavaScript
function changeCSS() {
    let outputElement = document.getElementById('loopOutput');

    // color based on a variable value
    let colorValue = 1;  
    if (colorValue === 1) {
        outputElement.style.color = "blue";  
    } else {
        outputElement.style.color = "red";  
    }

    // class to highlight the element
    outputElement.classList.add('highlight'); 
    outputElement.innerHTML = "The text has been modified using JavaScript and CSS!";
}
