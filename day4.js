//Problem We have one problem with certain condition on given input ie, Increment,Decrement and Reset the value 
//************************************************************************************Solution****************************************************************************************



/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  // Ensure consistent variable scoping using `let`
  let count = init; // Initialize the counter

  return {
    increment: function () {
      count++; // Increment the counter
      return count; // Return the new value
    },
    decrement: function () {
      count--; // Decrement the counter
      return count; // Return the new value
    },
    reset: function () {
      count = init; // Reset the counter to the initial value
      return count; // Return the reset value
    },
    getCount: function () { // Read the current counter value
      return count;
    },
  };
};

// Usage example:
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset()); // Output: 5
console.log(counter.decrement()); // Output: 4
console.log(counter.getCount()); // Output: 4


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
