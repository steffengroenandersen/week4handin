/*
    Asynchronous Callbacks
    Most of the javascript callbacks you will be using will be asynchronous, in contrary to map, 
    filter and forEach which are synchronous (MAKE SURE you understand the difference)

    1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
    
    const msgPrinter = function(msg,delay){
        setTimeout(() => console.log(msg),delay); //Observe an arrow-function
        };
        
    console.log("aaaaaaaaaa");          This will be #1
    msgPrinter ("bbbbbbbbbb",2000);     This will be #5
    console.log("dddddddddd");          This will be #2
    msgPrinter ("eeeeeeeeee",1000);     This will be #4
    console.log("ffffffffff");          This will be #3

    2) Add the code to a javascript file, execute and verify whether you answer to 1) was right
*/

const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
    };
    
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");