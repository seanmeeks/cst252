/*
 * Author: Sean Meeks
 * Created: September 26, 2022
 * License: Public Domain
 */

// multiples a number "x" by itself
function squared(x) {
  return (x * x);
}

//produces the results for 2 squared and 3 squared
 console.log("3 squared is", squared(3));
 console.log("2 squared is", squared(2));

//sets this list of numbers as an array to be used in the functions
array = [5, 10, 15, 20, 25];

//produces an array of the numbers squared  
console.log("5, 10, 15, 20, and 25 squared:", array.map(squared));
