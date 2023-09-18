/* 
    Exercise 3.1
*/
const names = ["Lars", "Peter", "Jan", "Ian"];

function makeList(){
    const lis = names.map(n => `<li>${n}</li>`).join("")
    document.getElementById("ul1").innerHTML = lis;
}
document.getElementById("initialize-list-button").onclick = ()=>makeList();

/*
    Exercise 3.2
*/

document.querySelector("#add-name-button").onclick = (evt) => {
    evt.preventDefault();
    const newName = document.getElementById("add-name-input").value
    const listViewElement = document.createElement("li");
    listViewElement.appendChild(document.createTextNode(newName));
    const ul1 = document.getElementById("ul1").appendChild(listViewElement);

    names.push(newName);
    console.log(names);
}

document.querySelector("#remove-first-button").onclick = (evt) => {
    evt.preventDefault();
    let ul1 = document.querySelector("#ul1");
    
    ul1.children[0].remove();
    names.shift();
    console.log(names);
}

document.querySelector("#remove-last-button").onclick = (evt) =>{
    evt.preventDefault();
    let ul1 = document.querySelector("#ul1");

    ul1.lastChild.remove();
    names.pop();
    console.log(names);

}