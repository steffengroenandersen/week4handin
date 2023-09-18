/*
    Exercise 4.1
*/

const cars = ["Ford", "WW", "Toyota", "Volvo"];
console.log(cars);

const carOptions = '<option value="" selected="selected">' + cars.map(n =>`<option value="${n}">${n}</option>`).join("");
document.querySelector("#car-selector").innerHTML = carOptions;

/*
    Exercise 4.2
*/

document.querySelector("#car-selector").addEventListener('change', () =>{
    document.querySelector("#car-make").innerHTML = document.querySelector("#car-selector").value

});