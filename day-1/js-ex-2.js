/* 
    2) Call the functions above as sketched below. 
    It’s not about doing it as fast as you can, but 
    about understanding what's happening, so make sure you understand each line.
*/
console.log( add(1,2) )     // What will this print?
console.log( add )          // What will it print and what does add represent?
console.log( add(1,2,3) ) ; // What will it print
console.log( add(1) );	  // What will it print 	
console.log( cb(3,3,add) ); // What will it print
console.log( cb(4,3,sub) ); // What will it print
console.log(cb(3,3,add())); // What will it print (and what was the problem)
console.log(cb(3,"hh",add));// What will it print
