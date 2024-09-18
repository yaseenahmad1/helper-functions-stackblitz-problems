/*
Write a function isPrime(number) that returns true if the number is a prime
number. A prime number is a number that is only divisible by 1 and itself.

Write a function nextPrime(number) that accepts a number as an argument. The
function should return the nearest prime number that is greater than the given
number.
*/

let isPrime = function(number) {
  if (number < 2) { //essentially this is saying that if num is 1 or 0 it is not a prime so return a false boolean. 
      return false; 
  }

  for (let i = 2; i < number; i++) { //start i at 2 because 1 or 0 is not a prime and then increment but why are we incrementing? 
      if (number % i ===  0) {
          return false; 
      }
  }
  return true; 
}


//this code has to take in any number and return the nearest prime number that is greater than the number given. 
//if we start to iterate in a loop starting with the number given and end it once it reaches a prime number 
//then we can have it return that prime using an if statement. 
//maybe assign a variable that will return 
let nextPrime = function(number) {

  let next = number + 1; 

  while (!(isPrime(next))) { //While next is not a prime number
    next++;                  //Increment next by 1; 
  }

  return next;              //Once you find the prime, return it
}

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isPrime,
  nextPrime
};
