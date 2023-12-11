const calculator = require('../code/calculator');

test('multiply 2 numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('divide 2 numbers', () => {
  expect(calculator.divide(100, 10)).toBe(10);
});

test('subtract 2 numbers', () => {
  expect(calculator.subtract(2, 10)).toBe(-8);
});
