/**
 * Creates an assertion object for testing expectations.
 * @param {any} val The value to compare against.
 * @return {Object} An object with `toBe` and `notToBe` methods for assertions.
 */
var expect = function(val) {
  return {
    toBe: function(otherVal) {
      // Assert that `val` and `otherVal` are strictly equal (`===`).
      if (val === otherVal) {
        return true;
      } else {
        // Throw an error if they are not equal.
        throw new Error("Not Equal");
      }
    },
    notToBe: function(otherVal) {
      // Assert that `val` and `otherVal` are not strictly equal (`!==`).
      if (val !== otherVal) {
        return true;
      } else {
        // Throw an error if they are equal.
        throw new Error("Equal");
      }
    }
  };
};

/**
 * Example usage: Asserting that the value 5 is strictly equal to itself.
 */
expect(5).toBe(5); // Throws an error because 5 is not an object
