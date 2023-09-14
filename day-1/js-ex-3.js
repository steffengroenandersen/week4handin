/* 
    3 EXTRA)  Error Handling
    7 will fail due to missing/wrong arguments. But it will fail at runtime, not as with Java, at compile time.

    We can check arguments in JavaScript as sketched below and provide better errors by throwing our own exceptions:

    typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
    typeof callback === "function" //Will fail if callback is undefined or is not a function

    Rewrite the Callback function expression (cb)  to make a check for all its three required arguments, and throw an Error if any of the arguments do not match as explained here.

    Surround the call to the function with a try-catch block, and provide a more user-friendly error message if the function throws an error
*/



/*
    3 EXTRA EXTRA)
    Add a new function like below:

    function addVersion2(n1, n2, ...rest){
    return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
    }

    Test the function like this: console.log(addV2(1,2,3,4,5,6))

    Make sure you understand this new version, if not, you have wasted your time ;-) 
*/