// ---------------------- UNIT TESTING ---------------------- //

// Using JEST we test some of the basic aritmetic
// functions used to calculate ratios used in this analysis tool

// Instructions for setting up jest

// 1. $ npm init -y         // we instal jest
// 2. npm i --dev jest      // initiate a new Node application
// 3. $ npm i -g jsonserver
//    $ npm i axios we      // instal jest module

// Jest Running Tests
// npm test                 // Run all tests

const { sum, mul, sub, div, positive, negative } = require('./arith');

describe('testing math utilities', () => {
  let vals;
  let sum_of_vals;
  let pos_vals;
  let neg_vals;

  beforeAll(() => {
    pos_vals = [2, 1, 3];
    neg_vals = [-2, -1, -1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  // Test sum
  test('the sum of vals should be 2', () => {
    expect(sum(vals)).toBe(sum_of_vals);
  });

  // Test positive values
  test('should get positive values', () => {
    expect(positive(vals)).toEqual(pos_vals);
  });
  // Test negative values
  test('should get negative values', () => {
    expect(negative(vals)).toEqual(neg_vals);
  });
});

// Jest parameterized tests -
// more powerful when we can test multiple values (including negatives etc)

// Test subtraction with mutiple values
test.each([
  [1, 1, 0],
  [-1, 2, -3],
  [2, 2, 0],
])('%i - %i equals %i', (a, b, expected) => {
  expect(sub(a, b)).toBe(expected);
});

// Test multiplication with multiple values
test.each([
  [1, 1, 1],
  [-1, 2, -2],
  [2, 2, 4],
])('%i * %i equals %i', (a, b, expected) => {
  expect(mul(a, b)).toBe(expected);
});

// Test division with multiple values
test.each([
  [1, 1, 1],
  [-1, 2, -0.5],
  [2, 2, 1],
])('%i / %i equals %i', (a, b, expected) => {
  expect(div(a, b)).toBe(expected);
});
