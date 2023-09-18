/*
    Exercise 5.1
*/

const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

console.log(cars);

function convertCarsToString(carArray){
    const carRows = carArray.map(c => `<tr><td>${c.id}</td><td>${c.year}</td><td>${c.make}</td><td>${c.model}</td><td>${c.price}</td></tr>`).join(""); 
    return carRows;
}

function updateCarTable(carArray){
    document.querySelector("#tbody").innerHTML = convertCarsToString(carArray);
}

updateCarTable(cars);

/*
    Exercise 5.2
*/

function showPriceLessThan(carArray, priceLessThan){
    updateCarTable(carArray.filter(c => c.price < priceLessThan));
}

document.querySelector("#price-less-than-button").onclick = (evt) => {
    evt.preventDefault();

    const filterOnPrice = document.querySelector("#price-less-than-input").value;
    showPriceLessThan(cars, filterOnPrice);
    console.log(cars);
}

/*
    Exercise 5.3
*/

document.querySelector("#clear-filter-button").onclick = (evt) => {
    evt.preventDefault();

    updateCarTable(cars);
}

/*
    Exercise 5.5 - Sorting
*/

function sortOnYear(carArray){
    const sortedCarArray = carArray.sort((a, b) => a.year - b.year);
    updateCarTable(sortedCarArray);
}


document.querySelector("#sort-on-year-button    ").onclick = (evt) => {
    evt.preventDefault();

    sortOnYear(cars);
}


