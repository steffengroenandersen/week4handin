/*
    1) Create a new JavaScript file and add these three functions

    The following questions might seem trivial, but it's extremely important that you can 
    answer (and understand) each, in order to do the JS-stuff we want to do this semester
*/

//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
}

//Function Expression
const sub = function(n1,n2){
    return n1 - n2
} 

//Callback example
const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

