/*
    a) Add the three divs below  to an HTML page, and provide each with a unique id*/
/* 
    let divs = document.querySelectorAll("div");
    for(let i = 0; i < divs.length; i++){
        let div = divs[i];
        div.style.backgroundColor = "blue";
    }
*/


let divs = document.querySelectorAll("#d1, #d2, #d3");
divs.forEach(div => div.style.backgroundColor = "Red");


/*
    b) Add a single button, and assign a click handler to the button.
    When the button is clicked each div should be given a unique colour.
*/

let button = document.querySelector("#btn1");

let colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan", "magenta", "lime"];

function getRandomColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

button.addEventListener("click", function(){
    divs.forEach(div => {
        div.style.backgroundColor = getRandomColor();
    });
});