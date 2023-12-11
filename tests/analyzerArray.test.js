const analyzerArray = require('../code/analyzerArray');

test('max', () => {
  expect(analyzerArray.max([1, 8, 3, 4, 2, 6])).toBe(8);
});

test('min', () => {
  expect(analyzerArray.min([1, 8, 3, 4, 2, 6])).toBe(1);
});

test('average', () => {
  expect(analyzerArray.average([1, 8, 3, 4, 2, 6])).toBe(4);
});

test('length', () => {
  expect(analyzerArray.length([1, 8, 3, 4, 2, 6])).toBe(6);
});
