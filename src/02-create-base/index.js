// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function createBase(integer) {
 return function numberFunc (integer) {
  if(integer > 0) {
    return integer + 10
  } else {
    return integer - 20
  }

 }
};
