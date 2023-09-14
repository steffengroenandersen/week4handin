/*
    Callbacks (with map, filter and forEach)
    We saw a simple example of a callback above. Let's get familiar with callbacks, using some of the array-type’s built-in methods.
    Getting comfortable with filter, map and forEach:

    1) Declare a JavaScript array and initialise it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.
    Use the forEach method to iterate and print (console.log) both the original and the new array.

    2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.

    We will continue with this exercise tomorrow when we start manipulating the browser's DOM

    3) Use map, join + just a little bit more to create a function, which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:
    <ul>
    <li>Lars</li>
    <li>Peter</li>
    <li>Jan</li>
    <li>Ian</li>
    <ul>
    The output above was shown with newlines for readability, but this is actually what we want (why):

    <ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li><ul>

    Eventually we will use DOM manipulation and place this into a “running” web-page.

    4)  Given this JavaScript array
    const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
    ];

    a) Use the filter filter function to get arrays with only:
    Cars newer than 1999
    Al  Volvo’s
    All cars with a price below 5000


    4 EXTRA) Use map, join + just a little bit more to implement a function, that , given the cars array used above, will create, and return a string with valid SQL statements to insert the data into a table with matching column names (id, year, make, model, price) as sketched below:

    INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997, 'Ford','E350', 3000 );
    ...

    In SQL in Workbench create a dummy schema delete_me, and a script like this:

    USE delete_me;
    CREATE TABLE cars (
        id INT PRIMARY KEY,
        year INT,
        make VARCHAR(50),
        model VARCHAR(50),
        price DECIMAL(10, 2)
    );
    INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997, 'Ford','E350', 3000 );

    Don't spend too much time on this, this was just to demonstrate one more use case for the map-method

*/