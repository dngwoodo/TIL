function sum(a, b) {
  return a + b;
}

/**
 * @param {Array} numbers
 */
function sumOf(numbers) {
  return numbers.reduce((arr, currentValue) => {
    return arr + currentValue;
  }, 0);
}

exports.sum = sum;
exports.sumOf = sumOf;
