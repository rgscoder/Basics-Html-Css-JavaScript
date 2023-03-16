// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and 
//returns the largest of them. If they are the same, return that number.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x
    } else {
      return y
    };
  }
  console.log(maxOfTwoNumbers(1, 2))
  

  // 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and 
  //returns the largest of them. Again, the Math.max method is not allowed.
  const maxOfThree = function (a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (c > a && c > b) {
        console.log(c);
    }
    else {
       console.log(y);
    }
  };
  maxOfThree(1, 2, 3)
  
  // 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and 
  //returns true if it is a vowel, false otherwise.
  function isCharAVowel(x) {
    let array = ["a", "e", "i", "o", "u"];
    if (array.includes(x.toLowerCase())) {
      console.log("true");
    } else {
      console.log("flase");
    }
  }
  isCharAVowel("I");
  isCharAVowel("D");
  
  // 4. Define a function, as a function expression, sumArraythat takes an array of numbers and 
  //returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
  function sumArray(...nums) {
    let total = 0;
    for (let x in nums) {
      total += nums[x];
    }
    return total;
  }
  console.log(sumArray(1, 2, 3));
  
  // 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and 
  //returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
  function multiplyArray(...nums) {
    let total = 1;
    for (let x in nums) {
      total *= nums[x];
    }
    return total;
  }
  console.log(multiplyArray(1, 2, 3));
  
  // 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
  function numArgs(...arg) {
    return arg.length;
  }
  console.log(numArgs("okay", 6, "jacky", 1, 2, 3));
  
  // 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and 
  //returns it. For example, reverseString('rockstar');would return the string "ratskcor".
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("rockstar"));
  
  // 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and
  // returns the length of the longest string.
  function longestStringInArray(...x) {
    return Math.max(...x.map((el) => el.length));
  }
  console.log(longestStringInArray("banana", "christmas time", "okay"));
  
  // 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and 
  //a number as arguments; and returns an array of the strings that are longer than the number passed in.
  function stringsLongerThan(array, x) {
    let arr = [];
    array.forEach((e) => {
      if (e.length > x) {
        arr.push(e);
      }
    });
    console.log(arr);
  }
  stringsLongerThan(["say", "hello", "in", "the", "morning"], 3);