/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var name = 'Tyler';
// Do not edit the code above.

/*
  Create a function called isTyler that accepts name as it's only parameter.
  If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
*/

 function isTyler(name){
   if(name ==='Tyler'){
     return true;
   }
   else{return false}
 }

////////// PROBLEM 2 //////////

/*
  Create a function called getName that uses prompt() to prompt the user for their name and then returns the given name.
*/

function getName(Name){
  let name = prompt('Please enter your name');
  return name;
}
////////// PROBLEM 3 //////////

/*
  Create a function called welcome that uses your getName function you created in the previous problem to get the user's name.
  Then alert "Welcome, " plus the given user's name.

  Example: "Welcome, Bob Joe"
*/

function welcome(name){
  var message = getName;
  alert("Welcome, " + message());
}
welcome("steve");


////////// PROBLEM 4 //////////

/*
  What is the difference between arguments and parameters?
*/

// *** Arguments are values passed in, which are defined/constriced by the parameters ***


////////// PROBLEM 5 //////////

/*
  What are all the falsy values in JavaScript and how do you check if something is falsy?
*/

// falsy values are: NaN, Null, 0, undefined, "or", false.

////////// PROBLEM 6 //////////

/*
  Create a function called myName that returns your name
*/

function myName(){
  return name;
}

/*
  Now save the function definition of myName into a new variable called newMyName
*/

//Code Here

let newMyName = myName;

/*
  Now alert the result of invoking newMyName
*/

newMyName(myName);


////////// PROBLEM 7 //////////

/*
  Create a function called outerFn which returns an anonymous function which returns your name.
*/

function outerFn(){
  myName();
  return myName;
}

/*
  Now save the result of invoking outerFn into a variable called innerFn.
*/

let innerFn = outerFn();


/* 
  Now invoke innerFn.
*/

innerFn();