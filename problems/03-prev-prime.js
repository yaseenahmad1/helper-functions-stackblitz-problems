/*
Write a function isPrime(number) that returns true if the number is a prime
number. A prime number is a number that is only divisible by 1 and itself.

Write a function prevPrime(number) that accepts a number as an argument. The
function should return the nearest prime number that is smaller than the given
argument. Since 2 is the smallest prime number, return null if no number can be
returned. Use the isPrime function as a helper function.
*/

let isPrime = function(number) {
  if (number < 2) { // if the number is 0 or 1, it is not a prime. 
    return false;
  }

for (let i = 2; i < number; i++) { //start at the number 2 and keep incrementing by 1
  if (number % i === 0) {
    return false
  }
}

    return true;
}

let prevPrime = function(number) {
  let previous = number - 1; //Same as previous example we want to take in the argument and subtract that by 1 to find the next prime number

  while (!isPrime(previous)) { // this is literally sayiing while 'previous' is not (!) prime number then...
    previous--;                 //keep decreasing by 1 until you find the next prime number. Once you do....
  }

return previous;              //return that value which will be store in previous. 
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7)); // 5
console.log(prevPrime(4)); // 3
console.log(prevPrime(2)); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isPrime,
  prevPrime
};
