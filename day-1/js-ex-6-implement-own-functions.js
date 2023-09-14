/*
    Implement YOUR OWN functions that takes callbacks as arguments

    Assume the array did NOT offer the map and filter methods. Then you would have to implement them yourself.
    This is what you should do in the following to get practice with writing functions that take callbacks as arguments. 
    The next two functions should work exactly as the arrays built in methods, except that you
    will need to pass the array to be used, into the functions.

    a) Implement a function: myFilter(array, callback)that takes an array as the first argument,
    and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
    Test the method with the same array and callback as in the example with the original filter method.
*/

    
/*
    b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
    provides the same functionality as calling the existing map method on an array.
    Test the method with the same array and callback as in the example with the original map method.
*/

function myMap(array, callback){
    const result = [];
    
    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i]))
    }

    return result;
}

function multiply(n1){
    return n1*2;
}

const numbers = [1,2,3,4,5];
const largerNumbers = myMap(numbers, multiply); 

console.log("Original numbers: " + numbers);
console.log("Multiplied numbers: " + largerNumbers);
