/*
    a) Add a click handler to each 
    div and write code, so when clicked,
    each div will write to the
    console "Hi from idOfTheDiv".
*/

let div1 = document.querySelector("#div1");

div1.addEventListener("click", function(){
    div1.innerHTML = "Hi from " + div1.id;
});

let div2 = document.querySelector("#div2");

div2.addEventListener("click", function(){
    div2.innerHTML = "Hi from " + div2.id;
});