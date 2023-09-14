/*
    Closures in JavaScript 
    1) Implement and test the Closure Counter Example from the Slides

*/

function test1(){
    counter1.increment();
    $("#c1").html(counter1.value());
}
function test2(){
    counter2.increment();
    $("#c2").html(counter2.value());
}

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {changeBy(1);},
      decrement: function() {changeBy(-1);},
      value: function() { return privateCounter;}
    }
  };
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  //counter1.increment();
  //counter1.increment();
  //lert(counter1.value()); /* Alerts 2 */


/*
    2) Implement a reusable function using the Module pattern that should encapsulate information
    about a person (name, and age) and return an object with the following methods:
    
        setAge
        setName
        getInfo (should return a string like Peter, 45)
*/

function makePerson(){
    // declaring variables
    let name;
    let age;
    return {
        setName: function(newName){ name = newName;},
        setAge: function(newAge){age = newAge;},
        getInfo: function(){return "Name: " + name + "\nAge: " + age;}
    }
}