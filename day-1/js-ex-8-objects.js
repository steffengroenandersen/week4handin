/*
    JavaScript Objects
    1) Create an object with four different properties, with values of your own choice (ex: name, birthday, hobby, email).
    Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object.
    
    for(prop in myObj){
        console.log(prop,myObj[prop])
    }
    
    2) Use the delete keyword to demonstrate we can delete existing properties from an object
    (delete a property, and iterate over the properties again) 

    3) Add a new property to your object to demonstrate that we can add new properties to existing objects
*/

const steffenProfile = {
    name: "Steffen Grøn Andersen",
    age: 32,
    goal: "Become a good developer",
    currentFocus: "Catch up on 3 weeks of missed school and impress Lars",
    sayHello: function(){
        console.log("Hi! My name is Steffen!")
    }
}

// Print steffenProfile
console.log("--- Steffen in his original form ---");

for(let prop in steffenProfile){
    console.log(steffenProfile[prop]);
}

// Delete age
console.log();
console.log("--- Steffen after we delete his age: ---");

delete steffenProfile.age;
for(let prop in steffenProfile){
    console.log(steffenProfile[prop]);
}

// Add property:
console.log();
console.log("--- Steffen after we add favorite drink: ---");

steffenProfile.favoriteDrink = "Coffee";
for(let prop in steffenProfile){
    console.log(steffenProfile[prop]);
}
