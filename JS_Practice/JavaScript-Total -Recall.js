// // A. printGreeting
// /*
// Do you think you could write a function called printGreetingwith a parameter 
// namethat returns a greeting with the argument interpolated into the greeting? */
// function printGreeting(name) {
//     return console.log("Hello there, " + name);
// }
// printGreeting("Slimer");

// B. printCool
// Skipped due to repeat

// // C. calculateCube
// // Write a function calculateCubethat takes a single number and prints the volume of a cube 
// // made from that number.
// function calculateCube(num) {
// let num3 = num * num * num;
// return console.log(num3);
// }
// calculateCube(4);

// /* D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a 
// vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel 
// and make sure it's working. In general, when you write functions, take a minute to test them with 
// different values to make sure they behave the way you want.*/
// function isVowel(vow) {
// if (vow == 'a' || vow == 'e' || vow == 'i' || vow == 'o' || vow == 'u') {
//     return true
//     } 
//  else {
//     return false
// }
// }
// console.log(isVowel('i'));

// // /*E. getTwoLengths
// // Write a function getTwoLengthsthat accepts two parameters (strings). 
// // The function should return an array of numbers where each number is the length of the corresponding string.*/
// function getTwoLengths(string, string2) {
// return [string.length, string2.length];
// }
// console.log(getTwoLengths("Grace", "Penguin"));

// // F. getMultipleLengths
// // Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. 
// // The function should return an array of numbers where each number is the length of the corresponding string.
// function getMultipleLengths(strings) {
//     const arr = [];
//     for (let i = 0; i < strings.length; i++) {
//         arr.push(strings[i].length);
//     }
//     return arr;
//     }
//     console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// /* G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are
//  the same, one of them should be returned. Be sure to test it with larger values in each of the three 
//  locations. */
// function maxOfThree (a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     } else if (a === b && a === c) {
//         console.log(a);
//     } else if (a = b && a > c) {
//         console.log(a);
//     } else if (c = b && c > a) {
//         console.log(b);
//     } else if (a = c && c > b) {
//        return console.log(c);
//     }
// }
// console.log(maxOfThree (6, 9, 1));
// console.log(maxOfThree (1935, 34324, 45839342));
// console.log(maxOfThree (1, 2, 3));
// console.log(maxOfThree (1010, 50, 194));

/* H. printLongestWord
Write a function printLongestWordthat accepts a single argument, an array of strings. 
The method should return the longest word in the array. In case of a tie, the method should return
 the word that appears first in the array. */
function printLongestWord(strings) {
    const word = strings
    let longest = []
    for (let i = 0; i < word.length; i++) {
        if (longest.length < word[i].length) {
            longest = word[i];
        }
    }
    return longest;
   
    }
    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
