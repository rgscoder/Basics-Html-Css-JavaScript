// ///////////////////////////////////
// //Part I: HTML & CSS
// ///////////////////////////////////
// //Rank you comfort with the following material on a scale of 0 - 5:
// //Between 3-4
// ///////////////////////////////////
// //Part II: JavaScript Reps
// ///////////////////////////////////
// //Write a for loop that will log the numbers 1 through 20.
// for (i = 1; i <= 20; i++) {
//     console.log(i);
// }
// ////////////////////////
// //Get Even
// ////////////////////////
// //Write a for loop that will log only the even numbers in 0 through 200. Hint: Think about the increment expression.
// for (i = -2; i < 200; i) {
//     console.log(i += 2);
// }
// ////////////////////////
// //Fizz Buzz
// ////////////////////////
// // Write a javascript application that logs all numbers from 1 - 100.
// for (i = 1; i <= 100; i++) {
//     console.log(i);
// }
// If a number is divisible by 3 log "Fizz" instead of the number.
for (i = 1; i <= 100; i++) {
if (i % 3 === 0 && i % 5 === 0) {
     console.log("FizzBuzz")
}  
else if (i % 3 === 0) { 
console.log("Fizz");
    }

// If a number is divisible by 5 log "Buzz" instead of the number. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
else if (i % 5 === 0) {
    console.log("Buzz");
    }
else { 
    console.log(i);
    }
}
////////////////////////
//Wild Wild Life
////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy);
// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy.shift();
console.log(wolfy);
wolfy.unshift("Gameboy");
console.log(wolfy);
////////////////////////
//Yell at the Ninja Turtles
////////////////////////
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const splinter = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
for (let turtle of splinter) {
    turtle = turtle.toUpperCase();
    console.log(turtle)
}
////////////////////////
//Methods, Revisited
////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
console.log(favMovies.indexOf("Titanic"));
// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort();
console.log(favMovies);
//"The array has been sorted into alphabetical order, and is perminently changed"
// Use the method pop
favMovies.pop();
console.log(favMovies);
// push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);
// Reverse the array
favMovies.reverse();
console.log(favMovies);
// Use the shiftmethod
favMovies.shift();
console.log(favMovies);
// unshift- what does it return?
favMovies.unshift("Jumanji");
console.log(favMovies);
// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) 
//Thought question: did this permanently alter our array?
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(15, 1, "Avatar");
console.log(favMovies);
"Splice is a mutating method, so it does alter the array"
// slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather
// than counting it and hard coding it) - Thought question: did this permanently alter our array?
console.log(favMovies.indexOf('Black Panther'));
favMovies.slice(9);
"Slice does not modify the original array"
// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// console.log your final results
const cut = favMovies.slice(9);
console.log(cut);
"Slice cut the movie list in half starting from the start point given all the way to the end of the array"
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, 
//what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Fast and Furious"));
console.log(favMovies.indexOf("Jaws"));
"Because an array is being created, and arrays are mutable, the const array can be changed"
////////////////////////
//Where is Waldo
////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);
// Change "Neff" to "No One"
const swap = whereIsWaldo[1];
swap.splice(2, 1, "No one");
console.log(whereIsWaldo);
// Access and console.log "Waldo"
console.log(whereIsWaldo[2] [1] [1]);
////////////////////////
//Excited Kitten
////////////////////////
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
const cat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for (i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or 
// "...why does the red dot always get away..." at random.
  if(i % 2 === 0) {
let random = cat[Math.floor(Math.random() * cat.length)];
console.log(random);
    }
}
////////////////////////
//Find the Median
////////////////////////
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number.
//  In which case, look into Math.floor( // something )
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const mid = Math.floor(nums.length / 2);
const value = nums[mid];

console.log(value);
/////////////////////////////////////
//Bonus
/////////////////////////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe 
//   from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to 
//   Thom's accessories array.
const kristynsShoe = kristynsCloset[0];
console.log(kristynsShoe);
kristynsCloset.shift();
console.log(kristynsCloset);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset[2]);

// Modify your code to put together 3 separate outfits for Kristyn and Thom. 
// Put the output in a sentence to tell us what we'll be wearing. Mix and match!
let kOutfit = [];
let kOutfit2 = [];
let kOutfit3 = [];
kOutfit.push(kristynsCloset[2], kristynsCloset[3], kristynsCloset[4]);
console.log("You will be wearing a " + kOutfit);
kOutfit2.push(kristynsCloset[5], kristynsCloset[0], kristynsCloset[1]);
console.log("You will be wearing a " + kOutfit2);
kOutfit3.push(kristynsCloset[4], kristynsCloset[2], kristynsCloset[0]);
console.log("You will be wearing a " + kOutfit3);

let tOutfit = [];
let tOutfit2 = [];
let tOutfit3 = [];
tOutfit.push(thomsCloset[0][1], thomsCloset[2][2], thomsCloset[1][0]);
console.log("You will be wearing a " + tOutfit);
tOutfit2.push(thomsCloset[1][1], thomsCloset[2][0], thomsCloset[0][2]);
console.log("You will be wearing a " + tOutfit2);
tOutfit3.push(thomsCloset[0][3], thomsCloset[1][0], thomsCloset[2][1]);
console.log("You will be wearing a " + tOutfit3);

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
const whirr = kristynsCloset.length;
for (i = 0; i < whirr; i++) {
console.log(kristynsCloset[i] + " WHIRR: Now washing " + (kristynsCloset[i]))
}

// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);