// Example for demostrating unit test with JEST

// Add our test for basic arithmetic functions

// Addition, positive and negative
const sum = vals => {
  let sum = 0;

  vals.forEach(val => {
    sum += val;
  });

  return sum;
};

const positive = vals => {
  return vals.filter(x => {
    return x > 0;
  });
};

const negative = vals => {
  return vals.filter(x => {
    return x < 0;
  });
};
// Test for multiplication
const mul = (a, b) => a * b;
// Test for subtraction
const sub = (a, b) => a - b;
// Test for division
const div = (a, b) => a / b;

// Expoort modules
module.exports = { sum, mul, sub, div, positive, negative };
