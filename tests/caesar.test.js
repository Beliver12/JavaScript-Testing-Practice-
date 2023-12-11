const caesar = require('../code/caesar');

test('works with single letter', () => {
  expect(caesar('A', 1)).toBe('B');
});

test('works with words', () => {
  expect(caesar('nikola', 1)).toBe('ojlpmb');
});

test('works with phrases', () => {
  expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('works with negativ shift', () => {
  expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

test('works with wraps', () => {
  expect(caesar('Z', 1)).toBe('A');
});

test('works with large shift factors', () => {
  expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
});

test('works with large negativ shift factors', () => {
  expect(caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});
