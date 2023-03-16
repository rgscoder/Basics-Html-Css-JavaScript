// I. Data Structure
//  How do we assign a value to a variable?
var pudding = 'Chocolate'; //using = operator
let addTwo = 18 + 27;
const java = 15 * 2; 


// How do we change the value of a variable?
var addThree = 17; //variables declared multiple times with var 
var addThree = 92;
const arr = [1, 3, 4]; //arrays can be changed
arr.push(7);
//"Certain values can be re-assigned"

// How do we assign an existing variable to a new variable?
"Using the = operator to set one variable = to another that has already been defined"
// Remind me, what are declare, assign, and define?
"When you declare a variable you create a variable using let, var, const"
// What is pseudocoding and why should you do it?
"Psuedocode is used to basically layout a code in plain english before it converted to an actual programming language"
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
"A majority about 90%"

// //B. Strings
// // Create a variable called firstVariable
// var firstVariable = '';
// // Assign it the value of the string "Hello World"
// var firstVariable = 'Hello World';
// // Change the value of this variable to some number
// var firstVariable = 4;
// // Store the value of firstVariable in a new variable called secondVariable
// var firstVariable = secondVariable; //reads from right to left
// // Change the value of secondVariable to any string.
let secondVariable = 'Hi';
// What is the value of firstVariable?
'Hi'
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = 'Rex';
let intro = "Hello, my name is " + yourName;
console.log(intro);

//C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a === a != d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "sheep";
// Write code that will print out "mooooo" if the it is equal to cow
if (animal == "cow") {
     console.log("mooooo");
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
  else{
     console.log("Hey! You're not a cow.");
  } 

//   E. Driver's Ed
//   Make a variable that holds a person's age; be semantic
const age = 45;
//   Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (age >= 16) {
     console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young.")
}
