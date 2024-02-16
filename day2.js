// problem
// Given an integer n, return a counter function. This counter function initially returns n 
// and then returns 1 more than the previous value
// every subsequent time it is called (n, n + 1, n + 2, etc).
 
// Example 1:
// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:
// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 
// *************************************************************************************explanation***********************************************************************************


/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
  let currentCount = n;

  return function () {
    // Increment counter value **before** returning
    currentCount++;
    return currentCount - 1; // Return previous value instead of incremented one
  };
}

const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12

const counter2 = createCounter(-2);
console.log(counter2()); // Output: -2
console.log(counter2()); // Output: -1
console.log(counter2()); // Output: 0
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
