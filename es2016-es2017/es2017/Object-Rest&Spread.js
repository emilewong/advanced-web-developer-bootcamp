//Object Rest

//example getting remaining (rest) of keys and values in an object and create a new one

var instructor = {first: "Elie", last:"Schoppik", job:"Instructor", numSiblings:3};

var {first, last, ...data} = instructor; //use of object destructuring here


//Object Spread
//Spread out keys and values from object to another
//alterative and more concise to Object.assign, to copy objects or create object from another

//ex1: 
var instructor = {first:"Elie", last:"schoppik", job:"instructor"};
var instructor2 = {...instructor, first:"Tim", last:"Garcia"}; //override first and last values

//ex2:
var defaults = {job:"Instructor", ownsCat:"true", ownsDog:"true"};

var matt = {...defaults, ownsCat:false};
var colt = {...defaults, ownsDog: false};