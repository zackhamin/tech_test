/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: On2
// Explain: This sorting algorithm is On2. Because it uses nested for loops which both run at n times to complete the sort.

module.exports = function sortArray(arr) {
  var temp = [];
  if(arr === temp) {
    return temp;
  }else if(arr.every(Number.isInteger)) {
      Array.isArray(arr) 
      for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
              if (arr[i] < arr[j]) {
                  temp = arr[j];
                  arr[j] = arr[i];
                  arr[i] = temp;
              }
          }
      }
      return arr;
  } else {
      throw new TypeError()
  }
};
