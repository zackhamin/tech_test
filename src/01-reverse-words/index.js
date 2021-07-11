/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: On
// Explain: The algorithm is linear and relevant to a single input. Complexicity in this case is On

module.exports = function reverseWordsInSentence(input) {
  return input.replace(/[$&+,:;=?@#|'<>.^*()%!-|a-zA-Z]+/gm, function(item) {    
    return item.split('').reverse().join('');
});
}
